
import { briefcase, mapPin, building, clock } from "lucide-react";

type Job = {
  title: string;
  company: string;
  location: string;
  type: string;
  logo?: string;
  applyUrl: string;
};

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-200 animate-fade-in hover:scale-105 hover:border-primary/40 cursor-pointer flex flex-col gap-3 ">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-xl">
          {job.logo ? (
            <img src={job.logo} alt={job.company} className="h-10 w-10 object-cover rounded-full" />
          ) : (
            <building size={28} />
          )}
        </div>
        <div>
          <div className="font-bold text-lg text-gray-900">{job.title}</div>
          <div className="text-gray-500">{job.company}</div>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
        <span className="flex items-center gap-1"><mapPin size={15} /> {job.location}</span>
        <span className="flex items-center gap-1"><clock size={15} /> {job.type}</span>
      </div>
      <a
        href={job.applyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block bg-primary text-white px-4 py-2 rounded-md text-center font-semibold transition hover:bg-primary/90"
      >
        Apply
      </a>
    </div>
  );
}
