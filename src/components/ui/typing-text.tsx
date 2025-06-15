'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TypingTextProps {
  texts: string[];
  className?: string;
  cursorClassName?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  highlightFirstWord?: boolean;
}

export function TypingText({
  texts,
  className,
  cursorClassName,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
  highlightFirstWord = true,
}: TypingTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      }
    } else {
      const currentText = texts[currentIndex];
      if (displayText === currentText) {
        setIsPaused(true);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isPaused, texts, currentIndex, typingSpeed, deletingSpeed, pauseTime]);

  const renderText = () => {
    if (!highlightFirstWord) return displayText;

    const words = displayText.split(' ');
    const firstWord = words[0];
    const restOfText = words.slice(1).join(' ');

    return (
      <>
        <span className="text-primary">{firstWord}</span>
        {restOfText && <span className="text-muted-foreground"> {restOfText}</span>}
      </>
    );
  };

  return (
    <span className={cn('inline-flex items-center', className)}>
      {renderText()}
      <span
        className={cn(
          'ml-[1px] inline-block h-[1em] w-[2px] animate-blink bg-current',
          cursorClassName
        )}
      />
    </span>
  );
} 