import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/toaster"
import { LanguageProvider } from './contexts/LanguageContext';
import Index from './pages/Index';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import WhyUs from './pages/WhyUs';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import StaffProductivity from './pages/StaffProductivity';
import DowntimeCost from './pages/DowntimeCost';
import ManufacturingAnalytics from './pages/ManufacturingAnalytics';
import DataAI from './pages/DataAI';
import DashboardSolutions from './pages/DashboardSolutions';
import Warranty from './pages/Warranty';
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
import Industries from './pages/Industries';
import About from './pages/About';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Security from './pages/Security';
import ChicagoManufacturingIT from './pages/ChicagoManufacturingIT';
import BannockburnLegalTechnology from './pages/BannockburnLegalTechnology';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<Services />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/why-us" element={<WhyUs />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/tools/staff-productivity" element={<StaffProductivity />} />
                <Route path="/tools/downtime-cost" element={<DowntimeCost />} />
                <Route path="/manufacturing-analytics" element={<ManufacturingAnalytics />} />
                <Route path="/solutions/manufacturing-analytics" element={<ManufacturingAnalytics />} />
                <Route path="/data-ai" element={<DataAI />} />
            <Route path="/dashboard-solutions" element={<DashboardSolutions />} />
            <Route path="/warranty" element={<Warranty />} />
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
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/security" element={<Security />} />
                <Route path="/manufacturing-it-chicago" element={<ChicagoManufacturingIT />} />
                <Route path="/legal-technology-bannockburn" element={<BannockburnLegalTechnology />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </LanguageProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
