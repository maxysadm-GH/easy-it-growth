
import { Button } from '@/components/ui/button';

const Hero = () => {
  const videoSrc = "https://img1.wsimg.com/isteam/videos/n4Wqzxp";
  const fallbackImg = "/lovable-uploads/e6bae145-8de8-4b55-bdeb-86d42f20f90c.png";

  return (
    <section className="relative min-h-screen bg-navy text-white pt-24 flex items-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0"
        src={videoSrc}
        poster={fallbackImg}
      />
      
      {/* Stylish watermark background */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <svg
          width="60vw"
          height="60vw"
          viewBox="0 0 370 370"
          className="opacity-5 hidden md:block animate-pulse"
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
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-deep-blue/75 z-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-30">
        <div className="max-w-3xl mx-auto lg:max-w-4xl lg:ml-0 lg:mr-auto text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-poppins font-bold leading-tight mb-4 drop-shadow-header">
            Making I.T. Easy
          </h1>
          
          <p className="text-2xl lg:text-3xl xl:text-4xl font-poppins font-semibold text-accent mb-8 drop-shadow-header">
            Smarter IT. Simpler Growth.
          </p>
          
          <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-10 drop-shadow-header max-w-4xl">
            From manufacturers to professional firms—we simplify, automate, and modernize your IT operations so your team can focus on growth.
          </p>
          
          <ul className="flex flex-col sm:flex-row gap-3 sm:gap-8 mb-12 justify-center lg:justify-start">
            {[
              "Guaranteed ROI in 6 weeks",
              "60-Day Satisfaction Warranty", 
              "Nationwide Service",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 group">
                <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <img
                    src="/lovable-uploads/ea466603-eb64-4dbb-be17-47a0e25c99e6.png"
                    alt="accent-icon"
                    className="w-4 h-4"
                  />
                </span>
                <span className="text-lg lg:text-xl text-white font-medium">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <Button 
              size="lg" 
              className="bg-gradient-yellow text-navy font-poppins font-bold text-xl px-10 py-6 w-full sm:w-auto shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:opacity-90"
            >
              Book Your Free Assessment
            </Button>
            <p className="text-sm lg:text-base text-gray-300 pt-3 lg:pt-4 flex items-center gap-2">
              <span className="text-accent">🔒</span> 
              Guaranteed Confidentiality
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
