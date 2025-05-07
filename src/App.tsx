
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PostJob from "./pages/PostJob";
import NotFound from "./pages/NotFound";
import SubmitProfile from "./pages/SubmitProfile";
import SearchResults from "./pages/SearchResults";
import { AppSidebar } from "./components/app-sidebar";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppSidebar />
        <div className="pt-16"> {/* Add padding to push content down */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/post-job" element={<PostJob />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/featured" element={<Index />} />
            <Route path="/submit-profile" element={<SubmitProfile />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
