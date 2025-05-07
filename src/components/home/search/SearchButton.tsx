
import React from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SearchButtonProps {
  onClick: () => void;
}

export const SearchButton = ({ onClick }: SearchButtonProps) => {
  return (
    <Button className="w-full" onClick={onClick}>
      <Search size={18} className="mr-2" />
      Search Jobs
    </Button>
  );
};
