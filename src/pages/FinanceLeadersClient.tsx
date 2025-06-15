
import { Users } from "lucide-react";

const FinanceLeadersClient = () => (
  <article className="max-w-3xl mx-auto py-16 px-4">
    <header className="mb-8">
      <div className="flex items-center gap-4 mb-2">
        <div className="w-12 h-12 bg-gradient-yellow rounded-xl flex items-center justify-center">
          <Users className="w-6 h-6 text-navy" />
        </div>
        <h1 className="text-3xl font-poppins font-bold text-navy">Finance Leaders & CFOs</h1>
      </div>
      <p className="text-lg text-muted-foreground">
        CFOs and finance executives in dynamic organizations demanding visibility and insight.
      </p>
    </header>
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-2 text-deep-blue">Business Case</h2>
      <p>
        A Bay Area CFO saw IT costs balloon while reporting lagged behind business realities.
        <br /><br />
        <strong>MBACIO transformed:</strong> Automated expense tracking, streamlined financial dashboarding, and implemented cost-saving cloud migration. IT spend dropped 30%, and real-time analytics became standard.
      </p>
    </section>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Geo/Industry Focus</h2>
      <ul className="list-disc pl-5">
        <li>Northern & Southern California</li>
        <li>Private Equity portfolio companies, Professional Services, SaaS</li>
      </ul>
    </section>
    <section>
      <h2 className="text-xl font-semibold mb-2">Keywords & SEO</h2>
      <p>
        <em>
          CFO IT partner, California finance dashboard, IT cost reduction, managed finance IT bay area, accounting data automation
        </em>
      </p>
    </section>
  </article>
);

export default FinanceLeadersClient;
