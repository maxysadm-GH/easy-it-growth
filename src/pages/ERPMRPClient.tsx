
import { Gear } from "lucide-react";

const ERPMRPClient = () => (
  <article className="max-w-3xl mx-auto py-16 px-4">
    <header className="mb-8">
      <div className="flex items-center gap-4 mb-2">
        <div className="w-12 h-12 bg-gradient-yellow rounded-xl flex items-center justify-center">
          <Gear className="w-6 h-6 text-navy" />
        </div>
        <h1 className="text-3xl font-poppins font-bold text-navy">ERP & MRP-Powered Manufacturers</h1>
      </div>
      <p className="text-lg text-muted-foreground">
        Modern manufacturing businesses leveraging systems like Fishbowl, Acumatica, or Infor.
      </p>
    </header>
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-2 text-deep-blue">Business Case</h2>
      <p>
        An LA-based manufacturer struggled with slow, siloed data across Fishbowl and QBO, leading to costly errors and compliance hurdles.<br /><br />
        <strong>MBACIO's Solution:</strong> Architected a secure, cloud-based integration that automated order syncing, provided unified dashboards, and enforced IT best practices. 
        <br />Downtime dropped by 60%, reporting accuracy soared—and audits are now a breeze.
      </p>
    </section>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Geo/Industry Focus</h2>
      <ul className="list-disc pl-5">
        <li>California (Los Angeles, Orange County, Bay Area)</li>
        <li>Contract Manufacturers, Food Production, Electronics</li>
      </ul>
    </section>
    <section>
      <h2 className="text-xl font-semibold mb-2">Keywords & SEO</h2>
      <p>
        <em>
          ERP integration, MRP automation, Fishbowl consulting, California manufacturers IT, cloud dashboards, LA IT provider for manufacturers
        </em>
      </p>
    </section>
  </article>
);

export default ERPMRPClient;

