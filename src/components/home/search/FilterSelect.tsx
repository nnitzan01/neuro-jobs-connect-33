
import React from "react";
import { LucideIcon } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FilterOption {
  value: string;
  label: string;
}

interface FilterSelectProps {
  icon: LucideIcon;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: FilterOption[];
}

export const FilterSelect = ({ 
  icon: Icon, 
  value, 
  onChange, 
  placeholder, 
  options 
}: FilterSelectProps) => {
  return (
    <div>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <div className="flex items-center gap-2">
            <Icon size={18} className="text-gray-500" />
            <SelectValue placeholder={placeholder} />
          </div>
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
