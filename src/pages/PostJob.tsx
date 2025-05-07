
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { JobService } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

// Define the form schema with Zod
const formSchema = z.object({
  title: z.string().min(5, {
    message: "Job title must be at least 5 characters.",
  }),
  company: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  location: z.string().min(2, {
    message: "Location must be at least 2 characters.",
  }),
  type: z.enum(["Full-time", "Part-time", "Contract", "Internship", "Remote"]),
  description: z.string().min(20, {
    message: "Job description must be at least 20 characters.",
  }),
  requirements: z.string().min(20, {
    message: "Job requirements must be at least 20 characters.",
  }),
  salary: z.string().optional(),
  applicationUrl: z.string().url({
    message: "Please enter a valid URL for applications.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const PostJob = () => {
  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      company: "",
      location: "",
      type: "Full-time",
      description: "",
      requirements: "",
      salary: "",
      applicationUrl: "",
    },
  });

  // Create job mutation
  const createJobMutation = useMutation({
    mutationFn: (values: FormValues) => {
      return JobService.createJob({
        title: values.title,
        company: values.company,
        location: values.location,
        type: values.type,
        description: values.description,
        applyUrl: values.applicationUrl,
        featured: false // Default to non-featured
      });
    },
    onSuccess: () => {
      toast.success("Job posted successfully!");
      form.reset();
    },
    onError: (error) => {
      toast.error("Failed to post job. Please try again.");
      console.error("Error submitting form:", error);
    }
  });

  // Form submission handler
  const onSubmit = async (values: FormValues) => {
    createJobMutation.mutate(values);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex font-sans w-full bg-gradient-to-br from-[#f8fbff] via-[#e5deff] to-[#f2fce2]">
        <AppSidebar />
        <main className="flex-1 px-6 py-10 max-w-4xl mx-auto">
          <SidebarTrigger />
          
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-primary">Post a New Job</h1>
            <p className="text-gray-600 mt-2">
              Reach talented neuroscience professionals by listing your job on NeuroStartups Job Board
            </p>
          </header>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Job Title*</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Neuroscience Data Analyst" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name*</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., NeuroTech Solutions" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location*</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., San Francisco, CA" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Job Type*</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select job type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Full-time">Full-time</SelectItem>
                            <SelectItem value="Part-time">Part-time</SelectItem>
                            <SelectItem value="Contract">Contract</SelectItem>
                            <SelectItem value="Internship">Internship</SelectItem>
                            <SelectItem value="Remote">Remote</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="salary"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Salary Range (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., $80,000 - $100,000" {...field} />
                      </FormControl>
                      <FormDescription>
                        Providing salary information can increase applications by up to 30%
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Description*</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe the job role, responsibilities, and team..." 
                          className="min-h-32"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="requirements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Requirements*</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="List qualifications, skills, and experience needed..." 
                          className="min-h-32"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="applicationUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Application URL*</FormLabel>
                      <FormControl>
                        <Input placeholder="https://yourcompany.com/careers/job-id" {...field} />
                      </FormControl>
                      <FormDescription>
                        Direct link where candidates can apply for this position
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full md:w-auto" 
                  disabled={createJobMutation.isPending}
                >
                  {createJobMutation.isPending ? "Posting..." : "Post Job"}
                </Button>
              </form>
            </Form>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default PostJob;
