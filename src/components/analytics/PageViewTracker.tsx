"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // In a real app, you would send this to your analytics backend
    console.log(`Page view tracked for: ${pathname}`);
    
    // Example:
    // fetch('/api/track-view', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ path: pathname, timestamp: new Date().toISOString() }),
    // });

  }, [pathname]);

  return null; // This component doesn't render anything
}
