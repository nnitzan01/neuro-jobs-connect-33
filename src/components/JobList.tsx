
import { useEffect } from "react";
import JobCard from "./JobCard";
import LoadingSpinner from "./LoadingSpinner";
import EmptyJobsState from "./EmptyJobsState";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { fetchJobs } from "@/services/jobService";
import { Job } from "@/types/job";

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
        title: "Using Backup Data",
        description: "API connection failed. Using CSV backup data.",
        variant: "default",
      });
    }
  }, [error, toast]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!jobs || jobs.length === 0) {
    return <EmptyJobsState />;
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-4">
      {jobs.map((job) => (
        <JobCard job={job} key={job.id} featured={featured} />
      ))}
    </section>
  );
}

// Re-export the Job type for backward compatibility
export type { Job };
