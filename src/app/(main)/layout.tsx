import { Footer } from "@/components/core/Footer";
import { Header } from "@/components/core/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-16"> {/* pt-16 to offset fixed header height (approx 4rem or 64px) */}
        {children}
      </main>
      <Footer />
    </div>
  );
}
