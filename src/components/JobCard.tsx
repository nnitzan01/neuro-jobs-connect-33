
import { Briefcase, MapPin, Building, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Job } from "@/types/job";
import { Link } from "react-router-dom";

interface JobCardProps {
  job: Job;
  featured?: boolean;
}

export default function JobCard({ job, featured = false }: JobCardProps) {
  return (
    <Link to={`/jobs/${job.id}`} className="block">
      <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-200 animate-fade-in hover:scale-105 hover:border-primary/40 cursor-pointer flex flex-col h-[300px] justify-between relative">
        {featured && (
          <Badge className="absolute top-2 right-2 bg-primary text-white px-3 py-1">Featured</Badge>
        )}
        
        <div className={`flex items-center gap-3 ${featured ? 'mt-4' : ''}`}>
          <div className="h-12 w-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-xl">
            {job.logo ? (
              <img src={job.logo} alt={job.company} className="h-10 w-10 object-cover rounded-full" />
            ) : (
              <Building size={28} />
            )}
          </div>
          <div>
            <div className="font-bold text-lg text-gray-900">{job.title}</div>
            <div className="text-gray-500">{job.company}</div>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
          <span className="flex items-center gap-1"><MapPin size={15} /> {job.location}</span>
          <span className="flex items-center gap-1"><Clock size={15} /> {job.type}</span>
        </div>
        <div
          className="mt-3 inline-block bg-primary text-white px-4 py-2 rounded-md text-center font-semibold transition hover:bg-primary/90 w-full"
        >
          View Details
        </div>
      </div>
    </Link>
  );
}
