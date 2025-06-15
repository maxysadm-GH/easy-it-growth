
import { FileText } from "lucide-react";

const CPALawClient = () => (
  <article className="max-w-3xl mx-auto py-16 px-4">
    <header className="mb-8">
      <div className="flex items-center gap-4 mb-2">
        <div className="w-12 h-12 bg-gradient-yellow rounded-xl flex items-center justify-center">
          <FileText className="w-6 h-6 text-navy" />
        </div>
        <h1 className="text-3xl font-poppins font-bold text-navy">CPA Firms & Law Offices</h1>
      </div>
      <p className="text-lg text-muted-foreground">
        Forward-looking accounting and law offices serving California and beyond.
      </p>
    </header>
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-2 text-deep-blue">Business Case</h2>
      <p>
        A mid-sized CPA firm in Southern California was juggling too many IT vendors and facing inconsistent remote work support.
        <br /><br />
        <strong>MBACIO's impact:</strong> Consolidated IT vendors, automated data workflows and delivered a secure, compliant remote desktop solution. Result: faster client turnaround and new business won.
      </p>
    </section>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Geo/Industry Focus</h2>
      <ul className="list-disc pl-5">
        <li>Orange County, San Diego, Inland Empire</li>
        <li>CPA & Law Offices, Legal Tech, Financial Services</li>
      </ul>
    </section>
    <section>
      <h2 className="text-xl font-semibold mb-2">Keywords & SEO</h2>
      <p>
        <em>
          IT for CPA firms California, remote law office IT, accounting IT compliance soc2, vendor consolidation legal, OC managed IT services
        </em>
      </p>
    </section>
  </article>
);

export default CPALawClient;
