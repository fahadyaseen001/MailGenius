import { useState, useEffect, useRef, memo, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Preload images utility function
const preloadImage = (src:any) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = reject;
    img.src = src;
  });
};

const HeroImageCarousel = memo(() => {
  // Use local placeholder images or optimize remote placeholders
  const images = useMemo(() => [
    {
      src: "/images/pic1.jpg", // Recommended: local image paths
      placeholder: "/images/placeholders/hero1-placeholder.jpg"
    },
    {
      src: "/images/pic2.jpg",
      placeholder: "/images/placeholders/hero2-placeholder.jpg"
    },
    {
      src: "/images/pic3.jpg",
      placeholder: "/images/placeholders/hero3-placeholder.jpg"
    }
  ], []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const carouselRef = useRef(null);

  // Optimized slide variants with reduced animation complexity
  const slideVariants = useMemo(() => ({
    initial: {
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.3,
        type: "linear"
      }
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "tween"
      }
    },
    exit: {
      opacity: 0,
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  }), []);

  // Preload images on component mount
  useEffect(() => {
    const loadImages = async () => {
      try {
        await Promise.all(images.map(img => preloadImage(img.src)));
        setImagesLoaded(true);
      } catch (error) {
        console.error('Image preloading failed', error);
      }
    };

    loadImages();
  }, [images]);

  // Memoized slide change handler
  const changeSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  // Performance-optimized interval setup
  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(changeSlide, 5000);
    return () => clearInterval(interval);
  }, [imagesLoaded, changeSlide]);

  // Performance tracking (optional)
  useEffect(() => {
    const startTime = performance.now();
    return () => {
      const endTime = performance.now();
      console.log(`Carousel render time: ${endTime - startTime}ms`);
    };
  }, [currentIndex]);

  // Prevent rendering if images not loaded
  if (!imagesLoaded) {
    return <div className="w-full max-w-[600px] aspect-[4/3] bg-gray-200 animate-pulse"></div>;
  }

  return (
    <div
      ref={carouselRef}
      className="relative w-full max-w-[600px] aspect-[4/3] mx-auto overflow-hidden rounded-2xl hidden lg:block"
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0"
        >
          {/* Optimized background placeholder */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${images[currentIndex].placeholder})`,
              filter: 'blur(15px)', // Reduced blur
              transform: 'scale(1.05)', // Minimal scale
              opacity: 0.6 // Slightly reduced opacity
            }}
          />

          {/* Main image with optimized loading */}
          <img
            src={images[currentIndex].src}
            alt={`Hero image ${currentIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            width={600}
            height={450}
          />
        </motion.div>
      </AnimatePresence>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-background/20 via-background/10 to-transparent" />
    </div>
  );
});

// Prevent unnecessary re-renders
HeroImageCarousel.displayName = 'HeroImageCarousel';

export default HeroImageCarousel;