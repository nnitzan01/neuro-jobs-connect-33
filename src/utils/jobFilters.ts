
import { Job } from "@/types/job";

// Helper function to filter jobs based on search parameters
export const filterJobs = (jobs: Job[], params: Record<string, string | boolean | undefined>): Job[] => {
  let filteredJobs = [...jobs];
  
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
};
