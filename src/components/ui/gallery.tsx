import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroImageCarousel = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      placeholder: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAGQYXBwbAgAAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWFwcGzm/uu/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWRlc2MAAAFEAAAAeGN3dHMAAAGcAAAAIChhWFlaAAABvAAAABRiWFlaAAAC0AAAABRyVFJDAAAC5AAACAxhYXJrAAAD7AAAACR2dWUAAAEUAAAAhGdlbmMAAAFYAAAAFmdldGMAAAFwAAAAFmx3dGMAAAGGAAAAFm1sdWMAAAAAAAAAAQAAAAxlblVTAAAAHAAAABwAc1JHQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2N1cnYAAAAAAAAAKAAAAFhQD9X/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBYUFRT/2wBDAQMEBAUEBQkFBQkUDQENFBQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgMBAQAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      placeholder: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAGQYXBwbAgAAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWFwcGzm/uu/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWRlc2MAAAFEAAAAeGN3dHMAAAGcAAAAIChhWFlaAAABvAAAABRiWFlaAAAC0AAAABRyVFJDAAAC5AAACAxhYXJrAAAD7AAAACR2dWUAAAEUAAAAhGdlbmMAAAFYAAAAFmdldGMAAAFwAAAAFmx3dGMAAAGGAAAAFm1sdWMAAAAAAAAAAQAAAAxlblVTAAAAHAAAABwAc1JHQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2N1cnYAAAAAAAAAKAAAAFhQD9X/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBYUFRT/2wBDAQMEBAUEBQkFBQkUDQENFBQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgMBAQAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
    },
    {
      src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
      placeholder: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAGQYXBwbAgAAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWFwcGzm/uu/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWRlc2MAAAFEAAAAeGN3dHMAAAGcAAAAIChhWFlaAAABvAAAABRiWFlaAAAC0AAAABRyVFJDAAAC5AAACAxhYXJrAAAD7AAAACR2dWUAAAEUAAAAhGdlbmMAAAFYAAAAFmdldGMAAAFwAAAAFmx3dGMAAAGGAAAAFm1sdWMAAAAAAAAAAQAAAAxlblVTAAAAHAAAABwAc1JHQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2N1cnYAAAAAAAAAKAAAAFhQD9X/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBYUFRT/2wBDAQMEBAUEBQkFBQkUDQENFBQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgMBAQAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 0.5 }
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        type: "tween"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 1.05,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div 
      ref={carouselRef}
      className="relative w-full max-w-[600px] aspect-[4/3] mx-auto overflow-hidden rounded-2xl hidden lg:block"
    >
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentIndex}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${images[currentIndex].placeholder})`,
              filter: 'blur(20px)',
              transform: 'scale(1.1)',
              opacity: 0.7
            }}
          />
          <img
            src={images[currentIndex].src}
            alt={`Data visualization ${currentIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </AnimatePresence>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-background/30 via-background/10 to-transparent" />
    </div>
  );
};

export default HeroImageCarousel;