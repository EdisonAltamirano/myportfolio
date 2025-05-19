import type { Metadata } from 'next';
import { inter, robotoMono } from '@/lib/fonts';
import './globals.css';
import { ThemeProvider } from '@/components/core/ThemeProvider';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Edison's Lab - Full-Stack Innovator",
  description: 'Portfolio of Edison Ricardo Altamirano Avila, a mechanical-electrical engineer turned full-stack innovator, showcasing projects in autonomous systems, AI, robotics, and enterprise applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
