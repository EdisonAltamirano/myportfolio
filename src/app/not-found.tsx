import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-circuit px-4 py-24">
      <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center rounded-2xl border border-black/10 bg-white/[0.82] p-8 text-center shadow-sm shadow-black/5 backdrop-blur-sm">
        <p className="eyebrow">404</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-6xl">
          This page is not available.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
          The portfolio section you requested may have moved, or the link may be incomplete.
        </p>
        <Link
          href="/projects"
          className="mt-8 inline-flex items-center rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-black/20 hover:bg-black/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to projects
        </Link>
      </section>
    </main>
  );
}
