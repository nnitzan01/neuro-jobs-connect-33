
import React from "react";
import { FilterSelect } from "./FilterSelect";
import { 
  jobFunctionOptions, 
  sectorOptions, 
  locationOptions, 
  jobTypeOptions, 
  settingOptions, 
  filterIcons 
} from "./FilterOptions";
import { SearchButton } from "./SearchButton";

interface FilterRowProps {
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
  handleSearch: () => void;
}

export const FilterRow = ({
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
  handleSearch
}: FilterRowProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Job Function Filter */}
      <FilterSelect
        icon={filterIcons.jobFunction}
        value={jobFunction}
        onChange={setJobFunction}
        placeholder="Job Function"
        options={jobFunctionOptions}
      />
      
      {/* Sector Filter */}
      <FilterSelect
        icon={filterIcons.sector}
        value={sector}
        onChange={setSector}
        placeholder="Sector"
        options={sectorOptions}
      />
      
      {/* Location Filter */}
      <FilterSelect
        icon={filterIcons.location}
        value={location}
        onChange={setLocation}
        placeholder="Location"
        options={locationOptions}
      />
      
      {/* Job Type Filter */}
      <FilterSelect
        icon={filterIcons.jobType}
        value={jobType}
        onChange={setJobType}
        placeholder="Job Type"
        options={jobTypeOptions}
      />
      
      {/* Setting Filter */}
      <FilterSelect
        icon={filterIcons.setting}
        value={setting}
        onChange={setSetting}
        placeholder="Setting"
        options={settingOptions}
      />
      
      {/* Search Button */}
      <div className="sm:col-span-2 lg:col-span-1">
        <SearchButton onClick={handleSearch} />
      </div>
    </div>
  );
};
