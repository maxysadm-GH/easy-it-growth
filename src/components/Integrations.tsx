
import { useEffect, useRef } from "react";

// Example integration logos (replace src's as desired)
const integrations = [
  {
    name: "Microsoft 365",
    src: "/lovable-uploads/integration-microsoft.png"
  },
  {
    name: "Slack",
    src: "/lovable-uploads/integration-slack.png"
  },
  {
    name: "Google Workspace",
    src: "/lovable-uploads/integration-google.png"
  },
  {
    name: "Dropbox",
    src: "/lovable-uploads/integration-dropbox.png"
  }
];

const Integrations = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // animate logos on mount
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
    <section className="py-16 bg-gray-50" id="integrations">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl lg:text-5xl font-poppins font-bold text-navy mb-6 text-center">
          Seamless Integration With Your Existing Tools
        </h2>
        <div ref={ref} className="flex flex-wrap justify-center gap-10 py-4 w-full">
          {integrations.map((logo) => (
            <div key={logo.name} className="flex flex-col items-center w-32 md:w-40">
              <img
                src={logo.src}
                alt={logo.name}
                className="w-full h-auto drop-shadow-lg rounded-lg transition-transform duration-300 hover:scale-105"
                style={{ minHeight: 60, maxHeight: 80 }}
              />
              <span className="mt-2 text-navy text-base font-medium text-center hidden md:block">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
