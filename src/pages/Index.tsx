
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import JobList from "../components/JobList";
import { Search } from "lucide-react";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex font-sans w-full bg-gradient-to-br from-[#f8fbff] via-[#e5deff] to-[#f2fce2]">
        <AppSidebar />
        <main className="flex-1 px-6 py-10 max-w-6xl mx-auto">
          <SidebarTrigger />
          <header className="mb-10 flex flex-col gap-4 items-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary text-center drop-shadow-sm animate-fade-in">NeuroStartups Job Board</h1>
            <p className="text-gray-600 text-lg md:text-xl text-center max-w-2xl animate-fade-in">Discover open positions at the world's most innovative neurotechnology startups — from BCI development to machine learning and neuroscience.</p>
            <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" alt="neurotech hero" className="rounded-lg shadow-lg mt-4 w-full max-w-xl h-56 object-cover animate-fade-in" />
            <div className="w-full flex justify-center mt-8">
              <form className="flex items-center gap-2 w-full max-w-xl bg-white rounded-full px-4 py-2 shadow-md border border-gray-200">
                <Search size={20} className="text-gray-400" />
                <input
                  type="search"
                  placeholder="Search jobs, companies, keywords..."
                  className="flex-1 outline-none bg-transparent text-gray-800 placeholder-gray-400 px-2 py-2"
                  disabled
                />
                <button
                  type="button"
                  className="text-primary bg-accent px-4 py-2 rounded-full font-semibold hover:bg-primary hover:text-white transition"
                  disabled
                >
                  Search
                </button>
              </form>
            </div>
          </header>
          <div>
            <JobList />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
