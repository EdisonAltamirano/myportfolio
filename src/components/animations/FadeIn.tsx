"use client";

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: string;
  duration?: string;
  as?: React.ElementType;
  threshold?: number;
  triggerOnce?: boolean;
}

export function FadeIn({
  children,
  className,
  delay = '',
  duration = 'duration-300',
  as: Component = 'div',
  threshold = 0.12,
  triggerOnce = true,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (triggerOnce && elementRef.current) observer.unobserve(elementRef.current);
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    const node = elementRef.current;
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, [threshold, triggerOnce]);

  return (
    <Component
      ref={elementRef}
      className={cn(
        'transition-all ease-out will-change-transform',
        duration,
        delay,
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
        className
      )}
    >
      {children}
    </Component>
  );
}
