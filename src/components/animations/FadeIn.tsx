"use client";

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: string; // e.g., 'delay-200'
  duration?: string; // e.g., 'duration-500'
  as?: React.ElementType;
  threshold?: number;
  triggerOnce?: boolean;
}

export function FadeIn({
  children,
  className,
  delay = '',
  duration = 'duration-700',
  as: Component = 'div',
  threshold = 0.1,
  triggerOnce = true,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce && elementRef.current) {
              observer.unobserve(elementRef.current);
            }
          } else if (!triggerOnce) {
             setIsVisible(false);
          }
        });
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, triggerOnce]);

  return (
    <Component
      ref={elementRef}
      className={cn(
        'transition-all ease-out',
        duration,
        delay,
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        className
      )}
    >
      {children}
    </Component>
  );
}
