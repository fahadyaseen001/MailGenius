import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils";

// Import your image based on the file path. You might need to adjust this based on your project setup.
// Example: import image1 from './images/image1.jpg';

interface Feature {
  step: string;
  title?: string;
  content: string;
  image: string; // Now you'll use the imported image directly here.
}

interface FeatureStepsProps {
  features: Feature[];
  className?: string;
  title?: string;
  autoPlayInterval?: number;
  imageHeight?: string;
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  autoPlayInterval = 3000,
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, features.length, autoPlayInterval]);

  return (
    <div className={cn("p-6 md:p-8 bg-[#3B82F6] text-white relative overflow-hidden", className)}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-white/15 rounded-full blur-2xl"></div>
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex items-center justify-center mb-4 pt-4">
          <div className="h-1 w-8 bg-white/50 rounded-full mr-3"></div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-white">
            {title}
          </h2>
          <div className="h-1 w-8 bg-white/50 rounded-full ml-3"></div>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-8 shadow-xl transform transition-all duration-500 relative">
          {/* Card decorative elements - removed the blurry element */}
          <div className="absolute -top-2 -left-2 w-5 h-5 rounded-full border-3 border-[#3B82F6] bg-white"></div>
          <div className="absolute -bottom-2 -right-2 w-5 h-5 rounded-full border-3 border-[#3B82F6] bg-white"></div>
          
          <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8">
            <div className="order-2 md:order-1 space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 md:gap-6"
                  initial={{ opacity: 0.3, x: -20 }}
                  animate={{ 
                    opacity: index === currentFeature ? 1 : 0.3,
                    x: index === currentFeature ? 0 : -10,
                    scale: index === currentFeature ? 1 : 0.98
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className={cn(
                      "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                      index === currentFeature
                        ? "bg-[#3B82F6] border-[#3B82F6] text-white scale-110 shadow-lg shadow-blue-200"
                        : "bg-transparent border-[#3B82F6] text-[#3B82F6]"
                    )}
                  >
                    {index <= currentFeature ? (
                      <span className="text-base font-bold">✓</span>
                    ) : (
                      <span className="text-base font-semibold">{index + 1}</span>
                    )}
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 flex items-center">
                      {feature.title || feature.step}
                      {index === currentFeature && (
                        <motion.span 
                          className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-[#3B82F6]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      )}
                    </h3>
                    <p className="text-sm md:text-base text-gray-700 mt-1">
                      {feature.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div
              className={cn(
                "order-1 md:order-2 relative h-[200px] md:h-[280px] lg:h-[350px] overflow-hidden rounded-lg border-4 border-white shadow-xl"
              )}
            >
              {/* Removed the window controls */}
              
              <AnimatePresence mode="wait">
                {features.map(
                  (feature, index) =>
                    index === currentFeature && (
                      <motion.div
                        key={index}
                        className="absolute inset-0 overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        <motion.img
                          src={feature.image}
                          alt={feature.step}
                          className="w-full h-full object-cover"
                          initial={{ scale: 1.05 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                        />
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}