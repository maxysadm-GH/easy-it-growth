
import { useEffect, useRef } from "react";

// Integration logos, all images should be uploaded to /lovable-uploads/ with recognizable filenames.
const integrations = [
  {
    name: "QuickBooks Online",
    src: "/lovable-uploads/integration-quickbooks.png",
  },
  {
    name: "HubSpot",
    src: "/lovable-uploads/integration-hubspot.png",
  },
  {
    name: "Salesforce",
    src: "/lovable-uploads/integration-salesforce.png",
  },
  {
    name: "Microsoft 365",
    src: "/lovable-uploads/integration-microsoft.png",
  },
  {
    name: "Dropbox",
    src: "/lovable-uploads/integration-dropbox.png",
  },
  {
    name: "Google Workspace",
    src: "/lovable-uploads/integration-google.png",
  }
];

const Integrations = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.querySelectorAll('img').forEach((img, i) => {
        img.classList.add('opacity-0');
        setTimeout(() => {
          img.classList.add('animate-fade-in');
          img.classList.remove('opacity-0');
        }, (i + 1) * 180);
      });
    }
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-navy via-deep-blue to-navy" id="integrations">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-white mb-6 text-center">
          Seamless Integration With Your Existing Tools
        </h2>
        <div ref={ref} className="flex flex-wrap justify-center gap-10 py-5 w-full">
          {integrations.map((logo) => (
            <div key={logo.name} className="flex flex-col items-center w-28 md:w-32">
              <img
                src={logo.src}
                alt={logo.name}
                className="w-full h-auto drop-shadow-lg rounded-md transition-transform duration-300 hover:scale-110"
                style={{ minHeight: 52, maxHeight: 64, background: "white", padding: "0.5rem" }}
              />
              <span className="mt-2 text-white text-base font-medium text-center hidden md:block">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
