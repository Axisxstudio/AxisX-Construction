import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import PageLoader from "@/components/site/PageLoader";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import { AnimatePresence, motion } from "framer-motion";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const revealTimer = window.setTimeout(() => setLoading(false), 1500);
    const hideLoaderTimer = window.setTimeout(() => setShowLoader(false), 2300);
    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(hideLoaderTimer);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AnimatePresence>
          {showLoader && (
            <motion.div
              key="page-loader"
              className="fixed inset-0 z-[100]"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <PageLoader />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, filter: "blur(12px)" }}
          animate={!loading ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
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
        </motion.div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
