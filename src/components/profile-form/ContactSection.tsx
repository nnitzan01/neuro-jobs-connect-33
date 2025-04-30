
import { 
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link, Mail } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { ProfileFormValues } from "@/schemas/profileFormSchema";

interface ContactSectionProps {
  form: UseFormReturn<ProfileFormValues>;
}

export function ContactSection({ form }: ContactSectionProps) {
  return (
    <>
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
    </>
  );
}
