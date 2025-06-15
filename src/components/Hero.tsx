
import { Button } from '@/components/ui/button';

const Hero = () => {
  // New home video
  const videoSrc = "https://img1.wsimg.com/isteam/videos/n4Wqzxp";
  const fallbackImg = "/lovable-uploads/e6bae145-8de8-4b55-bdeb-86d42f20f90c.png";

  return (
    <section className="relative min-h-screen bg-navy text-white pt-24 flex items-center overflow-hidden">
      {/* BG Video or fallback */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0"
        src={videoSrc}
        poster={fallbackImg}
      />
      {/* Logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <svg
          width="60vw"
          height="60vw"
          viewBox="0 0 370 370"
          className="opacity-10 hidden md:block"
          style={{ maxWidth: 600, maxHeight: 600 }}
        >
          <image
            href="/lovable-uploads/ea466603-eb64-4dbb-be17-47a0e25c99e6.png"
            width="370"
            height="370"
            x="0"
            y="0"
          />
        </svg>
      </div>
      <div className="absolute inset-0 bg-navy/80 bg-gradient-to-br from-navy/95 via-navy/80 to-deep-blue/70 z-20 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-30">
        <div className="max-w-2xl mx-auto md:max-w-4xl lg:ml-0 lg:mr-auto">
          <h1 className="text-4xl lg:text-6xl font-poppins font-bold leading-tight mb-3 drop-shadow-header text-center lg:text-left">
            Making I.T. Easy
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8 mt-2 drop-shadow-header text-center lg:text-left">
            From food & beverage manufacturers to law and accounting firms—we simplify, automate, and modernize your IT so your team can focus on results.
          </p>
          <ul className="flex flex-col sm:flex-row gap-2 sm:gap-6 mb-8 justify-center lg:justify-start">
            {[
              "Guaranteed ROI in 6 weeks",
              "60-Day Satisfaction Warranty",
              "Nationwide Service",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                  <img
                    src="/lovable-uploads/ea466603-eb64-4dbb-be17-47a0e25c99e6.png"
                    alt="accent-icon"
                    className="w-3 h-3"
                  />
                </span>
                <span className="text-lg text-white">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <Button 
              size="lg" 
              className="bg-gradient-yellow text-navy hover:bg-accent hover:text-navy font-semibold text-lg px-8 py-6 w-full sm:w-auto shadow-lg shadow-black/20"
            >
              Book Free Assessment
            </Button>
            <p className="text-sm text-gray-300 pt-2 lg:pt-0">
              <span role="img" aria-label="lock">🔒</span> Guaranteed Confidentiality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
