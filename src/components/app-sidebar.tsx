
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { List, Star, Plus, User, Info } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const items = [
  { title: "All Jobs", url: "/#search-jobs", icon: List },
  { title: "Featured Jobs", url: "/#featured-jobs", icon: Star },
  { title: "Post Job", url: "/post-job", icon: Plus },
  { title: "Submit Profile", url: "/submit-profile", icon: User },
  { title: "Our Mission", url: "/#our-mission", icon: Info },
];

export function AppSidebar() {
  const location = useLocation();

  // Handle smooth scrolling for hash links
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            behavior: "smooth",
            top: element.offsetTop - 80, // Offset for fixed header
          });
        }, 100);
      }
    }
  }, [location]);

  const handleNavigation = (url: string) => {
    // If it's a hash link on the current page
    if (url.startsWith('/#') && location.pathname === '/') {
      const targetId = url.split('#')[1];
      const element = document.getElementById(targetId);
      if (element) {
        window.scrollTo({
          behavior: "smooth",
          top: element.offsetTop - 80, // Offset for fixed header
        });
      }
    }
  };

  return (
    <div className="w-full bg-white shadow-sm py-3 px-6 fixed top-0 z-50">
      <NavigationMenu className="max-w-4xl mx-auto">
        <NavigationMenuList>
          {items.map((item) => (
            <NavigationMenuItem key={item.title}>
              <Link 
                to={item.url}
                onClick={() => handleNavigation(item.url)}
              >
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
