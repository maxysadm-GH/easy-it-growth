
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/toaster"
import { LanguageProvider } from './contexts/LanguageContext';
import Index from './pages/Index';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import WhyUs from './pages/WhyUs';
import Blog from './pages/Blog';
import StaffProductivity from './pages/StaffProductivity';
import DowntimeCost from './pages/DowntimeCost';
import ManufacturingAnalytics from './pages/ManufacturingAnalytics';
import DataAI from './pages/DataAI';
import DashboardSolutions from './pages/DashboardSolutions';
import AutomationROI from './pages/AutomationROI';
import AssessmentRisk from './pages/AssessmentRisk';
import AssessmentAutomation from './pages/AssessmentAutomation';
import IntelligentWorkflowAutomation from "./pages/IntelligentWorkflowAutomation";
import FoodBeverageClient from "./pages/FoodBeverageClient";
import CPALawClient from "./pages/CPALawClient";
import FinanceLeadersClient from "./pages/FinanceLeadersClient";
import AssessmentTools from "./pages/AssessmentTools";
import AIReadinessAssessment from "./pages/AIReadinessAssessment";
import ERPMRPClient from "./pages/ERPMRPClient";
import PLImpactReport from "./pages/PLImpactReport";
import PricingROI from "./pages/PricingROI";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/why-us" element={<WhyUs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/tools/staff-productivity" element={<StaffProductivity />} />
              <Route path="/tools/downtime-cost" element={<DowntimeCost />} />
              <Route path="/solutions/manufacturing-analytics" element={<ManufacturingAnalytics />} />
              <Route path="/manufacturing-analytics" element={<ManufacturingAnalytics />} />
              <Route path="/data-ai" element={<DataAI />} />
              <Route path="/dashboard-solutions" element={<DashboardSolutions />} />
              <Route path="/tools/automation-roi" element={<AutomationROI />} />
              <Route path="/tools/assessment-risk" element={<AssessmentRisk />} />
              <Route path="/tools/assessment-automation" element={<AssessmentAutomation />} />
              <Route path="/services/intelligent-workflow-automation" element={<IntelligentWorkflowAutomation />} />
              <Route path="/food-beverage-client" element={<FoodBeverageClient />} />
              <Route path="/cpa-law-client" element={<CPALawClient />} />
              <Route path="/finance-leaders-client" element={<FinanceLeadersClient />} />
              <Route path="/assessment-tools" element={<AssessmentTools />} />
              <Route path="/ai-readiness-assessment" element={<AIReadinessAssessment />} />
              <Route path="/erp-mrp-client" element={<ERPMRPClient />} />
              <Route path="/tools/pl-impact-report" element={<PLImpactReport />} />
              <Route path="/pricing" element={<PricingROI />} />
              <Route path="/schedule" element={<Services />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
