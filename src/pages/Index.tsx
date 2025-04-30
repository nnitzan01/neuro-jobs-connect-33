
import { useState } from "react";
import JobList from "../components/JobList";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Command, CommandInput } from "@/components/ui/command";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="min-h-screen flex font-sans w-full bg-gradient-to-br from-[#f8fbff] via-[#e5deff] to-[#f2fce2]">
      <main className="flex-1 px-6 py-10 max-w-6xl mx-auto">
        <header className="mb-10 flex flex-col gap-4 items-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary text-center drop-shadow-sm animate-fade-in">NeuroStartups Job Board</h1>
          <p className="text-gray-600 text-lg md:text-xl text-center max-w-2xl animate-fade-in">Discover open positions at the world's most innovative neurotechnology startups — from BCI development to machine learning and neuroscience.</p>
          <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" alt="neurotech hero" className="rounded-lg shadow-lg mt-4 w-full max-w-xl h-56 object-cover animate-fade-in" />
        </header>
        
        {/* Enhanced Search Bar */}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Select value={jobType} onValueChange={setJobType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                    <SelectItem value="onsite">On-site</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="remote">Remote</SelectItem>
                    <SelectItem value="usa">United States</SelectItem>
                    <SelectItem value="europe">Europe</SelectItem>
                    <SelectItem value="asia">Asia</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                    <SelectItem value="africa">Africa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Button className="w-full">
                  <Search size={18} className="mr-2" />
                  Search Jobs
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <JobList />
        </div>
      </main>
    </div>
  );
};

export default Index;
