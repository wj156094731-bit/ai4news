import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Session2 from "./pages/Session2";
import Session3 from "./pages/Session3";
import AICommunication from "./pages/session1/AICommunication";
import APIConcepts from "./pages/session1/APIConcepts";
import NewsAPIExample from "./pages/session1/NewsAPIExample";
import Setup from "./pages/session1/Setup";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}>
            <Route index element={<Navigate to="/about" replace />} />
            <Route path="about" element={<About />} />
            <Route path="session-1">
              <Route index element={<Navigate to="/session-1/ai-communication" replace />} />
              <Route path="ai-communication" element={<AICommunication />} />
              <Route path="api-concepts" element={<APIConcepts />} />
              <Route path="news-api" element={<NewsAPIExample />} />
              <Route path="setup" element={<Setup />} />
            </Route>
            <Route path="session-2" element={<Session2 />} />
            <Route path="session-3" element={<Session3 />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
