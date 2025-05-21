import { AnalyticsChart } from '@/components/analytics/AnalyticsChart';
import { siteName } from '@/lib/constants';
import { PageViewTracker } from '@/components/analytics/PageViewTracker';

export function Footer() {
  return (
    <footer className="bg-muted/50 dark:bg-neutral-800/50 text-muted-foreground py-12">
      <PageViewTracker />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Edison's Lab</h3>
            <p className="text-sm">
              Innovating at the intersection of hardware and software. Explore my journey from robotics engineering to full-stack development and AI.
            </p>
            {/* Placeholder for social links */}
            {/* <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-primary"><Github size={20} /></a>
              <a href="#" className="hover:text-primary"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-primary"><Twitter size={20} /></a>
            </div> */}
          </div>
          <div className="max-w-md ml-auto">
             <AnalyticsChart />
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {siteName}. All rights reserved.</p>
          <p className="mt-1">Designed with passion and Next.js.</p>
        </div>
      </div>
    </footer>
  );
}
