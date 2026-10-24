import { Switch, Route, useLocation } from "wouter";
import { useLayoutEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CompanyPage, EnterpriseHome, IndustriesIndexPage, MobilePage, PlatformPage, ProductIndexPage, SolutionPage } from "@/pages/EnterpriseSite";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";

function ScrollToTop() {
  const [location] = useLocation();
  
  useLayoutEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      window.requestAnimationFrame(() => {
        document.getElementById(decodeURIComponent(hash))?.scrollIntoView({ behavior: "instant" as ScrollBehavior });
      });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={EnterpriseHome} />
      <Route path="/preview" component={EnterpriseHome} />
      <Route path="/gigaops" component={PlatformPage} />
      <Route path="/platform/mobile" component={MobilePage} />
      <Route path="/products" component={ProductIndexPage} />
      <Route path="/industries" component={IndustriesIndexPage} />
      <Route path="/gigaops/:slug">{({ slug }) => <SolutionPage path={`/gigaops/${slug}`} />}</Route>
      <Route path="/products/:slug">{({ slug }) => <SolutionPage path={`/products/${slug}`} />}</Route>
      <Route path="/industries/:slug">{({ slug }) => <SolutionPage path={`/industries/${slug}`} />}</Route>
      <Route path="/jobs">{() => <CompanyPage page="jobs" />}</Route>
      <Route path="/teams">{() => <CompanyPage page="teams" />}</Route>
      <Route path="/about">{() => <CompanyPage page="about" />}</Route>
      <Route path="/contact">{() => <CompanyPage page="contact" />}</Route>
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route>{() => <SolutionPage path="/404" />}</Route>
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
