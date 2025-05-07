
import { useState, useEffect } from "react";
import JobCard from "./JobCard";
import { useQuery } from "@tanstack/react-query";

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

// API service
const fetchJobs = async (featured?: boolean): Promise<Job[]> => {
  const url = featured !== undefined 
    ? `http://localhost:8000/api/jobs/?featured=${featured}` 
    : "http://localhost:8000/api/jobs/";
  
  const response = await fetch(url);
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
};

interface JobListProps {
  featured?: boolean;
}

export default function JobList({ featured = false }: JobListProps) {
  // Using React Query for data fetching
  const { data: jobs, isLoading, error } = useQuery({
    queryKey: ["jobs", featured],
    queryFn: () => fetchJobs(featured),
  });

  if (isLoading) {
    return (
      <div className="grid place-items-center py-10">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
        <p>Failed to load jobs. Please try again later.</p>
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
