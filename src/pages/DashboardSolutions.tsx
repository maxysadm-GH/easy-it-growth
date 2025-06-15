
import { Button } from "@/components/ui/button";

const DashboardSolutions = () => (
  <section className="min-h-screen py-20 bg-gradient-to-br from-navy to-charcoal flex items-center">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center">
        <img
          src="/lovable-uploads/9047d06d-8e00-44f9-a949-19b842c87735.png"
          alt="MBACIO Dashboard Logo"
          className="w-24 h-24 mx-auto mb-8"
        />
        <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4 text-accent">
          MBACIO Dashboard Solutions
        </h1>
        <p className="text-xl text-white/80 mb-8 font-inter">
          Don’t just analyze your performance. <span className="text-accent font-bold">Improve it.</span>
        </p>
        <div className="bg-white/10 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-2 text-gradient-yellow-end">Use your data to make better, faster decisions.</h2>
          <p className="text-md text-white/90 mb-4">Visualize business health, automate insights, and empower your team with smarter reporting.
          <br/>All white-labeled to your brand.</p>
        </div>
        <ul className="text-left max-w-xl mx-auto mb-8 space-y-4">
          <li className="flex items-center gap-3">
            <span className="w-3 h-3 bg-accent rounded-full" />
            Real-time dashboards & KPIs
          </li>
          <li className="flex items-center gap-3">
            <span className="w-3 h-3 bg-accent rounded-full" />
            Automated, branded reporting for your stakeholders
          </li>
          <li className="flex items-center gap-3">
            <span className="w-3 h-3 bg-accent rounded-full" />
            Actionable alerts & recommendations — not just raw data
          </li>
        </ul>
        <Button size="lg" className="bg-gradient-yellow text-navy hover:opacity-90 font-semibold text-lg px-8 py-5">
          Book Free Assessment
        </Button>
      </div>
    </div>
  </section>
);

export default DashboardSolutions;
