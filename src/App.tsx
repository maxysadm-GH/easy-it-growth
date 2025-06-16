
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AssessmentRisk from "./pages/AssessmentRisk";
import AssessmentAutomation from "./pages/AssessmentAutomation";
import ERPMRPClient from "./pages/ERPMRPClient";
import FinanceLeadersClient from "./pages/FinanceLeadersClient";
import FoodBeverageClient from "./pages/FoodBeverageClient";
import CPALawClient from "./pages/CPALawClient";
import ServicePlansPage from "./pages/ServicePlansPage";
import DashboardSolutions from "./pages/DashboardSolutions";
import WhyUs from "./pages/WhyUs";
import Services from "./pages/Services";
import DataAI from "./pages/DataAI";
import Blog from "./pages/Blog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/data-ai" element={<DataAI />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/assessment-risk" element={<AssessmentRisk />} />
          <Route path="/assessment-automation" element={<AssessmentAutomation />} />
          <Route path="/ideal-client/erp-mrp" element={<ERPMRPClient />} />
          <Route path="/ideal-client/finance-leaders" element={<FinanceLeadersClient />} />
          <Route path="/ideal-client/food-beverage" element={<FoodBeverageClient />} />
          <Route path="/ideal-client/cpa-law" element={<CPALawClient />} />
          <Route path="/service-plans" element={<ServicePlansPage />} />
          <Route path="/dashboard-solutions" element={<DashboardSolutions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
