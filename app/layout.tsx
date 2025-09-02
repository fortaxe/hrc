import type { Metadata } from "next";
import { Poppins, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Footer from "@/components/ui/footer";
import ConditionalHeader from "@/components/landing/ConditionalHeader";

import MobileDock from "@/components/mobile-dock";

const geistSans = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerifItalic = Instrument_Serif({
  weight: "400", // the only weight this family has
  style: "italic", // switch to the italic face
  subsets: ["latin"],
  variable: "--font-instrument-serif-italic", // optional—but handy for Tailwind
  display: "swap",
});

export const metadata: Metadata = {
  title: "HRC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Best Digital Marketing Website, SEO, Website Optimization, App Development, AI Agents Integration, and more",
    description:
      "We provide the best digital marketing services for your business. Our team of experts will help you improve your online presence and drive traffic to your website.",
    url: "https://www.digitalstudiousa.com",
    logo: "/logo.svg",
  };
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
        <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml" />
      </head>

      {/* ✅ Google Analytics Scripts */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-EJSELH2F5C"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EJSELH2F5C');
          `}
      </Script>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js"
        strategy="beforeInteractive"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerifItalic.variable}  antialiased bg-black`}
      >
        <ConditionalHeader />
        {children}
        <Footer />
        {/* <MobileDock /> */}
      </body>
    </html>
  );
}
