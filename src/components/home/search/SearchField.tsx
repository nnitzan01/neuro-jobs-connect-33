
import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchFieldProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export const SearchField = ({ searchQuery, setSearchQuery }: SearchFieldProps) => {
  return (
    <div className="flex items-center gap-2 w-full rounded-md">
      <Search size={20} className="text-gray-400" />
      <Input
        type="search"
        placeholder="Search for job titles, skills, or companies..."
        className="flex-1"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};
