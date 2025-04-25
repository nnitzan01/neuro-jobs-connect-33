
import JobCard from "./JobCard";

type Job = {
  title: string;
  company: string;
  location: string;
  type: string;
  logo?: string;
  applyUrl: string;
};

const JOBS: Job[] = [
  {
    title: "Neuroscientist Researcher",
    company: "CortexAI",
    location: "Remote",
    type: "Full-time",
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=facearea&w=80&h=80&q=80",
    applyUrl: "#",
  },
  {
    title: "Machine Learning Engineer",
    company: "NeuroBridge",
    location: "San Francisco, CA",
    type: "Hybrid",
    logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=facearea&w=80&h=80&q=80",
    applyUrl: "#",
  },
  {
    title: "Brain-Computer Interface Dev",
    company: "Synaptech",
    location: "Berlin, Germany",
    type: "Remote",
    logo: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=facearea&w=80&h=80&q=80",
    applyUrl: "#",
  },
  {
    title: "Clinical Trials Coordinator",
    company: "NeuroPulse Biotech",
    location: "Boston, MA",
    type: "On-site",
    applyUrl: "#",
  },
];

export default function JobList() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-4">
      {JOBS.map((job) => (
        <JobCard job={job} key={job.title + job.company} />
      ))}
    </section>
  );
}
