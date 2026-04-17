import type { Metadata } from "next";
import { Syne, Epilogue, Plus_Jakarta_Sans, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import ScrollReset from "@/components/ScrollReset";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-epilogue",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://velnextech.com"),
  title: {
    default: "VelnexTech — Software Development Company | SaaS & AI Solutions",
    template: "%s | VelnexTech",
  },
  description:
    "VelnexTech builds custom software, SaaS products, and AI agents for enterprises and startups. Full-service software development company in India serving clients globally.",
  keywords: [
    "software development company india",
    "custom software development",
    "saas development company",
    "ai agents development",
    "enterprise software solutions",
    "mobile app development india",
    "software company faridabad",
    "it company haryana india",
  ],
  authors: [{ name: "VelnexTech", url: "https://velnextech.com" }],
  creator: "VelnexTech — Shivnetra Computers Pvt. Ltd.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://velnextech.com",
    siteName: "VelnexTech",
    title: "VelnexTech — Build. Launch. Dominate.",
    description:
      "Full-service software development: Custom software, SaaS, AI agents, mobile apps. Trusted by 50+ companies across 12 countries.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "VelnexTech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VelnexTech — Software Development Company",
    description: "Custom software, SaaS products, and AI agents for enterprises and startups.",
    creator: "@velnextech",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${syne.variable} ${epilogue.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <ScrollReset />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[var(--electric)] focus:text-white focus:rounded"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
