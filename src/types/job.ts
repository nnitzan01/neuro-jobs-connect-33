
export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  logo?: string;
  applyUrl: string;
  featured: boolean;
  sector?: string;
  setting?: string;
  description?: string;
  requirements?: string;
  salary?: string;
  created_at: string;
};
