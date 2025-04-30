import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { 
  Briefcase, 
  MapPin, 
  Settings, 
  Chip,  // Replacing Category with Chip
  DollarSign, 
  FileText, 
  Link, 
  Mail,
  Send
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
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

const jobTypes = [
  "Full-time",
  "Part-time",
  "Contract",
  "Temporary",
  "Internship"
];

const workSettings = [
  "On-site",
  "Hybrid",
  "Remote"
];

const categories = [
  "Implantable Devices",
  "Pharmaceuticals & Neuromodulation",
  "Neurosensing & Diagnostics",
  "Neurorehabilitation",
  "Cognitive Enhancement & Consumer Neurotech",
  "AI & Neuroinformatics"
];

export default function SubmitProfile() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobTitle: "",
      company: "",
      location: "",
      jobType: "",
      workSetting: "",
      category: "",
      salaryMin: "",
      salaryMax: "",
      description: "",
      requirements: "",
      applicationLink: "",
      contactEmail: "",
    },
  });

  // Submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      console.log(values);
      toast.success("Profile submitted successfully!");
      navigate("/");
    }, 1500);
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Submit Your Profile</CardTitle>
          <CardDescription>
            Complete the form below to submit your professional profile
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Job Title */}
              <FormField
                control={form.control}
                name="jobTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4" /> Job Title
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Software Engineer, Data Scientist, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Company */}
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4" /> Company/Organization
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Company or organization name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Location */}
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" /> Location
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="City, State" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Job Type */}
                <FormField
                  control={form.control}
                  name="jobType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4" /> Job Type
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select job type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {jobTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Work Setting */}
                <FormField
                  control={form.control}
                  name="workSetting"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Settings className="h-4 w-4" /> Work Setting
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select setting" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {workSettings.map((setting) => (
                            <SelectItem key={setting} value={setting}>{setting}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Category */}
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Chip className="h-4 w-4" /> Sector
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select sector" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>{category}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Salary Range */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="salaryMin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4" /> Minimum Salary
                      </FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="e.g., 50000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="salaryMax"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Maximum Salary</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="e.g., 80000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Job Description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <FileText className="h-4 w-4" /> Job Description
                    </FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe the job role and responsibilities"
                        className="min-h-[120px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Requirements */}
              <FormField
                control={form.control}
                name="requirements"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <FileText className="h-4 w-4" /> Requirements
                    </FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="List the required skills, qualifications, and experience"
                        className="min-h-[120px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Application Link */}
              <FormField
                control={form.control}
                name="applicationLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Link className="h-4 w-4" /> Application Link
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com/apply" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Contact Email */}
              <FormField
                control={form.control}
                name="contactEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Mail className="h-4 w-4" /> Contact Email
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="contact@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full md:w-auto" 
                disabled={isSubmitting}
              >
                <Send className="mr-2 h-4 w-4" /> 
                {isSubmitting ? "Submitting..." : "Submit Profile"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
