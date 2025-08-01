
import { Briefcase, Building, MapPin, Clock, Settings } from "lucide-react";

export const jobFunctionOptions = [
  { value: "all", label: "All Functions" },
  { value: "software-engineer", label: "Software Engineer" },
  { value: "data-scientist", label: "Data Scientist" },
  { value: "researcher", label: "Researcher" },
  { value: "clinical-trials-specialist", label: "Clinical Trials Specialist" },
  { value: "pharma", label: "Pharma" },
  { value: "neuroscientist", label: "Neuroscientist" },
  { value: "hardware-engineer", label: "Hardware Engineer" },
  { value: "product-manager", label: "Product Manager" },
  { value: "ux-researcher", label: "UX Researcher" },
  { value: "others", label: "Others" }
];

export const sectorOptions = [
  { value: "all", label: "All Sectors" },
  { value: "implantable-devices", label: "Implantable Devices" },
  { value: "pharmaceuticals-neuromodulation", label: "Pharmaceuticals & Neuromodulation" },
  { value: "neurosensing-diagnostics", label: "Neurosensing & Diagnostics" },
  { value: "neurorehabilitation", label: "Neurorehabilitation" },
  { value: "cognitive-enhancement", label: "Cognitive Enhancement & Consumer Neurotech" },
  { value: "ai-neuroinformatics", label: "AI & Neuroinformatics" },
  { value: "others", label: "Others" }
];

export const jobTypeOptions = [
  { value: "all", label: "All Types" },
  { value: "full-time", label: "Full-time" },
  { value: "part-time", label: "Part-time" },
  { value: "contract", label: "Contract" },
  { value: "internship", label: "Internship" }
];

export const settingOptions = [
  { value: "all", label: "All Settings" },
  { value: "on-site", label: "On-site" },
  { value: "remote", label: "Remote" },
  { value: "hybrid", label: "Hybrid" }
];

export const locationOptions = [
  { value: "all", label: "All Locations" },
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
  { value: "DC", label: "Washington DC" },
  { value: "remote", label: "Remote (USA)" }
];

export const filterIcons = {
  jobFunction: Briefcase,
  sector: Building,
  location: MapPin,
  jobType: Clock,
  setting: Settings
};
