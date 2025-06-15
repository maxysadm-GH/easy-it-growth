
import { Utensils } from "lucide-react";

const FoodBeverageClient = () => (
  <article className="max-w-3xl mx-auto py-16 px-4">
    <header className="mb-8">
      <div className="flex items-center gap-4 mb-2">
        <div className="w-12 h-12 bg-gradient-yellow rounded-xl flex items-center justify-center">
          <Utensils className="w-6 h-6 text-navy" />
        </div>
        <h1 className="text-3xl font-poppins font-bold text-navy">Food & Beverage Operations</h1>
      </div>
      <p className="text-lg text-muted-foreground">
        Multi-site food, beverage, and restaurant operations with compliance needs.
      </p>
    </header>
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-2 text-deep-blue">Business Case</h2>
      <p>
        A multi-location restaurant franchise in LA needed airtight IT for PCI and health compliance, plus easier multi-store management.<br /><br />
        <strong>MBACIO delivered:</strong> Secure cloud file storage, automated compliance reporting, and 24/7 monitoring—ensuring zero fines and smoother audits.
      </p>
    </section>
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">Geo/Industry Focus</h2>
      <ul className="list-disc pl-5">
        <li>LA, San Diego, Central Valley</li>
        <li>QSR, Casual Dining, CPG Beverage Brands</li>
      </ul>
    </section>
    <section>
      <h2 className="text-xl font-semibold mb-2">Keywords & SEO</h2>
      <p>
        <em>
          F&B compliance IT, California restaurant technology, franchise IT support LA, cloud POS integration, foodservice cyber security
        </em>
      </p>
    </section>
  </article>
);

export default FoodBeverageClient;
