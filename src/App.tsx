
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chatbot from "./components/Chatbot";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AssessmentRisk from "./pages/AssessmentRisk";
import AssessmentAutomation from "./pages/AssessmentAutomation";
import AssessmentTools from "./pages/AssessmentTools";
import AutomationROI from "./pages/AutomationROI";
import AIReadinessAssessment from "./pages/AIReadinessAssessment";
import DowntimeCost from "./pages/DowntimeCost";
import VendorConsolidation from "./pages/VendorConsolidation";
import CloudMigration from "./pages/CloudMigration";
import StaffProductivity from "./pages/StaffProductivity";
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
import BlogPost from "./pages/BlogPost";
import CaseStudies from "./pages/CaseStudies";
import IntegrationsPage from "./pages/IntegrationsPage";
import IntegrationDetail from "./pages/IntegrationDetail";
import RequestIntegration from "./pages/RequestIntegration";
import LogoDiagnostic from "./pages/LogoDiagnostic";
import ManufacturingAnalytics from "./pages/ManufacturingAnalytics";
import EcommerceInsights from "./pages/EcommerceInsights";

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
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/integrations/:integrationSlug" element={<IntegrationDetail />} />
          <Route path="/integrations/request" element={<RequestIntegration />} />
          <Route path="/solutions/manufacturing-analytics" element={<ManufacturingAnalytics />} />
          <Route path="/solutions/ecommerce-insights" element={<EcommerceInsights />} />
          <Route path="/logo-diagnostic" element={<LogoDiagnostic />} />
          <Route path="/tools" element={<AssessmentTools />} />
          <Route path="/tools/automation-roi" element={<AutomationROI />} />
          <Route path="/tools/ai-readiness" element={<AIReadinessAssessment />} />
          <Route path="/tools/downtime-cost" element={<DowntimeCost />} />
          <Route path="/tools/vendor-consolidation" element={<VendorConsolidation />} />
          <Route path="/tools/cloud-migration" element={<CloudMigration />} />
          <Route path="/tools/staff-productivity" element={<StaffProductivity />} />
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
        <Chatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
