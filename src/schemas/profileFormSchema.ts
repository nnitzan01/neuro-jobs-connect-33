
import * as z from "zod";

export const formSchema = z.object({
  jobTitle: z.string().min(2, { message: "Job title is required" }),
  company: z.string().min(2, { message: "Company/Organization is required" }),
  location: z.string().min(2, { message: "Location is required" }),
  jobType: z.string({
    required_error: "Please select a job type",
  }),
  workSetting: z.string({
    required_error: "Please select a work setting",
  }),
  category: z.string({
    required_error: "Please select a category",
  }),
  salaryMin: z.string().min(1, { message: "Minimum salary is required" }),
  salaryMax: z.string().min(1, { message: "Maximum salary is required" }),
  description: z.string().min(10, { message: "Job description should be at least 10 characters" }),
  requirements: z.string().min(10, { message: "Requirements should be at least 10 characters" }),
  applicationLink: z.string().url({ message: "Please enter a valid URL" }),
  contactEmail: z.string().email({ message: "Please enter a valid email address" }),
});

export type ProfileFormValues = z.infer<typeof formSchema>;
