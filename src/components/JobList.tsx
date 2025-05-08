
import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

// Define the Job type (matching our Django model)
export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  logo?: string;
  applyUrl: string;
  featured: boolean;
  sector?: string;
  setting?: string;
  description?: string;
  created_at: string;
};

// Sample fallback data when API is unavailable
const fallbackJobs: Job[] = [
  {
    id: 1,
    title: "Neural Engineer",
    company: "BrainTech Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    applyUrl: "https://example.com/apply",
    featured: true,
    sector: "Implantable Devices",
    setting: "On-site",
    created_at: "2025-05-01T12:00:00Z"
  },
  {
    id: 2,
    title: "Neuroscience Researcher",
    company: "Neural Networks Labs",
    location: "Boston, MA",
    type: "Full-time",
    applyUrl: "https://example.com/apply",
    featured: true,
    sector: "Neurosensing & Diagnostics",
    setting: "Hybrid",
    created_at: "2025-04-28T12:00:00Z"
  },
  {
    id: 3,
    title: "Data Scientist - Neural Data",
    company: "CogniTech",
    location: "Remote (USA)",
    type: "Full-time",
    applyUrl: "https://example.com/apply",
    featured: false,
    sector: "AI & Neuroinformatics",
    setting: "Remote",
    created_at: "2025-04-25T12:00:00Z"
  }
];

// API service
const fetchJobs = async (featured?: boolean): Promise<Job[]> => {
  try {
    const url = featured !== undefined 
      ? `http://localhost:8000/api/jobs/?featured=${featured}` 
      : "http://localhost:8000/api/jobs/";
    
    // Use your existing superuser credentials
    const username = "nnitzan"; // Replace with your actual superuser username
    const password = "admin2025"; // Replace with your actual superuser password
    const credentials = btoa(`${username}:${password}`); // Base64 encode username:password
    
    const response = await fetch(url, {
      headers: {
        "Authorization": `Basic ${credentials}` // Add Basic Auth
      }
    });
    
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    
    // Get the response data
    const data = await response.json();
    
    // Check if the response is paginated (Django REST Framework format)
    if (data.results && Array.isArray(data.results)) {
      return data.results;
    }
    
    // If not paginated, return the data directly if it's an array
    if (Array.isArray(data)) {
      return data;
    }
    
    // If we can't determine the structure, return an empty array
    console.error("Unexpected API response format:", data);
    return [];
  } catch (error) {
    console.error("Error fetching jobs:", error);
    // Return fallback data when API is unavailable
    return fallbackJobs.filter(job => featured === undefined || job.featured === featured);
  }
};

interface JobListProps {
  featured?: boolean;
}

export default function JobList({ featured = false }: JobListProps) {
  const { toast } = useToast();
  
  // Using React Query for data fetching with proper error handling using onSettled
  const { data: jobs, isLoading, error } = useQuery({
    queryKey: ["jobs", featured],
    queryFn: () => fetchJobs(featured),
    onSettled: (data, error) => {
      if (error) {
        toast({
          title: "Connection Issue",
          description: "Using demo data as API connection failed. Start your local backend to see real data.",
          variant: "destructive",
        });
      }
    }
  });

  if (isLoading) {
    return (
      <div className="grid place-items-center py-10">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!jobs || jobs.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow text-center">
        <p className="text-gray-500">No jobs found.</p>
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-4">
      {jobs.map((job) => (
        <JobCard job={job} key={job.id} featured={featured} />
      ))}
    </section>
  );
}
