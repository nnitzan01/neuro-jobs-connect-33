
import { Job } from "@/types/job";
import { fetchJobsFromCSV } from "@/utils/csvParser";
import { filterJobs } from "@/utils/jobFilters";

// Sample fallback data when both API and CSV are unavailable
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
export const fetchJobs = async (params: Record<string, string | boolean | undefined>): Promise<Job[]> => {
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
    console.error("Error fetching jobs from API:", error);
    
    // Try to fetch from CSV as backup
    try {
      const csvJobs = await fetchJobsFromCSV();
      console.log("Using CSV data as backup");
      return filterJobs(csvJobs, params);
    } catch (csvError) {
      console.error("Error fetching jobs from CSV:", csvError);
      
      // Return filtered fallback data based on parameters
      return filterJobs(fallbackJobs, params);
    }
  }
};
