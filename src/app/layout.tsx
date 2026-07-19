import type { Metadata, ResolvingMetadata, Viewport } from 'next';
import { rajdhani, nunito, jetbrainsMono } from '@/lib/fonts';
import { officialWebsiteUrl } from '@/lib/constants';
import './globals.css';
import { ThemeProvider } from '@/components/core/ThemeProvider';
import { Toaster } from "@/components/ui/toaster";

type Props = {
  children: React.ReactNode;
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export async function generateMetadata(
  _: unknown,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const previousMetadata = await parent;

  const baseMetadata = {
    title: "Edison Altamirano | Stanford EE | VLSI & AI Research",
    description:
      "Portfolio of Edison Ricardo Altamirano Avila | Stanford Electrical Engineering MS researcher at Arbabian Lab (radar sensors, multimodal AI), VLSI chip designer, robotics engineer, and full-stack innovator.",
    metadataBase: new URL(officialWebsiteUrl),
    alternates: {
      canonical: officialWebsiteUrl,
    },
    openGraph: {
      title: "Edison Altamirano | Stanford EE | VLSI & AI Research",
      description:
        "Stanford EE researcher specializing in radar sensors, VLSI chip design at TSMC, and multimodal AI systems.",
      type: "website" as const,
      url: officialWebsiteUrl,
      locale: "en_US",
      siteName: "Edison Altamirano",
    },
    twitter: {
      card: "summary_large_image" as const,
      title: "Edison Altamirano | Stanford EE | VLSI & AI Research",
      description:
        "Stanford EE researcher specializing in radar sensors, VLSI chip design at TSMC, and multimodal AI systems.",
    },
  };

  return {
    ...baseMetadata,
    openGraph: {
      ...baseMetadata.openGraph,
      images: [...(previousMetadata.openGraph?.images || [])],
    },
  };
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${rajdhani.variable} ${nunito.variable} ${jetbrainsMono.variable} font-body antialiased`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
