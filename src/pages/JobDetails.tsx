
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Briefcase, MapPin, Building, Clock, FileText, DollarSign, CalendarDays } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { type Job } from "@/components/JobList";

// Fetch a single job by ID
const fetchJobById = async (id: string): Promise<Job> => {
  try {
    const url = `http://localhost:8000/api/jobs/${id}/`;
    
    const username = "nnitzan";
    const password = "admin2025";
    const credentials = btoa(`${username}:${password}`);
    
    const response = await fetch(url, {
      headers: {
        "Authorization": `Basic ${credentials}`
      }
    });
    
    if (!response.ok) {
      throw new Error("Failed to fetch job details");
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching job details:", error);
    throw error;
  }
};

// Format date to a readable string
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export default function JobDetails() {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  
  // Use React Query to fetch the job details
  const { 
    data: job, 
    isLoading, 
    error 
  } = useQuery({
    queryKey: ["job", id],
    queryFn: () => fetchJobById(id as string),
    enabled: !!id,
  });

  // Handle errors
  useEffect(() => {
    if (error) {
      toast({
        title: "Error Loading Job",
        description: "Failed to load job details. Please try again.",
        variant: "destructive",
      });
    }
  }, [error, toast]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#f8fbff] via-[#e5deff] to-[#f2fce2]">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#f8fbff] via-[#e5deff] to-[#f2fce2]">
        <Card className="w-full max-w-3xl">
          <CardHeader>
            <CardTitle>Job Not Found</CardTitle>
            <CardDescription>The job you are looking for could not be found.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button onClick={() => window.history.back()}>Go Back</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fbff] via-[#e5deff] to-[#f2fce2] py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <Button 
          variant="outline" 
          onClick={() => window.history.back()}
          className="mb-6"
        >
          &larr; Back to Jobs
        </Button>
        
        <Card className="shadow-lg border-none">
          <CardHeader className="pb-4 border-b">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-3xl font-bold mb-2">{job.title}</CardTitle>
                <div className="flex items-center gap-2 text-gray-700">
                  <Building size={18} />
                  <span className="font-semibold">{job.company}</span>
                </div>
              </div>
              {job.featured && (
                <Badge className="bg-primary text-white px-3 py-1">Featured</Badge>
              )}
            </div>
          </CardHeader>
          
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{job.location}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Clock size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Job Type</p>
                  <p className="font-medium">{job.type}</p>
                </div>
              </div>
              
              {job.setting && (
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Briefcase size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Work Setting</p>
                    <p className="font-medium">{job.setting}</p>
                  </div>
                </div>
              )}
              
              {job.sector && (
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <FileText size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Sector</p>
                    <p className="font-medium">{job.sector}</p>
                  </div>
                </div>
              )}
              
              {job.salary && (
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <DollarSign size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Salary Range</p>
                    <p className="font-medium">{job.salary}</p>
                  </div>
                </div>
              )}
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <CalendarDays size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Posted On</p>
                  <p className="font-medium">{formatDate(job.created_at)}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3">Job Description</h3>
              {job.description ? (
                <div className="prose max-w-none">
                  <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
                </div>
              ) : (
                <p className="text-gray-500 italic">No description provided</p>
              )}
            </div>
            
            {job.requirements && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-3">Requirements</h3>
                <div className="prose max-w-none">
                  <p className="text-gray-700 whitespace-pre-line">{job.requirements}</p>
                </div>
              </div>
            )}
          </CardContent>
          
          <CardFooter className="border-t pt-6">
            <a 
              href={job.applyUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full"
            >
              <Button className="w-full text-base py-6">
                Apply for this position
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
