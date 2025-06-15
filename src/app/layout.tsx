import type { Metadata, ResolvingMetadata } from 'next';
import { inter, robotoMono } from '@/lib/fonts';
import './globals.css';
import { ThemeProvider } from '@/components/core/ThemeProvider';
import { Toaster } from "@/components/ui/toaster";

type Props = {
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Get parent metadata
  const previousMetadata = await parent

  // Define base metadata
  const baseMetadata = {
    title: "Edison's Lab - Full-Stack Innovator",
    description: 'Portfolio of Edison Ricardo Altamirano Avila, a robotics engineer turned full-stack innovator, showcasing projects in autonomous systems, AI, robotics, and enterprise applications.',
    openGraph: {
      title: "Edison's Lab - Full-Stack Innovator",
      description: 'Portfolio of Edison Ricardo Altamirano Avila, a robotics engineer turned full-stack innovator, showcasing projects in autonomous systems, AI, robotics, and enterprise applications.',
      type: 'website',
      locale: 'en_US',
      siteName: "Edison's Lab",
    },
    twitter: {
      card: 'summary_large_image',
      title: "Edison's Lab - Full-Stack Innovator",
      description: 'Portfolio of Edison Ricardo Altamirano Avila, a robotics engineer turned full-stack innovator, showcasing projects in autonomous systems, AI, robotics, and enterprise applications.',
    },
  }

  // Merge with parent metadata if needed
  return {
    ...baseMetadata,
    openGraph: {
      ...baseMetadata.openGraph,
      images: [...(previousMetadata.openGraph?.images || [])],
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoMono.variable} font-sans antialiased`} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light" // Ensure light mode is forced
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
