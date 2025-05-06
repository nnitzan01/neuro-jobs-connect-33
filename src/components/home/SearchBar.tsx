
import React from "react";
import { Search, Briefcase, Building, MapPin, Clock, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

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
}: SearchBarProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 mb-8 animate-fade-in">
      <h2 className="text-lg font-bold mb-4">Find Your Perfect Neurotech Position</h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 w-full rounded-md">
          <Search size={20} className="text-gray-400" />
          <Input
            type="search"
            placeholder="Search for job titles, skills, or companies..."
            className="flex-1"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Job Function Filter */}
          <div>
            <Select value={jobFunction} onValueChange={setJobFunction}>
              <SelectTrigger className="w-full">
                <div className="flex items-center gap-2">
                  <Briefcase size={18} className="text-gray-500" />
                  <SelectValue placeholder="Job Function" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Functions</SelectItem>
                <SelectItem value="software-engineer">Software Engineer</SelectItem>
                <SelectItem value="data-scientist">Data Scientist</SelectItem>
                <SelectItem value="researcher">Researcher</SelectItem>
                <SelectItem value="clinical-trials-specialist">Clinical Trials Specialist</SelectItem>
                <SelectItem value="pharma">Pharma</SelectItem>
                <SelectItem value="neuroscientist">Neuroscientist</SelectItem>
                <SelectItem value="hardware-engineer">Hardware Engineer</SelectItem>
                <SelectItem value="product-manager">Product Manager</SelectItem>
                <SelectItem value="ux-researcher">UX Researcher</SelectItem>
                <SelectItem value="others">Others</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Sector Filter */}
          <div>
            <Select value={sector} onValueChange={setSector}>
              <SelectTrigger className="w-full">
                <div className="flex items-center gap-2">
                  <Building size={18} className="text-gray-500" />
                  <SelectValue placeholder="Sector" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sectors</SelectItem>
                <SelectItem value="implantable-devices">Implantable Devices</SelectItem>
                <SelectItem value="pharmaceuticals-neuromodulation">Pharmaceuticals & Neuromodulation</SelectItem>
                <SelectItem value="neurosensing-diagnostics">Neurosensing & Diagnostics</SelectItem>
                <SelectItem value="neurorehabilitation">Neurorehabilitation</SelectItem>
                <SelectItem value="cognitive-enhancement">Cognitive Enhancement & Consumer Neurotech</SelectItem>
                <SelectItem value="ai-neuroinformatics">AI & Neuroinformatics</SelectItem>
                <SelectItem value="others">Others</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Location Filter */}
          <div>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger className="w-full">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-gray-500" />
                  <SelectValue placeholder="Location" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="AL">Alabama</SelectItem>
                <SelectItem value="AK">Alaska</SelectItem>
                <SelectItem value="AZ">Arizona</SelectItem>
                <SelectItem value="AR">Arkansas</SelectItem>
                <SelectItem value="CA">California</SelectItem>
                <SelectItem value="CO">Colorado</SelectItem>
                <SelectItem value="CT">Connecticut</SelectItem>
                <SelectItem value="DE">Delaware</SelectItem>
                <SelectItem value="FL">Florida</SelectItem>
                <SelectItem value="GA">Georgia</SelectItem>
                <SelectItem value="HI">Hawaii</SelectItem>
                <SelectItem value="ID">Idaho</SelectItem>
                <SelectItem value="IL">Illinois</SelectItem>
                <SelectItem value="IN">Indiana</SelectItem>
                <SelectItem value="IA">Iowa</SelectItem>
                <SelectItem value="KS">Kansas</SelectItem>
                <SelectItem value="KY">Kentucky</SelectItem>
                <SelectItem value="LA">Louisiana</SelectItem>
                <SelectItem value="ME">Maine</SelectItem>
                <SelectItem value="MD">Maryland</SelectItem>
                <SelectItem value="MA">Massachusetts</SelectItem>
                <SelectItem value="MI">Michigan</SelectItem>
                <SelectItem value="MN">Minnesota</SelectItem>
                <SelectItem value="MS">Mississippi</SelectItem>
                <SelectItem value="MO">Missouri</SelectItem>
                <SelectItem value="MT">Montana</SelectItem>
                <SelectItem value="NE">Nebraska</SelectItem>
                <SelectItem value="NV">Nevada</SelectItem>
                <SelectItem value="NH">New Hampshire</SelectItem>
                <SelectItem value="NJ">New Jersey</SelectItem>
                <SelectItem value="NM">New Mexico</SelectItem>
                <SelectItem value="NY">New York</SelectItem>
                <SelectItem value="NC">North Carolina</SelectItem>
                <SelectItem value="ND">North Dakota</SelectItem>
                <SelectItem value="OH">Ohio</SelectItem>
                <SelectItem value="OK">Oklahoma</SelectItem>
                <SelectItem value="OR">Oregon</SelectItem>
                <SelectItem value="PA">Pennsylvania</SelectItem>
                <SelectItem value="RI">Rhode Island</SelectItem>
                <SelectItem value="SC">South Carolina</SelectItem>
                <SelectItem value="SD">South Dakota</SelectItem>
                <SelectItem value="TN">Tennessee</SelectItem>
                <SelectItem value="TX">Texas</SelectItem>
                <SelectItem value="UT">Utah</SelectItem>
                <SelectItem value="VT">Vermont</SelectItem>
                <SelectItem value="VA">Virginia</SelectItem>
                <SelectItem value="WA">Washington</SelectItem>
                <SelectItem value="WV">West Virginia</SelectItem>
                <SelectItem value="WI">Wisconsin</SelectItem>
                <SelectItem value="WY">Wyoming</SelectItem>
                <SelectItem value="DC">Washington DC</SelectItem>
                <SelectItem value="remote">Remote (USA)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Job Type Filter */}
          <div>
            <Select value={jobType} onValueChange={setJobType}>
              <SelectTrigger className="w-full">
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-gray-500" />
                  <SelectValue placeholder="Job Type" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Setting Filter */}
          <div>
            <Select value={setting} onValueChange={setSetting}>
              <SelectTrigger className="w-full">
                <div className="flex items-center gap-2">
                  <Settings size={18} className="text-gray-500" />
                  <SelectValue placeholder="Setting" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Settings</SelectItem>
                <SelectItem value="on-site">On-site</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
                <SelectItem value="hybrid">Hybrid</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Search Button */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Button className="w-full">
              <Search size={18} className="mr-2" />
              Search Jobs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
