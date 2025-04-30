
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ProfileForm } from "@/components/profile-form/ProfileForm";

export default function SubmitProfile() {
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
          <ProfileForm />
        </CardContent>
      </Card>
    </div>
  );
}
