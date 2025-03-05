import { cn } from "@/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"
import { useEffect, useRef, useState } from "react"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  // Create a duplicated array for continuous scrolling
  const allTestimonials = [...testimonials, ...testimonials, ...testimonials];
  
  // Animation state for manual control
  const [isHovering, setIsHovering] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number>(0);
  const lastScrollPositionRef = useRef<number>(0);
  
  // Setup the animation
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    const duration = 40000; // 40 seconds for one complete cycle
    
    const animate = (timestamp: number) => {
      if (!lastTimestampRef.current) {
        lastTimestampRef.current = timestamp;
      }
      
      if (isHovering) {
        // Store the current position when hovering
        lastScrollPositionRef.current = scrollContainer.scrollLeft;
        lastTimestampRef.current = timestamp;
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      
      // Calculate elapsed time since last frame
      const deltaTime = timestamp - lastTimestampRef.current;
      lastTimestampRef.current = timestamp;
      
      // Calculate how much to scroll based on time passed
      const totalWidth = scrollContainer.scrollWidth / 3;
      const pixelsPerMs = totalWidth / duration;
      const scrollDelta = deltaTime * pixelsPerMs;
      
      // Update position with smooth incremental changes
      lastScrollPositionRef.current += scrollDelta;
      
      // If we've scrolled past the first set of testimonials, reset to beginning of second set
      if (lastScrollPositionRef.current >= totalWidth) {
        lastScrollPositionRef.current = 0;
      }
      
      // Apply the scroll position
      scrollContainer.scrollLeft = lastScrollPositionRef.current;
      
      // Continue animation
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start the animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup function
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering]);
  
  return (
    <section className={cn(
      "bg-background text-foreground",
      "py-12 sm:py-24 md:py-32 px-0",
      className
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            {description}
          </p>
        </div>

        <div 
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-hidden py-4 no-scrollbar"
            style={{ scrollBehavior: 'auto' }}
          >
            {allTestimonials.map((testimonial, i) => (
              <div key={i} className="min-w-[300px] max-w-[300px] flex-shrink-0">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
          
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
        </div>
      </div>
    </section>
  )
}