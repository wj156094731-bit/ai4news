import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Outlet, useLocation, Navigate } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-14 border-b border-border/50 flex items-center px-4 bg-card/30 backdrop-blur-sm sticky top-0 z-10">
            <SidebarTrigger />
            <h1 className="ml-4 font-semibold text-lg">GitHub Copilot News Analysis Workshop</h1>
          </header>
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
