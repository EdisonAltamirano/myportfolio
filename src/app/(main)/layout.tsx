import { Footer } from "@/components/core/Footer";
import { Header } from "@/components/core/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full min-w-0 flex-col overflow-x-hidden">
      <Header />
      <main className="min-w-0 w-full flex-1 pt-16"> {/* pt-16 to offset fixed header height (approx 4rem or 64px) */}
        {children}
      </main>
      <Footer />
    </div>
  );
}
