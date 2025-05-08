
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
  requirements?: string;
  salary?: string;
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

// API service with search parameters support
const fetchJobs = async (params: Record<string, string | boolean | undefined>): Promise<Job[]> => {
  try {
    // Build query parameters from the params object
    const queryParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== "all") {
        queryParams.append(key, String(value));
      }
    });
    
    const url = `http://localhost:8000/api/jobs/?${queryParams.toString()}`;
    
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
    
    // Return filtered fallback data based on parameters
    let filteredJobs = [...fallbackJobs];
    
    if (params.featured !== undefined) {
      filteredJobs = filteredJobs.filter(job => job.featured === params.featured);
    }
    if (params.search) {
      const searchString = String(params.search).toLowerCase();
      filteredJobs = filteredJobs.filter(job => 
        job.title.toLowerCase().includes(searchString) || 
        job.company.toLowerCase().includes(searchString) || 
        (job.description && job.description.toLowerCase().includes(searchString))
      );
    }
    if (params.job_function && params.job_function !== "all") {
      const jobFunction = String(params.job_function).replace(/-/g, ' ').toLowerCase();
      filteredJobs = filteredJobs.filter(job => 
        job.title.toLowerCase().includes(jobFunction)
      );
    }
    if (params.sector && params.sector !== "all") {
      const sector = String(params.sector).replace(/-/g, ' ').toLowerCase();
      filteredJobs = filteredJobs.filter(job => 
        job.sector?.toLowerCase().includes(sector)
      );
    }
    if (params.location && params.location !== "all") {
      filteredJobs = filteredJobs.filter(job => 
        job.location.includes(String(params.location))
      );
    }
    if (params.type && params.type !== "all") {
      filteredJobs = filteredJobs.filter(job => 
        job.type.toLowerCase().includes(String(params.type).toLowerCase())
      );
    }
    if (params.setting && params.setting !== "all") {
      filteredJobs = filteredJobs.filter(job => 
        job.setting?.toLowerCase().includes(String(params.setting).toLowerCase())
      );
    }
    
    return filteredJobs;
  }
};

interface JobListProps {
  featured?: boolean;
  searchParams?: Record<string, string | boolean | undefined>;
}

export default function JobList({ featured = false, searchParams = {} }: JobListProps) {
  const { toast } = useToast();
  
  // Combine featured flag with other search parameters
  const queryParams = { featured, ...searchParams };
  
  // Using React Query for data fetching with proper error handling
  const { data: jobs, isLoading, error } = useQuery({
    queryKey: ["jobs", queryParams],
    queryFn: () => fetchJobs(queryParams),
  });

  // Handle errors with useEffect
  useEffect(() => {
    if (error) {
      toast({
        title: "Connection Issue",
        description: "Using demo data as API connection failed. Start your local backend to see real data.",
        variant: "destructive",
      });
    }
  }, [error, toast]);

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
