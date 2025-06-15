
import { Button } from '@/components/ui/button';

const Hero = () => {
  // Royalty-free, business/IT video (Pexels CDN, no watermarks):
  const videoSrc = "https://videos.pexels.com/video-files/8569103/8569103-hd_1920_1080_30fps.mp4";

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-navy via-deep-blue to-navy text-white pt-16 flex items-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0"
        src={videoSrc}
      />
      <div className="absolute inset-0 bg-navy/60 bg-gradient-to-br from-navy/90 via-navy/80 to-deep-blue/70 z-10 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-poppins font-bold leading-tight mb-6 drop-shadow-header">
                Making I.T. Easy
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8 drop-shadow-header">
                From food & beverage manufacturers to law and accounting firms — we simplify, automate, and modernize your IT so your team can focus on results.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-navy font-bold text-sm">✓</span>
                </div>
                <span className="text-lg">Guaranteed ROI in 6 weeks</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-navy font-bold text-sm">✓</span>
                </div>
                <span className="text-lg">60-Day Satisfaction Warranty</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-navy font-bold text-sm">✓</span>
                </div>
                <span className="text-lg">Serving businesses nationwide</span>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-gradient-yellow text-navy hover:opacity-90 font-semibold text-lg px-8 py-6 w-full sm:w-auto shadow-lg shadow-black/20"
              >
                Your business deserves better. Book a free consultation here.
              </Button>
              <p className="text-sm text-gray-300">
                🔒 Guaranteed Confidentiality. Always.
              </p>
            </div>
          </div>
          {/* Still image overlay for branding (optional; or remove, if not desired): */}
          <div className="relative z-10 hidden lg:flex items-center justify-center h-full">
            <img
              src="/lovable-uploads/444b256c-f552-4b14-aecd-395d6963a3ae.png"
              alt="Robot Head Icon"
              className="w-40 h-40 object-contain opacity-90"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
