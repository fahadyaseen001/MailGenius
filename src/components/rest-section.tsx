import { motion, AnimatePresence, useAnimation } from "framer-motion";
import TabsComponent from "./ui/tab-switcher";
import { useState, useEffect, useRef } from "react";

interface RestSectionProps {
  handleGetStarted: () => void;
}

interface HeadingContent {
  text: string;
  highlightWord: string;
  highlightColor: string;
}

const headingContent: Record<string, HeadingContent> = {
  tab1: {
    text: "Reduce them to <1% with AI-powered email validation and DNS management",
    highlightWord: "<1%",
    highlightColor: "#3B82F6"
  },
  tab2: {
    text: "Ensure 100% mailbox delivery with automated warm-ups and domain health optimization",
    highlightWord: "100%",
    highlightColor: "#22C55E"
  },
  tab3: {
    text: "Personalize emails using job changes, company milestones, and LinkedIn activity",
    highlightWord: "Personalize",
    highlightColor: "#F59E0B"
  },
  tab4: {
    text: "Replace 10+ apps with one platform: data extraction, enrichment, sending, and analytics",
    highlightWord: "10+",
    highlightColor: "#EC4899"
  }
};

const RestSection: React.FC<RestSectionProps> = ({ handleGetStarted }) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  
  // Start animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  
  // Function to render heading with highlighted word when a tab is active
  const renderActiveTabHeading = (content: HeadingContent) => {
    const parts = content.text.split(content.highlightWord);
    return (
      <>
        {parts[0]}
        <motion.span
          className="inline-block cursor-pointer"
          whileHover={{ 
            color: content.highlightColor, 
            scale: 1.02,
            textShadow: `0px 0px 8px rgba(${hexToRgb(content.highlightColor)}, 0.3)`
          }}
          transition={{ duration: 0.3 }}
          style={{ color: content.highlightColor }}
        >
          {content.highlightWord}
        </motion.span>
        {parts[1]}
      </>
    );
  };
  
  // Helper function to convert hex color to RGB format for shadow
  const hexToRgb = (hex: string) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const formattedHex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(formattedHex);
    
    return result 
      ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
      : '59, 130, 246';
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.3 }
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="relative flex justify-between items-center w-full pb-0 overflow-hidden px-25 lg:px-35"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="flex flex-col items-start justify-center max-w-3xl z-10">
        <motion.div 
          className="mb-30"
          variants={itemVariants}
        >
          <TabsComponent onTabChange={handleTabChange} defaultTab={activeTab || undefined} />
        </motion.div>
        
        {activeTab ? (
          <AnimatePresence mode="wait">
            <motion.h1
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="font-[600] text-black leading-[74px] text-[74px] tracking-tight mb-6 text-left"
              style={{
                fontFamily: "Roobert, sans-serif",
                fontWeight: 600,
                fontSize: "50px",
                lineHeight: "74px",
              }}
            >
              {renderActiveTabHeading(headingContent[activeTab])}
            </motion.h1>
          </AnimatePresence>
        ) : (
          <motion.h1
            variants={itemVariants}
            className="font-[600] text-black leading-[74px] text-[74px] tracking-tight mb-6 text-left"
            style={{
              fontFamily: "Roobert, sans-serif",
              fontWeight: 600,
              fontSize: "50px",
              lineHeight: "74px",
            }}
          >
            <motion.span
              className="inline-block cursor-pointer"
              whileHover={{ 
                color: "#3B82F6", 
                scale: 1.02,
                textShadow: "0px 0px 8px rgba(59, 130, 246, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              Eliminate bounce rates
            </motion.span>
            <br />
            <motion.span 
              className="inline-block text-gray-500 cursor-pointer"
              whileHover={{ 
                color: "#10B981", 
                scale: 1.02,
                textShadow: "0px 0px 8px rgba(16, 185, 129, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
            Automate domain warmups
            </motion.span>
            <br/>
            <motion.span 
              className="inline-block text-yellow-500 cursor-pointer"
              whileHover={{ 
                color: "#F59E0B", 
                scale: 1.02,
                textShadow: "0px 0px 8px rgba(245, 158, 11, 0.3)" 
              }}
              transition={{ duration: 0.3 }}
            >
             Send hyper relevant emails
            </motion.span>
          </motion.h1>
        )}

        <motion.div variants={itemVariants}>
          <motion.button
            onClick={handleGetStarted}
            className="text-sm font-medium bg-black text-white px-3.5 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded-md transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
            style={{ fontFamily: "Roobert, sans-serif", fontWeight: 600 }}
            whileHover={{ 
              backgroundColor: activeTab ? headingContent[activeTab].highlightColor : "grey",
              scale: 1.04
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
          >
            Start building for free
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="16"
              height="16"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        </motion.div> 
      </div>

      <motion.div
        variants={imageVariants}
      >
        <img 
          src="/images/mailopen.png" 
          alt="Decorative element" 
          className="w-90 h-auto" 
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>
    </motion.section>
  );
};

export default RestSection; 