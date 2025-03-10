import { useRef, useEffect } from 'react';

// Type for the ScrollTrigger instance
interface ScrollTriggerInstance {
  kill: () => void;
  progress: number;
}

// Type for the Timeline instance
interface TimelineInstance {
  kill: () => void;
}

// PortfolioSlider Component
const PortfolioSlider = ({ title = "Features", images = [] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);

  // Default images if none provided
  const defaultImages = Array(6).fill('/api/placeholder/800/600');
  const featureImages = images.length > 0 ? images : defaultImages;
  
  // Background colors for each feature card

  // Primary solid colors for headers
  const primaryColors = [
    '#c026d3',  // Purple for AI Formatting
    '#0369a1',  // Blue for AI Conditional Logic
    '#eab308',  // Yellow
    '#16a34a',  // Green
    '#b45309',  // Brown
    '#dc2626',  // Red
  ];
  
  // Feature card data - replace with actual content
  const features = featureImages.map((_img, index) => ({
    title: index === 0 ? "AI FORMATTING" : 
           index === 1 ? "AI CONDITIONAL LOGIC" : 
           index === 2 ? "AI PROSPECTING" :
           index === 3 ? "SMART AUTOMATION" :
           index === 4 ? "DATA ENRICHMENT" :
           index === 5 ? "PERFORMANCE ANALYTICS" :
           `Feature ${index + 1}`,

    heading: index === 0 ? "Clean and format data with AI in seconds" : 
             index === 1 ? "Run action steps conditionally — no engineering needed" : 
             index === 2 ? "Find qualified leads faster with AI targeting" :
             index === 3 ? "Build complex workflows without coding" :
             index === 4 ? "Enhance contact data automatically" :
             index === 5 ? "Track and optimize your campaign results" :
             `Feature ${index + 1} Heading`,

    description: index === 0 ? 
      "Use AI to transform any record into the format you need. Concatenate data, ensure consistent formatting, and remove extra emojis, symbols, or unnecessary info from lists." : 
      index === 1 ? 
      "Conditionally run workflows based on any logic. Use different providers for different companies, enrich only your best-fit leads, or build in fallbacks (e.g. looking for mobiles only if you don't find emails)." : 
      index === 2 ?
      "Automatically identify and prioritize high-value prospects using AI that learns from your conversion patterns. Target the right companies, roles, and decision makers to maximize your outreach effectiveness." :
      index === 3 ?
      "Automate repetitive tasks with drag-and-drop simplicity. Connect your tools, set triggers, and create custom actions that run exactly when you need them. Save hours of manual work every week." :
      index === 4 ?
      "Instantly add missing information to your contacts with smart enrichment. Find phone numbers, verify emails, add company details, and keep your database fresh with automated updates." :
      index === 5 ?
      "Get powerful insights into what's working and what isn't. Monitor key metrics, analyze trends, and receive intelligent recommendations to continuously improve your outreach performance." :
      `Description for feature ${index + 1}. Replace with actual description.`,

    backgroundColor: primaryColors[index % primaryColors.length],
    cardIndex: index
  }));

  useEffect(() => {
    // Import GSAP dynamically
    const setupAnimation = async () => {
      try {
        // Dynamic imports
        const { gsap } = await import('gsap/dist/gsap');
        const { ScrollTrigger } = await import('gsap/dist/ScrollTrigger');
        
        // Register plugins
        gsap.registerPlugin(ScrollTrigger);
        
        // Make sure refs are defined
        if (!containerRef.current || !panelsRef.current) return;
        
        // Clear any existing ScrollTriggers first
        ScrollTrigger.getAll().forEach((st: ScrollTriggerInstance) => st.kill());
        
        // Calculate total scroll width
        const totalPanelWidth = panelsRef.current.scrollWidth;
        const windowWidth = window.innerWidth;
        const distanceToScroll = totalPanelWidth - windowWidth;
        
        // Create the main horizontal scroll animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            start: "top top",
            end: `+=${distanceToScroll}`,
            scrub: 1,
            markers: false, // For debugging, remove in production
            invalidateOnRefresh: true,
            anticipatePin: 1
          }
        });
        
        // Title animation
        tl.to(".portfolio-title", { 
          x: 300,
          ease: "none" 
        }, 0);
        
        // Horizontal scroll animation - directly target panels container
        tl.to(panelsRef.current, { 
          x: -distanceToScroll,
          ease: "none" 
        }, 0);
        
        // Refresh ScrollTrigger to ensure everything is properly positioned
        ScrollTrigger.refresh();
        
        // Update on window resize
        const handleResize = () => {
          if (panelsRef.current) {
            ScrollTrigger.refresh();
          }
        };
        
        window.addEventListener('resize', handleResize);
        
        // Cleanup function
        return () => {
          ScrollTrigger.getAll().forEach((st: ScrollTriggerInstance) => st.kill());
          (tl as TimelineInstance).kill();
          window.removeEventListener('resize', handleResize);
        };
      } catch (error) {
        console.error("Error setting up GSAP animations:", error);
      }
    };
    
    // Run the animation setup
    setupAnimation();
  }, []);

  return (
    <section className="portfolio-section" ref={containerRef}>
      <h2 className="portfolio-title text-stroke">{title}</h2>
      
      <div className="panels-container" ref={panelsRef}>
        {features.map((feature, index) => (
          <div className="panel" key={`panel-${index}`}>
            <div className="panel-item">
              <div 
                className={`feature-card ${
                  index % 6 === 0 ? 'purple-card' : 
                  index % 6 === 1 ? 'blue-card' : 
                  index % 6 === 2 ? 'yellow-card' : 
                  index % 6 === 3 ? 'green-card' : 
                  index % 6 === 4 ? 'brown-card' : 
                  'red-card'
                }`} 
                style={{ backgroundColor: feature.backgroundColor }}
              >
                <div className="feature-content">
                  <h4 className="feature-label">{feature.title}</h4>
                  <h2 className="feature-heading">{feature.heading}</h2>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&display=swap');
        
        .portfolio-section {
          width: 100%;
          height: 100vh;
          position: relative;
          background-color:rgb(226, 226, 226);
          overflow: hidden;
          padding: 0;
          margin: 0;
        }
        
        .panels-container {
          display: flex;
          flex-wrap: nowrap;
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: fit-content;
          will-change: transform;
        }
        
        .portfolio-title {
          position: absolute;
          top: 0;
          left: -15rem;
          font-size: 24rem;
          letter-spacing: 0;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #343A42;
          display: inline-block;
          z-index: 10;
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          pointer-events: none;
          will-change: transform;
        }
        
        .text-stroke {
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: #343A42;
        }
        
        .panel {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          padding: 10rem 2rem 2rem 2rem;
          width: 50vw;
          flex-shrink: 0;
        }
        
        .panel-item {
          height: 100%;
          width: 100%;
          max-width: 500px;
          aspect-ratio: 0.9;
        }
        
        .feature-card {
          display: flex;
          flex-direction: column;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          height: 100%;
          width: 100%;
          transition: transform 0.3s ease;
          opacity: 1;
          transform: scale(1);
          position: relative;
          font-family: 'Montserrat', sans-serif;
        }
        
        .purple-card {
          background-color: #c026d3 !important;
          background-image: linear-gradient(140deg, #c026d3, #9d174d);
        }
        
        .blue-card {
          background-color: #0369a1 !important;
          background-image: linear-gradient(140deg, #0369a1, #0c4a6e);
        }
        
        .yellow-card {
          background-color: #eab308 !important;
          background-image: linear-gradient(140deg, #eab308, #a16207);
        }
        
        .green-card {
          background-color: #16a34a !important;
          background-image: linear-gradient(140deg, #16a34a, #065f46);
        }
        
        .brown-card {
          background-color: #b45309 !important;
          background-image: linear-gradient(140deg, #b45309, #7c2d12);
        }
        
        .red-card {
          background-color: #dc2626 !important;
          background-image: linear-gradient(140deg, #dc2626, #991b1b);
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
        }
        
        .feature-content {
          padding: 2.5rem;
          color: #fff;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        
        .feature-label {
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        
        .feature-heading {
          font-size: 2.2rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
          line-height: 1.2;
        }
        
        .feature-description {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          margin-top: 0.5rem;
        }
      `}</style>
    </section>
  );
};

export default PortfolioSlider;