import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { TestimonialsSection } from "./ui/testimonials-with-marquee";
import { AnimatedNumber } from '@/components/ui/animated-numbers';
import { motion } from 'framer-motion';

interface TestimonialSectionProps {
  testimonialsRef: React.RefObject<HTMLDivElement | null>;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonialsRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const localRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, no need to observe anymore
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
      }
    );

    // Combine the refs
    const element = testimonialsRef?.current || localRef.current;
    
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [testimonialsRef]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section 
      ref={(element) => {
        // Set both refs
        if (localRef.current !== element) {
          localRef.current = element;
        }
        if (testimonialsRef && typeof testimonialsRef === 'object') {
          testimonialsRef.current = element as HTMLDivElement;
        }
      }} 
      className="relative bg-gradient-to-r from-blue-500 to-indigo-600 " 
    >
      {/* Curved top SVG */}
      <motion.div 
        className="absolute top-0 left-0 w-full transform -translate-y-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[120px]">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" /> {/* blue-500 */}
              <stop offset="100%" stopColor="#4f46e5" /> {/* indigo-600 */}
            </linearGradient>
          </defs>
          <path 
            fill="url(#gradient)" 
            d="M0,0L48,5.3C96,11,192,21,288,37.3C384,53,480,75,576,69.3C672,64,768,32,864,26.7C960,21,1056,43,1152,53.3C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </motion.div>
      
      <motion.div 
        className="pt-5 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div 
          className="inline-block bg-white px-8 py-2 rounded-full mb-10"
          variants={fadeInUp}
        >
          <span className="font-semibold text-sm tracking-wide" style={{ color: "rgb(48, 107, 255)" }}>IN THE LAST 30 DAYS</span>
        </motion.div>
        <motion.div 
          className="max-w-[900px] mx-auto px-4 relative"
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-1 leading-tight tracking-tight whitespace-nowrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {isVisible && (
              <AnimatedNumber 
                value={57278} 
                springOptions={{ stiffness: 100, damping: 20 }} 
              />
            )}
            {!isVisible && "0"} mailsonic campaigns
          </motion.h2>
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-24 md:mb-20 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            generated
          </motion.h2>
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 px-12 py-6 rounded-full text-3xl md:text-5xl font-bold shadow-lg"
            style={{ 
              background: "linear-gradient(90deg, rgb(255, 249, 177) 0%, rgb(255, 242, 96) 100%)",
              color: "rgb(30, 64, 175)",
              top: "calc(100% - 7.5rem)",
              transform: "translateX(0%) translateY(130%) rotate(5deg)",
              zIndex: 20
            }}
          >
            <span className="text-gray-700">$
              {isVisible && (
                <AnimatedNumber 
                  value={118641000} 
                  springOptions={{ stiffness: 80, damping: 25 }} 
                />
              )}
              {!isVisible && "0"}
            </span>
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <TestimonialsSection
          testimonials={[
            {
              author: {
                name: "HK",
                position: "CEO",
                company: "Efani (YCombinator)",
                avatar: "/images/person1.png",
              },
              text: "Our bounce rate dropped from 12% to 0.3% in 2 weeks. The DNS management tools alone are worth the price",
              stats: [
                { value: "+40%", label: "Reply Rates", color: "#ffa0a0" },
                { value: "30+", label: "Meetings Booked", color: "#d7b7ff" },
                { value: "$20K", label: "Revenue Generated", color: "#d8ff80" }
              ],
              backgroundColor: "#ffffff", // White background
            },
            {
              author: {
                name: "Luna",
                position: "Founder",
                company: "Plura",
                avatar: "/images/person2.png",
              },
              text: "Mailsonic.ai's AI wrote better emails than our copywriters. The LinkedIn scraping found leads we didn't even know existed",
              stats: [
                { value: "2x", label: "Open Rate", color: "#ffa0a0" },
                { value: "2x", label: "Replay Rate", color: "#d7b7ff" },
                { value: "70%", label: "Cost Decrease", color: "#d8ff80" }
              ],
              backgroundColor: "#ffffff", // White background
            },
          ]}
        />
      </motion.div>
    </section>
  );
};

export default TestimonialSection; 