import React, { useEffect } from 'react';
import { cn } from '@/utils';
import { motion, SpringOptions, useSpring, useTransform } from 'motion/react';

export type AnimatedNumberProps = {
  value: number;
  className?: string;
  springOptions?: SpringOptions;
  as?: React.ElementType;
};

export function AnimatedNumber({
  value,
  className,
  springOptions = { stiffness: 100, damping: 30 },
  as = 'span',
}: AnimatedNumberProps) {
  const MotionComponent = motion.create(as);
  
  // Create a spring animation starting from 0
  const spring = useSpring(0, springOptions);
  
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  // When the component mounts or value changes, animate to that value
  useEffect(() => {
    // Small timeout to ensure component is mounted
    const timer = setTimeout(() => {
      spring.set(value);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [spring, value]);

  return (
    <MotionComponent className={cn('tabular-nums', className || '')}>
      {display}
    </MotionComponent>
  );
}
