
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { List, Star, Plus, User } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  { title: "All Jobs", url: "/", icon: List },
  { title: "Featured Jobs", url: "/#featured-jobs", icon: Star },
  { title: "Post Job", url: "/post-job", icon: Plus },
  { title: "Submit Profile", url: "/submit-profile", icon: User },
];

export function AppSidebar() {
  return (
    <div className="w-full bg-white shadow-sm py-3 px-6 fixed top-0 z-50">
      <NavigationMenu className="max-w-4xl mx-auto">
        <NavigationMenuList>
          {items.map((item) => (
            <NavigationMenuItem key={item.title}>
              <Link to={item.url}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <div className="flex items-center gap-2">
                    <item.icon size={18} />
                    <span>{item.title}</span>
                  </div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
