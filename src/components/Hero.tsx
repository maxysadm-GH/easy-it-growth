
import { Button } from '@/components/ui/button';

const Hero = () => {
  // Use a new, professional royalty-free video, or fallback to a clean branded image if video is not available on client connections.
  const videoSrc = "https://videos.pexels.com/video-files/8569103/8569103-hd_1920_1080_30fps.mp4";
  const fallbackImg = "/lovable-uploads/e6bae145-8de8-4b55-bdeb-86d42f20f90c.png";

  return (
    <section className="relative min-h-screen bg-navy text-white pt-16 flex items-center overflow-hidden">
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
      {/* Large translucent SVG watermark/logo background */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        {/* Inline SVG for watermark effect */}
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
      <div className="absolute inset-0 bg-navy/75 bg-gradient-to-br from-navy/90 via-navy/80 to-deep-blue/70 z-20 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-10 max-w-2xl">
            <div>
              <h1 className="text-4xl lg:text-6xl font-poppins font-bold leading-tight mb-6 drop-shadow-header">
                Making I.T. Easy
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8 drop-shadow-header">
                From food & beverage manufacturers to law and accounting firms — we simplify, automate, and modernize your IT so your team can focus on results.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Guaranteed ROI in 6 weeks",
                "60-Day Satisfaction Warranty",
                "Serving businesses nationwide",
              ].map((item, i) => (
                <div key={item} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <img
                      src="/lovable-uploads/ea466603-eb64-4dbb-be17-47a0e25c99e6.png"
                      alt="accent-icon"
                      className="w-4 h-4"
                    />
                  </div>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-gradient-yellow text-navy hover:opacity-90 font-semibold text-lg px-8 py-6 w-full sm:w-auto shadow-lg shadow-black/20"
              >
                Your business deserves better. Book a free consultation here.
              </Button>
              <p className="text-sm text-gray-300">
                <span role="img" aria-label="lock">🔒</span> Guaranteed Confidentiality. Always.
              </p>
            </div>
          </div>
          {/* Branded icon, right */}
          <div className="relative z-10 hidden lg:flex items-center justify-center h-full">
            <img
              src="/lovable-uploads/ea466603-eb64-4dbb-be17-47a0e25c99e6.png"
              alt="MBACIO Robot Head Icon"
              className="w-56 h-56 object-contain opacity-90"
              draggable={false}
              style={{ filter: "drop-shadow(0 8px 32px rgba(250,207,57,0.08))" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;

