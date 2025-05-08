
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { SearchBar } from "@/components/home/SearchBar";
import JobList from "@/components/JobList";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  // State for search parameters
  const [searchQuery, setSearchQuery] = useState(queryParams.get("query") || "");
  const [jobFunction, setJobFunction] = useState(queryParams.get("jobFunction") || "all");
  const [sector, setSector] = useState(queryParams.get("sector") || "all");
  const [jobLocation, setJobLocation] = useState(queryParams.get("location") || "all");
  const [jobType, setJobType] = useState(queryParams.get("jobType") || "all");
  const [setting, setSetting] = useState(queryParams.get("setting") || "all");
  
  // Search parameters for API
  const [searchParams, setSearchParams] = useState<Record<string, string | boolean | undefined>>({});

  // When URL parameters change, update the search state
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSearchQuery(params.get("query") || "");
    setJobFunction(params.get("jobFunction") || "all");
    setSector(params.get("sector") || "all");
    setJobLocation(params.get("location") || "all");
    setJobType(params.get("jobType") || "all");
    setSetting(params.get("setting") || "all");
    
    // Process search parameters for API
    updateSearchParams();
  }, [location.search]);

  // Update search parameters for API based on form values
  const updateSearchParams = () => {
    const params: Record<string, string | boolean | undefined> = {};
    
    if (searchQuery) params.search = searchQuery;
    if (jobFunction !== "all") params.job_function = jobFunction;
    if (sector !== "all") params.sector = sector;
    if (jobLocation !== "all") params.location = jobLocation;
    if (jobType !== "all") params.type = jobType;
    if (setting !== "all") params.setting = setting;
    
    setSearchParams(params);
  };

  // Handle search form submission
  const handleSearch = () => {
    // Update the URL parameters
    const urlParams = new URLSearchParams();
    if (searchQuery) urlParams.append("query", searchQuery);
    if (jobFunction !== "all") urlParams.append("jobFunction", jobFunction);
    if (sector !== "all") urlParams.append("sector", sector);
    if (jobLocation !== "all") urlParams.append("location", jobLocation);
    if (jobType !== "all") urlParams.append("jobType", jobType);
    if (setting !== "all") urlParams.append("setting", setting);
    
    // Update the browser URL without causing a navigation/reload
    window.history.replaceState({}, '', `?${urlParams.toString()}`);
    
    // Update the search parameters for the API
    updateSearchParams();
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
          <h2 className="text-lg font-semibold mb-4">Search Results</h2>
          <JobList searchParams={searchParams} />
        </div>
      </main>
    </div>
  );
};

export default SearchResults;
