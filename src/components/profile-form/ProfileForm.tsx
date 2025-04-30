
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { formSchema, ProfileFormValues } from "@/schemas/profileFormSchema";
import { BasicInfoSection } from "./BasicInfoSection";
import { JobDetailsSection } from "./JobDetailsSection";
import { SalarySection } from "./SalarySection";
import { DescriptionSection } from "./DescriptionSection";
import { ContactSection } from "./ContactSection";

export function ProfileForm() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Define form
  const form = useForm<ProfileFormValues>({
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
  function onSubmit(values: ProfileFormValues) {
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <BasicInfoSection form={form} />
        <JobDetailsSection form={form} />
        <SalarySection form={form} />
        <DescriptionSection form={form} />
        <ContactSection form={form} />

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
  );
}
