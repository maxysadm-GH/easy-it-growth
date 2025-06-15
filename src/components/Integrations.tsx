
import React from "react";
const Integrations = () => {
  return (
    <section className="py-20 bg-pale-yellow/40 text-navy" id="integrations">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-5xl font-poppins font-bold mb-6">
          Integrations for Growth & Automation
        </h2>
        <p className="text-xl text-navy/80 mb-6 max-w-2xl mx-auto">
          Explore seamless connections with 100+ business apps via <b>Databox</b>, ensuring you always have actionable insights from your most important platforms: accounting, CRM, ERP, marketing, team chat, and more.
        </p>
        <a
          href="/integrations"
          className="inline-block bg-gradient-yellow text-navy px-6 py-2 rounded-lg font-bold font-poppins text-lg shadow hover:opacity-90 transition mt-4"
        >
          View All Integrations
        </a>
        {/* Brand icons, grid, etc could go here */}
      </div>
    </section>
  );
};
export default Integrations;
