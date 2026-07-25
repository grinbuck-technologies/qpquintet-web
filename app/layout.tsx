import type { Metadata } from "next";
import { Public_Sans, Cormorant_Garamond, Noto_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { siteConfig } from "@/lib/site-config";

const publicSans = Public_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/** Reserved for the live "QP" wordmark mark, matching the Cormorant Garamond + red gradient baked into /public/logo. */
const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-wordmark",
  subsets: ["latin"],
  weight: ["600"],
});

/** Used for section eyebrow labels (e.g. POSITIONING, FOCUS AREAS) — bolder and more structural than the body font. */
const notoSans = Noto_Sans({
  variable: "--font-label",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono-data",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

/** Root App Router layout: fonts, smooth scroll, and the shared header/footer chrome. */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${cormorantGaramond.variable} ${notoSans.variable} ${ibmPlexMono.variable} min-h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
