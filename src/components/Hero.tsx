export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ backgroundColor: '#012169' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes with animations */}
        <div 
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-5 animate-float"
          style={{ 
            background: 'radial-gradient(circle, rgba(253, 181, 21, 0.3) 0%, transparent 70%)',
            animationDuration: '20s'
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full opacity-5 animate-float"
          style={{ 
            background: 'radial-gradient(circle, rgba(253, 181, 21, 0.2) 0%, transparent 70%)',
            animationDuration: '15s',
            animationDelay: '2s'
          }}
        />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          {/* Main Heading with staggered animation */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white leading-[1.1] mb-8">
            <div 
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              DUKE IMPACT
            </div>
            <div 
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              INVESTING GROUP
            </div>
          </h1>
          
          {/* Subtitle with highlighted text */}
          <p 
            className="text-xl md:text-2xl lg:text-3xl text-white/95 font-light leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            Duke Students Focused on the Intersection of{" "}
            <span className="relative inline-block group">
              <span className="relative z-10 font-medium text-[#FDB515]">
                Business and Impact
              </span>
              {/* Animated oval highlight */}
              <svg
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[110%] h-[140%]"
                viewBox="0 0 300 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <ellipse
                  cx="150"
                  cy="30"
                  rx="145"
                  ry="26"
                  stroke="#FDB515"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  className="animate-draw-ellipse"
                  style={{
                    strokeDasharray: "920",
                    strokeDashoffset: "920",
                    animationDelay: "0.8s",
                    animationFillMode: "forwards"
                  }}
                />
              </svg>
            </span>
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}
      >
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;