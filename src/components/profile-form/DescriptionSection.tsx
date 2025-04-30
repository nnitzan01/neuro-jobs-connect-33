
import { 
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { FileText } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { ProfileFormValues } from "@/schemas/profileFormSchema";

interface DescriptionSectionProps {
  form: UseFormReturn<ProfileFormValues>;
}

export function DescriptionSection({ form }: DescriptionSectionProps) {
  return (
    <>
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
    </>
  );
}
