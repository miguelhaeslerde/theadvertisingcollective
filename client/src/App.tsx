import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import MaintenanceOverlay from "@/components/MaintenanceOverlay";
import LegalModal from "@/components/LegalModal";
import Home from "@/pages/Home";
import AgencyMaxxing from "@/pages/AgencyMaxxing";
import GrowthStrategy from "@/pages/GrowthStrategy";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/agency-maxxing" component={AgencyMaxxing} />
      <Route path="/growth-strategy" component={GrowthStrategy} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <TooltipProvider>
            <Toaster />
            <MaintenanceOverlay />
            <LegalModal />
            <Router />
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
