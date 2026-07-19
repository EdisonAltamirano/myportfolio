"use client";

import { useEffect } from 'react';
import { RotateCcw } from 'lucide-react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-circuit px-4 py-24">
      <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center rounded-2xl border border-black/10 bg-white/[0.82] p-8 text-center shadow-sm shadow-black/5 backdrop-blur-sm">
        <p className="eyebrow">Error state</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-6xl">
          Something went wrong.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
          The page failed to load cleanly. You can retry the render or return to another section.
        </p>
        <button
          onClick={reset}
          className="mt-8 inline-flex items-center rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.01] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Try again
        </button>
      </section>
    </main>
  );
}
