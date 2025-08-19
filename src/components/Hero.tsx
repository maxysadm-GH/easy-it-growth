
import React from 'react';
import heroImage from '@/assets/hero-manufacturing-automation.jpg';
import heroImageMobile from '@/assets/hero-manufacturing-mobile.jpg';

const Hero = () => {
  const handlePrimaryClick = () => {
    // Track analytics event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        location: 'hero',
        action: 'assessment'
      });
    }
    window.open('https://calendly.com/mbacio/assessment', '_blank', 'noopener,noreferrer');
  };

  const handleSecondaryClick = () => {
    // Track analytics event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        location: 'hero',
        action: 'dashboard_examples'
      });
    }
    window.location.href = '/dashboard-solutions';
  };

  return (
    <section 
      id="hero" 
      className="relative isolate overflow-hidden"
      onMouseMove={(e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 6;
        const y = (e.clientY / window.innerHeight - 0.5) * 6;
        e.currentTarget.style.setProperty('--parallax-x', `${x}px`);
        e.currentTarget.style.setProperty('--parallax-y', `${y}px`);
      }}
    >
      {/* Background image with responsive sources */}
      <picture>
        <source 
          media="(max-width: 768px)" 
          srcSet={heroImageMobile}
          type="image/webp"
        />
        <img 
          src={heroImage}
          alt="Modern manufacturing facility with AI automation and bilingual support systems"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-75 ease-linear"
          style={{
            transform: 'translate(var(--parallax-x, 0), var(--parallax-y, 0))'
          }}
          loading="eager"
        />
      </picture>
      
      {/* Gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/60 to-navy/85"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:flex lg:h-[78vh] lg:items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl font-poppins">
            Smarter IT. Simpler Growth.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/80">
            Automation, AI, and secure 24/7 support that makes every penny work for you. 20 years optimizing manufacturing operations with bilingual expertise.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
            <button
              onClick={handlePrimaryClick}
              className="inline-flex items-center rounded-2xl bg-gradient-yellow px-6 py-3 font-semibold text-navy shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              aria-label="Book your free IT assessment with MBACIO"
            >
              Book Your Free Assessment
            </button>
            <button
              onClick={handleSecondaryClick}
              className="inline-flex items-center rounded-2xl border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-all duration-300"
              aria-label="See dashboard examples and automation solutions"
            >
              See Dashboard Examples
            </button>
          </div>
          
          {/* Trust microcopy */}
          <p className="mt-4 text-sm text-white/60">
            Serving Bannockburn & Chicagoland • 60-Day Satisfaction Warranty
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
