import * as React from "react"
import { cn } from "@/utils"

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  pauseOnHover?: boolean
  direction?: "left" | "right"
  speed?: number
  className?: string
}

export function Marquee({
  children,
  pauseOnHover = false,
  direction = "left",
  speed = 30,
  className,
  ...props
}: MarqueeProps) {
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const [, setTrackWidth] = React.useState(0);
  const [contentWidth, setContentWidth] = React.useState(0);
  const [] = React.useState(2);

  const contentRef = React.useRef<HTMLDivElement>(null);

  // Create a copy of children with unique keys
  const contentCopies = React.useMemo(() => {
    const childArray = React.Children.toArray(children);
    // Create an array with enough copies to ensure we never have blank space
    return Array.from({ length: 10 }, (_, i) => (
      <div key={`copy-${i}`} className="flex">
        {childArray.map((child, j) => (
          <div key={`${i}-${j}`} className="flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
    ));
  }, [children]);

  // Measure the content width on mount and resize
  React.useEffect(() => {
    if (!contentRef.current) return;

    const updateWidths = () => {
      if (marqueeRef.current && contentRef.current) {
        const trackRect = marqueeRef.current.getBoundingClientRect();
        const contentRect = contentRef.current.getBoundingClientRect();
        
        setTrackWidth(trackRect.width);
        setContentWidth(contentRect.width);
      }
    };

    // Initial measurement
    updateWidths();
    
    // Update measurements on resize
    window.addEventListener('resize', updateWidths);
    return () => window.removeEventListener('resize', updateWidths);
  }, []);

  // Calculate the CSS animation values
  const animationDuration = React.useMemo(() => {
    if (!contentWidth) return 15;
    return (contentWidth / 100) * (40 - Math.min(35, Math.max(5, speed)));
  }, [contentWidth, speed]);

  return (
    <div 
      ref={marqueeRef}
      className={cn("relative overflow-hidden", className)} 
      {...props}
    >
      <div 
        className="flex w-fit whitespace-nowrap"
        style={{
          // Inline animation styles that don't depend on Tailwind config
          animationName: "marquee-scroll",
          animationDuration: `${animationDuration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDirection: direction === "right" ? "reverse" : "normal",
          animationPlayState: "running",
          // Reserve space for the real content
          minWidth: "100%",
        }}
        onMouseEnter={pauseOnHover ? (e) => {
          e.currentTarget.style.animationPlayState = "paused";
        } : undefined}
        onMouseLeave={pauseOnHover ? (e) => {
          e.currentTarget.style.animationPlayState = "running";
        } : undefined}
      >
        {/* First element is our measurement reference */}
        <div ref={contentRef} className="flex">
          {React.Children.map(children, (child, index) => (
            <div key={`origin-${index}`} className="flex-shrink-0">
              {child}
            </div>
          ))}
        </div>
        
        {/* Additional copies to ensure we never run out */}
        {contentCopies}
      </div>

      {/* Global styles that create the animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${contentWidth}px);
          }
        }
      `}} />
    </div>
  );
}