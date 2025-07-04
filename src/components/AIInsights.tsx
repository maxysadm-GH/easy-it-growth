
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import BookingPopup from './BookingPopup';

const capabilities = [
  {
    title: "Predictive Analytics",
    description: "Forecasts system health, financial outcomes, and operational risks with real business alerts.",
  },
  {
    title: "Custom Dashboards",
    description: "Centralize key metrics for instant, actionable insights—automate reporting and visualize performance trends.",
  },
  {
    title: "Automated Reporting",
    description: "Brand-ready reports and dashboards for stakeholders save time and drive smarter decisions.",
  },
  {
    title: "Workflow Automation",
    description: "Streamline finance, sales, and operations—automate reminders, escalate alerts, and track performance.",
  }
];

const AIInsights = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleDashboardSolutions = () => {
    window.location.href = '/dashboard-solutions';
  };

  const handleBookAssessment = () => {
    setIsBookingOpen(true);
  };

  return (
    <>
      <section className="py-16 lg:py-24 bg-gradient-to-br from-navy via-charcoal to-deep-blue text-white" id="insights">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-poppins font-bold mb-6">
              AI-Powered Insights & Dashboards
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See your operations and IT health clearly. MBACIO dashboards deliver proactive insights and automated reporting, so you can make better decisions, faster.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Capabilities */}
            <div className="space-y-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-poppins font-semibold mb-2 text-accent">
                      {capability.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Dashboard Mockup */}
            <div className="relative">
              <div className="bg-white/10 rounded-lg p-8">
                <h4 className="font-semibold text-accent mb-4">
                  MBACIO Business Health Dashboard
                </h4>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-accent">97%</div>
                    <div className="text-sm text-gray-300">KPI Score</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-accent">44h</div>
                    <div className="text-sm text-gray-300">MTTR Reduction</div>
                  </div>
                </div>
                <div className="space-y-2 mb-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Alerts Resolved</span>
                    <span className="text-accent">98%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full w-[95%]"></div>
                  </div>
                </div>
                <div className="text-sm text-gray-300">
                  🔄 Automated insights • 🛡️ Security checks enabled
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleDashboardSolutions}
                className="bg-gradient-yellow text-navy hover:opacity-90 font-semibold text-lg px-8 py-6 rounded-lg shadow transition-all duration-300 hover:scale-105"
              >
                MBACIO Dashboard Solutions
              </button>
              <button
                onClick={handleBookAssessment}
                className="bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-navy font-semibold text-lg px-8 py-6 rounded-lg shadow transition-all duration-300 hover:scale-105"
              >
                Book Your Free Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Popup */}
      <BookingPopup 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  );
};

export default AIInsights;
