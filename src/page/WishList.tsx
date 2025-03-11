import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Loader2, CheckCircle, AlertCircle, Sparkles, ArrowRight, Twitter, ChevronRight } from 'lucide-react';
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from '@/components/ui/input';

// Profile images for social proof
const profileImages = [
  'https://i.pravatar.cc/150?img=1',
  'https://i.pravatar.cc/150?img=2',
  'https://i.pravatar.cc/150?img=3',
  'https://i.pravatar.cc/150?img=4',
  'https://i.pravatar.cc/150?img=5',
];

const features = [
  { 
    title: "AI-Powered Inbox", 
    description: "Smart categorization and priority handling that learns your preferences",
    icon: "✨"
  },
  { 
    title: "Zero Latency", 
    description: "Instant delivery with our proprietary network infrastructure",
    icon: "⚡"
  },
  { 
    title: "Privacy First", 
    description: "End-to-end encryption with zero knowledge architecture",
    icon: "🔒"
  }
];

function WishList() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [waitlistCount, setWaitlistCount] = useState(4217);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    // Simulate real-time waitlist count updates
    const interval = setInterval(() => {
      setWaitlistCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);

    // Auto-rotate testimonials
    const testimonialInterval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(testimonialInterval);
    };
  }, []);



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    setTimeout(() => {
      if (email && email.includes('@')) {
        setIsSuccess(true);
        setIsSubmitting(false);
        setWaitlistCount(prev => prev + 1);
      } else {
        setError('Please enter a valid email address');
        setIsSubmitting(false);
      }
    }, 1500);
  };

  const testimonials = [
    { 
      name: 'Sarah Chen', 
      role: 'Founder, TechVentures', 
      text: '"This is exactly what we\'ve been waiting for. Game-changing."',
      avatar: profileImages[0]
    },
    { 
      name: 'Alex Rivera', 
      role: 'CTO, FutureScale', 
      text: '"Finally, an email service that thinks ahead. Brilliant."',
      avatar: profileImages[1]
    },
    { 
      name: 'Mike Zhang', 
      role: 'Head of Growth, LaunchX', 
      text: '"The attention to detail is unmatched. Can\'t wait to use it."',
      avatar: profileImages[2]
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Light background with subtle patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-gray-50 z-0" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay z-0" />
      
      {/* Floating elements with light colors */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute h-${Math.random() > 0.7 ? 3 : 2} w-${Math.random() > 0.7 ? 3 : 2} ${Math.random() > 0.8 ? 'bg-blue-200/40' : 'bg-gray-200/40'} rounded-full`}
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              scale: [Math.random() > 0.7 ? 1.5 : 1, Math.random() > 0.5 ? 2 : 1, Math.random() > 0.3 ? 1 : 0.5],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>



      <div className="w-full max-w-6xl relative z-10 mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            {/* Enhanced social proof section with light theme */}
            <motion.div
              className="flex flex-col space-y-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  {profileImages.map((img, i) => (
                    <motion.img
                      key={i}
                      src={img}
                      alt={`User ${i + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    />
                  ))}
                </div>
                <div className="ml-4 bg-gray-100 px-4 py-2 rounded-full shadow-sm">
                  <span className="text-gray-700 text-sm font-medium">
                    <span className="text-gray-900 font-bold">{waitlistCount.toLocaleString()}</span> people waiting
                  </span>
                </div>
              </div>

              <motion.div 
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 shadow-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Sparkles className="w-4 h-4 text-blue-500 mr-2" />
                <span className="text-blue-700 text-sm font-medium">Coming Q1 2025</span>
              </motion.div>

              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                The future of <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text"> Email </span>
                <br />is almost here
              </motion.h1>
              
              <motion.p 
                className="text-lg text-gray-600 max-w-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Join the waitlist for early access to MailGenie's revolutionary email platform. 
                Be among the first to experience the next generation of email communication.
              </motion.p>

              {/* Form section with light styling */}
              <div className="max-w-md w-full mt-6">
                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.form
                      onSubmit={handleSubmit}
                      className="space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <motion.div
                        className="relative group"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-gray-700 placeholder-gray-400 text-lg transition-all duration-200 shadow-sm"
                          disabled={isSubmitting}
                        />
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-200/50 to-indigo-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                      </motion.div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium py-4 px-6 rounded-2xl transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="animate-spin h-5 w-5 mr-2" />
                            <span>Joining waitlist...</span>
                          </>
                        ) : (
                          <>
                            <span className="font-semibold">Join Waitlist</span>
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  ) : (
                    <motion.div
                      className="text-center space-y-6 px-4"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", duration: 0.5 }}
                    >
                      <motion.div
                        className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center shadow-md"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                      >
                        <CheckCircle className="h-10 w-10 text-white" />
                      </motion.div>
                      <h2 className="text-3xl font-bold text-gray-900">You're in!</h2>
                      <p className="text-gray-600 text-lg">You're now #{waitlistCount.toLocaleString()} on our waitlist.</p>
                      <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                          onClick={() => {window.location.href = 'https://twitter.com/intent/tweet?text=Just%20joined%20the%20waitlist%20for%20@MailJet%20-%20the%20future%20of%20email%20is%20coming!%20🚀'}}
                          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#1DA1F2]/10 hover:bg-[#1DA1F2]/20 text-[#1DA1F2] transition-colors shadow-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Twitter className="w-5 h-5 mr-2" />
                          Share on Twitter
                        </motion.button>
                        <motion.button
                          onClick={() => setIsSuccess(false)}
                          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors shadow-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ArrowLeft className="w-5 h-5 mr-2" />
                          Back to form
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Error Message with light styling */}
              <AnimatePresence>
                {error && (
                  <motion.div 
                    className="mt-4 p-4 bg-red-50 text-red-700 rounded-xl flex items-start border border-red-100 max-w-md shadow-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <AlertCircle className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5 text-red-500" />
                    <span>{error}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            {/* Feature highlights with light theme */}
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl opacity-50" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-100/50 rounded-full blur-3xl opacity-30" />
              
              {/* Glass card with features */}
              <motion.div 
                className="relative bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="text-gray-400 text-xs">mailgenie.ai</div>
                  </div>
                  
                  {/* Testimonial carousel */}
                  <div className="relative min-h-[240px] mb-8 overflow-hidden">
                    <AnimatePresence mode="wait">
                      {testimonials.map((testimonial, index) => (
                        activeTestimonial === index && (
                          <motion.div
                            key={index}
                            className="absolute inset-0 p-6 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col justify-between shadow-sm"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="text-gray-700 text-lg font-light italic leading-relaxed flex-grow">{testimonial.text}</p>
                            <div className="flex items-center mt-4">
                              <img
                                src={testimonial.avatar || "/placeholder.svg"}
                                alt={testimonial.name}
                                className="w-10 h-10 rounded-full mr-3 object-cover border border-gray-200"
                              />
                              <div>
                                <p className="text-gray-900 font-medium">{testimonial.name}</p>
                                <p className="text-gray-500 text-sm">{testimonial.role}</p>
                              </div>
                            </div>
                          </motion.div>
                        )
                      ))}
                    </AnimatePresence>
                    
                    {/* Testimonial indicators */}
                    <div className="absolute bottom-2 right-2 flex space-x-1">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveTestimonial(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            activeTestimonial === index ? 'bg-gray-700' : 'bg-gray-300'
                          }`}
                          aria-label={`View testimonial ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Feature list */}
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors shadow-sm"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + (index * 0.1) }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mr-4 text-xl shadow-sm">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-gray-900 font-medium">{feature.title}</h3>
                          <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Bottom CTA */}
                  <div className="mt-8">
                    <motion.a
                      href="#"
                      className="flex items-center justify-between p-4 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 transition-colors shadow-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="font-medium">Learn more about our technology</span>
                      <ChevronRight className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
      </div>

      {/* We need to keep BackgroundBeams but might need to customize it separately */}
      <BackgroundBeams />
    </div>
  );
}

export default WishList;
