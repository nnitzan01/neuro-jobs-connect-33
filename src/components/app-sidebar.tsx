
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Briefcase, Building, Users, FileText, Search } from "lucide-react";

const items = [
  { title: "Home", url: "/", icon: Briefcase },
  { title: "Jobs", url: "/", icon: FileText },
  { title: "Startups", url: "#", icon: Building },
  { title: "Post Job", url: "/post-job", icon: Users },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-3 font-semibold text-gray-800 hover:text-primary transition-colors duration-200">
                      <item.icon size={20} /> <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
