
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

export const REGULAR_JOBS: Job[] = [
  {
    title: "Neurofeedback Specialist",
    company: "MindWave Health",
    location: "Chicago, IL",
    type: "Full-time",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=facearea&w=80&h=80&q=80",
    applyUrl: "#",
  },
  {
    title: "EEG Technician",
    company: "BrainScan Labs",
    location: "Austin, TX",
    type: "Part-time",
    logo: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=facearea&w=80&h=80&q=80",
    applyUrl: "#",
  },
  {
    title: "Computational Neuroscientist",
    company: "Neural Systems Inc",
    location: "Remote",
    type: "Contract",
    applyUrl: "#",
  },
  {
    title: "Neural Interface Designer",
    company: "MindMeld Technologies",
    location: "Seattle, WA",
    type: "Full-time",
    logo: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=facearea&w=80&h=80&q=80",
    applyUrl: "#",
  },
  {
    title: "Neuroimaging Analyst",
    company: "CognitiveScan",
    location: "Boston, MA",
    type: "Full-time",
    applyUrl: "#",
  },
  {
    title: "Brain Stimulation Researcher",
    company: "NeuroStim Therapeutics",
    location: "Denver, CO",
    type: "Hybrid",
    logo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=facearea&w=80&h=80&q=80",
    applyUrl: "#",
  },
];

interface JobListProps {
  featured?: boolean;
  jobsToShow?: Job[];
}

export default function JobList({ featured = true, jobsToShow = JOBS }: JobListProps) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-4">
      {jobsToShow.map((job) => (
        <JobCard job={job} key={job.title + job.company} featured={featured} />
      ))}
    </section>
  );
}
