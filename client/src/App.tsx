import { Switch, Route, useLocation } from "wouter";
import { useLayoutEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import GigaOps from "@/pages/GigaOps";
import Jobs from "@/pages/Jobs";
import Teams from "@/pages/Teams";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Maintenance from "@/pages/gigaops/Maintenance";
import Workforce from "@/pages/gigaops/Workforce";
import Inventory from "@/pages/gigaops/Inventory";
import Procurement from "@/pages/gigaops/Procurement";
import Finance from "@/pages/gigaops/Finance";
import Automation from "@/pages/gigaops/Automation";
import Analytics from "@/pages/gigaops/Analytics";
import Communications from "@/pages/gigaops/Communications";
import Documents from "@/pages/gigaops/Documents";
import Geospatial from "@/pages/gigaops/Geospatial";
import Data from "@/pages/gigaops/Data";

function ScrollToTop() {
  const [location] = useLocation();
  
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/gigaops" component={GigaOps} />
      <Route path="/gigaops/maintenance" component={Maintenance} />
      <Route path="/gigaops/workforce" component={Workforce} />
      <Route path="/gigaops/inventory" component={Inventory} />
      <Route path="/gigaops/procurement" component={Procurement} />
      <Route path="/gigaops/finance" component={Finance} />
      <Route path="/gigaops/automation" component={Automation} />
      <Route path="/gigaops/analytics" component={Analytics} />
      <Route path="/gigaops/communications" component={Communications} />
      <Route path="/gigaops/documents" component={Documents} />
      <Route path="/gigaops/geospatial" component={Geospatial} />
      <Route path="/gigaops/data" component={Data} />
      <Route path="/jobs" component={Jobs} />
      <Route path="/teams" component={Teams} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
