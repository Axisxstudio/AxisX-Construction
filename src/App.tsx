import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import PageLoader from "@/components/site/PageLoader";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const revealTimer = window.setTimeout(() => setLoading(false), 1500);
    const hideLoaderTimer = window.setTimeout(() => setShowLoader(false), 2100);
    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(hideLoaderTimer);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {showLoader ? (
          <div
            className={`fixed inset-0 z-[100] transition-all duration-700 ease-out ${
              loading ? "opacity-100 scale-100" : "opacity-0 scale-[1.03] pointer-events-none"
            }`}
          >
            <PageLoader />
          </div>
        ) : null}
        <div
          className={`transition-all duration-1000 ease-out ${
            loading ? "opacity-0 scale-[0.98] blur-md" : "opacity-100"
          }`}
        >
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
