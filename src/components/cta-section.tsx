import React from 'react';
import { motion } from "framer-motion";

interface CTASectionProps {
  handleGetStarted: () => void;
  handleBookDemo: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ handleGetStarted, handleBookDemo }) => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 max-w-4xl " style={{ fontFamily: "Roobert, sans-serif", fontWeight: 600, }}>
            Stop Losing Leads to Spam Folders and Generic Outreach
          </h2>
          <p className="max-w-2xl text-xl text-gray-600 leading-relaxed " style={{ fontFamily: "Roobert, sans-serif", fontWeight: 600, }}>
            Join 8,000+ marketers who boosted replies by 200% and cut bounce rates to near-zero
          </p>
          <div className="inline-block px-8 py-2 rounded-md border border-gray-300 border-2">
            <span className="font-semibold text-sm tracking-wide bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">Claim 14-Day Free Trial – No Credit Card Needed</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 pt-8">
            <motion.button
              onClick={handleGetStarted}
              className="text-sm font-medium bg-black text-white px-3.5 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded-md transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
              style={{ fontFamily: "Roobert, sans-serif", fontWeight: 600 }}
              whileHover={{ 
                backgroundColor: "rgb(76, 145, 255)",
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
            <motion.button
              onClick={handleBookDemo}
              className="text-sm font-medium bg-white border border-black text-black px-3.5 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded-md transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
              style={{ fontFamily: "Roobert, sans-serif", fontWeight: 600 }}
              whileHover={{ 
                backgroundColor: "rgb(244, 187, 90)",
                scale: 1.04
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
            >
              Book a demo
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 