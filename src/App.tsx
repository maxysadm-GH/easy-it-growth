
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/toaster"
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

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
            <Route path="/data-ai" element={<DataAI />} />
            <Route path="/dashboard-solutions" element={<DashboardSolutions />} />
            <Route path="/tools/automation-roi" element={<AutomationROI />} />
            <Route path="/tools/assessment-risk" element={<AssessmentRisk />} />
            <Route path="/tools/assessment-automation" element={<AssessmentAutomation />} />
            <Route path="/services/intelligent-workflow-automation" element={<IntelligentWorkflowAutomation />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
