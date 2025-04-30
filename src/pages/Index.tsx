
import { useState } from "react";
import { Header } from "@/components/home/Header";
import { SearchBar } from "@/components/home/SearchBar";
import JobList from "@/components/JobList";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [jobFunction, setJobFunction] = useState("");
  const [sector, setSector] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [setting, setSetting] = useState("");

  return (
    <div className="min-h-screen flex font-sans w-full bg-gradient-to-br from-[#f8fbff] via-[#e5deff] to-[#f2fce2]">
      <main className="flex-1 px-6 py-10 max-w-6xl mx-auto">
        <Header />
        
        <div id="featured-jobs" className="mb-8 scroll-mt-20">
          <JobList />
        </div>
        
        <div id="search-jobs" className="scroll-mt-20">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
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
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
