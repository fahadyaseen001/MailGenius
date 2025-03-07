import { motion } from "framer-motion";

interface RestSectionProps {
  handleGetStarted: () => void;
}

const RestSection: React.FC<RestSectionProps> = ({ handleGetStarted }) => {
  return (
    <section className="relative flex justify-between items-center w-full pb-0 overflow-hidden px-4 lg:px-8">
      <div className="flex flex-col items-start justify-center max-w-3xl z-10">
        <h1
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
            - Eliminate bounce rates -
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
          - Automate domain warmups -
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
           - Send hyper relevant emails -
          </motion.span>
        </h1>

        <motion.button
          onClick={handleGetStarted}
          className="text-sm font-medium bg-black text-white px-3.5 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded-md transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
          style={{ fontFamily: "Roobert, sans-serif", fontWeight: 600 }}
          whileHover={{ 
            backgroundColor: "#3B82F6",
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
      </div>

        <img 
          src="/images/mailopen.png" 
          alt="Decorative element" 
          className="w-80 h-auto" 
          loading="eager"
          fetchPriority="high"
        />
    </section>
  );
};

export default RestSection; 