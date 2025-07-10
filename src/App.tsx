import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import WhyUs from './pages/WhyUs';
import Blog from './pages/Blog';
import Tools from './pages/Tools';
import AIReadiness from './pages/AIReadiness';
import StaffProductivity from './pages/StaffProductivity';
import DowntimeCost from './pages/DowntimeCost';
import { QueryClient } from '@tanstack/react-query';
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/toaster"
import FoodBeverage from './pages/FoodBeverage';
import CPALaw from './pages/CPALaw';
import FinanceLeaders from './pages/FinanceLeaders';
import ManufacturingAnalytics from './pages/ManufacturingAnalytics';
import DataAI from './pages/DataAI';
import DashboardSolutions from './pages/DashboardSolutions';
import AutomationROI from './pages/AutomationROI';
import AssessmentRisk from './pages/AssessmentRisk';
import AssessmentAutomation from './pages/AssessmentAutomation';
import IntelligentWorkflowAutomation from "./pages/IntelligentWorkflowAutomation";

function App() {
  return (
    <QueryClient>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/tools/ai-readiness" element={<AIReadiness />} />
            <Route path="/tools/staff-productivity" element={<StaffProductivity />} />
            <Route path="/tools/downtime-cost" element={<DowntimeCost />} />
            <Route path="/ideal-client/food-beverage" element={<FoodBeverage />} />
            <Route path="/ideal-client/cpa-law" element={<CPALaw />} />
            <Route path="/ideal-client/finance-leaders" element={<FinanceLeaders />} />
            <Route path="/solutions/manufacturing-analytics" element={<ManufacturingAnalytics />} />
            <Route path="/data-ai" element={<DataAI />} />
            <Route path="/dashboard-solutions" element={<DashboardSolutions />} />
            <Route path="/tools/automation-roi" element={<AutomationROI />} />
            <Route path="/tools/assessment-risk" element={<AssessmentRisk />} />
            <Route path="/tools/assessment-automation" element={<AssessmentAutomation />} />
            <Route path="/services/intelligent-workflow-automation" element={<IntelligentWorkflowAutomation />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClient>
  );
}

export default App;
