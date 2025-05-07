import React from "react";
import { useNavigate } from "react-router-dom";
import { SearchField } from "./search/SearchField";
import { FilterRow } from "./search/FilterRow";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  jobFunction: string;
  setJobFunction: (value: string) => void;
  sector: string;
  setSector: (value: string) => void;
  location: string;
  setLocation: (value: string) => void;
  jobType: string;
  setJobType: (value: string) => void;
  setting: string;
  setSetting: (value: string) => void;
  onSearch?: () => void;
}

export const SearchBar = ({
  searchQuery,
  setSearchQuery,
  jobFunction,
  setJobFunction,
  sector,
  setSector,
  location,
  setLocation,
  jobType,
  setJobType,
  setting,
  setSetting,
  onSearch,
}: SearchBarProps) => {
  const navigate = useNavigate();

  const handleSearch = () => {
    // If a custom search handler was provided, use it
    if (onSearch) {
      onSearch();
      return;
    }

    // Otherwise, build the query string and navigate
    const queryParams = new URLSearchParams();
    
    if (searchQuery) queryParams.append("query", searchQuery);
    if (jobFunction !== "all" && jobFunction) queryParams.append("jobFunction", jobFunction);
    if (sector !== "all" && sector) queryParams.append("sector", sector);
    if (location !== "all" && location) queryParams.append("location", location);
    if (jobType !== "all" && jobType) queryParams.append("jobType", jobType);
    if (setting !== "all" && setting) queryParams.append("setting", setting);
    
    navigate(`/search?${queryParams.toString()}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-5 mb-8 animate-fade-in">
      <h2 className="text-lg font-bold mb-4">Find Your Perfect Neurotech Position</h2>
      <div className="flex flex-col gap-4">
        <SearchField searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <FilterRow
          jobFunction={jobFunction}
          setJobFunction={setJobFunction}
          sector={sector}
          setSector={setSector}
          location={location}
          setLocation={setLocation}
          jobType={jobType}
          setJobType={setJobType}
          setting={setting}
          setSetting={setSetting}
          handleSearch={handleSearch}
        />
      </div>
    </div>
  );
};
