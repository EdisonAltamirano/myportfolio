import type { Metadata } from 'next';
import { inter, robotoMono } from '@/lib/fonts';
import './globals.css';
import { ThemeProvider } from '@/components/core/ThemeProvider';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Edison's Lab - Full-Stack Innovator",
  description: 'Portfolio of Edison Ricardo Altamirano Avila, a roboticsengineer turned full-stack innovator, showcasing projects in autonomous systems, AI, robotics, and enterprise applications.',
};

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
