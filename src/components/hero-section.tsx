import React from 'react';
import { motion } from 'framer-motion';
import TrustedBySection from './trusted-by-section';
import RestSection from './rest-section';

interface HeroSectionProps {
  handleGetStarted: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ handleGetStarted }) => {
  return (
    <section className="relative overflow-hidden pt-0 pb-20 md:pb-28 lg:pb-32 bg-white">
      <div className="container mx-auto px-2 sm:px-4 max-w-screen-2xl relative">
        {/* Left side image */}
        <div className="absolute left-0 bottom-0 z-0 hidden md:block">
          <img 
            src="/images/@image.png" 
            alt="Decorative element" 
            className="w-80 h-auto" 
            style={{ transform: "translateY(-20%) translateX(-10%)" }}
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Right side image  */}
        <div className="absolute right-0 top-0 z-0 hidden md:block">
          <img 
            src="/images/mailclosed.png" 
            alt="Decorative element" 
            className="w-100 h-auto" 
            style={{ transform: "translateY(-20%) translateX(10%)" }}
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Main Content Card */}
        <div
          className="bg-[#f9f9f7] rounded-[32px] p-12 md:p-16 lg:p-24 max-w-full w-full sm:w-[92%] mx-auto"
          style={{ marginTop: "-1px" }}
        >
          <motion.div 
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="font-[600] text-black leading-[74px] text-[74px] tracking-tight mb-6"
              style={{
                fontFamily: "Roobert, sans-serif",
                fontWeight: 600,
                fontSize: "74px",
                lineHeight: "74px",
              }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Never Miss any Inbox
              </motion.span>
              <br />
              <motion.span 
                className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                — with Mailsonic.ai
              </motion.span>
            </h1>

            <p className="text-md md:text-md text-gray-700 max-w-3xl mx-auto mb-10" style={{ fontFamily: "Roobert, sans-serif", fontWeight: 600, }}>
              From first outreach to lasting relationship, craft messages that <span className="text-blue-600 font-bold">land with impact</span>. Our platform combines AI precision with human insight for emails that connect, convert, and deliver—every time.
            </p>

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
          </motion.div>
        </div>

        {/* Trust Indicators - Outside the card */}
        <motion.div
          className="mt-15 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="uppercase text-xs font-medium tracking-wider text-black mb-3" style={{ fontFamily: "Roobert, sans-serif", fontWeight: 600, }}>
            TRUSTED BY MORE THAN 300,000 LEADING GTM TEAMS OF ALL SIZES
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-gray-400">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <div className="flex ml-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-yellow-400">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-600" style={{ fontFamily: "Roobert, sans-serif", fontWeight: 600, }}>4.9 rating</span>
            </div>
            <div className="h-4 w-px bg-gray-300 mx-2"></div>
            <div className="flex items-center">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-gray-400">
                <path
                  d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="9"
                  cy="7"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ml-2 text-gray-600" style={{ fontFamily: "Roobert, sans-serif", fontWeight: 600, }}>20k+ growth community</span>
            </div>
          </div>
        </motion.div>
      </div>
      <TrustedBySection />
      <RestSection handleGetStarted={handleGetStarted} />

    </section>
  );
};

export default HeroSection; 