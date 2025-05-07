
import { useState, useEffect } from "react";
import { Header } from "@/components/home/Header";
import { SearchBar } from "@/components/home/SearchBar";
import JobList from "@/components/JobList";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [jobFunction, setJobFunction] = useState("all");
  const [sector, setSector] = useState("all");
  const [location, setLocation] = useState("all");
  const [jobType, setJobType] = useState("all");
  const [setting, setSetting] = useState("all");
  const [isLocalBackend, setIsLocalBackend] = useState(true);

  // Check if the backend is running locally
  useEffect(() => {
    fetch("http://localhost:8000/api/jobs/", { method: "HEAD" })
      .then(response => {
        setIsLocalBackend(response.ok);
      })
      .catch(() => {
        setIsLocalBackend(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex font-sans w-full bg-gradient-to-br from-[#f8fbff] via-[#e5deff] to-[#f2fce2]">
      <main className="flex-1 px-6 py-10 max-w-6xl mx-auto">
        <Header />
        
        {!isLocalBackend && (
          <Alert variant="destructive" className="mb-6 animate-fade-in">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Backend Connection Issue</AlertTitle>
            <AlertDescription>
              Your local backend server at http://localhost:8000 is not accessible. Showing demo data instead.
              To see real data, please start your Django server using <code>python manage.py runserver</code>.
            </AlertDescription>
          </Alert>
        )}
        
        <div id="featured-jobs" className="mb-8 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4">Featured Jobs</h2>
          <JobList featured={true} />
        </div>
        
        <div id="search-jobs" className="scroll-mt-20 mb-8">
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

        <div id="all-jobs" className="mb-8 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4">All Jobs</h2>
          <JobList featured={false} />
        </div>
        
        <div id="our-mission" className="mb-8 mt-16 pt-4 scroll-mt-20 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-center">Our Mission</h2>
          <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in">
            <p className="text-gray-700 mb-4">
              At NeuroTech Job Board, we're dedicated to connecting talented individuals with cutting-edge opportunities in the rapidly expanding field of neurotechnology.
            </p>
            <p className="text-gray-700 mb-4">
              Our mission is to accelerate innovation in brain-computer interfaces, neural engineering, and cognitive science by bringing together the brightest minds and the most forward-thinking companies.
            </p>
            <p className="text-gray-700">
              We believe that advancements in neurotechnology have the potential to transform healthcare, enhance human capabilities, and address some of humanity's greatest challenges. By fostering a vibrant talent ecosystem, we aim to contribute to a future where neurotechnology improves lives worldwide.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
