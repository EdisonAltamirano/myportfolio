import { Geist, Geist_Mono } from 'next/font/google';

export const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

// Legacy aliases used across the app. Keep them so existing imports remain stable.
export const rajdhani = geistSans;
export const nunito = geistSans;
export const jetbrainsMono = geistMono;
export const inter = geistSans;
export const robotoMono = geistMono;
