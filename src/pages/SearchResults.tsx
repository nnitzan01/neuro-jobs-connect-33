import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { SearchBar } from "@/components/home/SearchBar";
import JobList from "@/components/JobList";
import JobCard from "@/components/JobCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Job } from "@/components/JobList";

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  const [searchQuery, setSearchQuery] = useState(queryParams.get("query") || "");
  const [jobFunction, setJobFunction] = useState(queryParams.get("jobFunction") || "all");
  const [sector, setSector] = useState(queryParams.get("sector") || "all");
  const [jobLocation, setJobLocation] = useState(queryParams.get("location") || "all");
  const [jobType, setJobType] = useState(queryParams.get("jobType") || "all");
  const [setting, setSetting] = useState(queryParams.get("setting") || "all");

  // Fetch search results
  const fetchSearchResults = async (): Promise<Job[]> => {
    const params = new URLSearchParams();
    if (searchQuery) params.append("search", searchQuery);
    if (jobFunction !== "all") params.append("job_function", jobFunction);
    if (sector !== "all") params.append("sector", sector);
    if (jobLocation !== "all") params.append("location", jobLocation);
    if (jobType !== "all") params.append("type", jobType);
    if (setting !== "all") params.append("setting", setting);
    
    const url = `http://localhost:8000/api/jobs/?${params.toString()}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error("Failed to fetch search results");
    }
    
    return response.json();
  };
  
  const { data: jobs, isLoading, error, refetch } = useQuery({
    queryKey: ["search-jobs", searchQuery, jobFunction, sector, jobLocation, jobType, setting],
    queryFn: fetchSearchResults,
  });

  // When search parameters change, update the URL
  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchQuery) params.append("query", searchQuery);
    if (jobFunction !== "all") params.append("jobFunction", jobFunction);
    if (sector !== "all") params.append("sector", sector);
    if (jobLocation !== "all") params.append("location", jobLocation);
    if (jobType !== "all") params.append("jobType", jobType);
    if (setting !== "all") params.append("setting", setting);
    
    window.history.replaceState({}, '', `?${params.toString()}`);
    refetch();
  };

  return (
    <div className="min-h-screen flex font-sans w-full bg-gradient-to-br from-[#f8fbff] via-[#e5deff] to-[#f2fce2]">
      <main className="flex-1 px-6 py-10 max-w-6xl mx-auto">
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline" size="sm" className="mb-4">
              <ChevronLeft className="mr-1 h-4 w-4" /> Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold mb-2">Job Search Results</h1>
          <p className="text-gray-600">Filter and find your perfect neurotech position</p>
        </div>
        
        <div className="mb-8">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            jobFunction={jobFunction}
            setJobFunction={setJobFunction}
            sector={sector}
            setSector={setSector}
            location={jobLocation}
            setLocation={setJobLocation}
            jobType={jobType}
            setJobType={setJobType}
            setting={setting}
            setSetting={setSetting}
            onSearch={handleSearch}
          />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          {isLoading ? (
            <div className="grid place-items-center py-10">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              <p>Error loading search results. Please try again.</p>
            </div>
          ) : jobs && jobs.length > 0 ? (
            <>
              <h2 className="text-lg font-semibold mb-4">{jobs.length} jobs found</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {jobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">No jobs found matching your criteria.</p>
              <p className="text-gray-500">Try adjusting your search filters.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SearchResults;
