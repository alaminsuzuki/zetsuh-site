import type { Metadata } from "next";
import "./globals.css";
import { adrip, spaceGrotesk } from "./fonts";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Zetsuh - Alternative Hip Hop Artist & Producer",
  description: "Official site for Zetsuh - Alternative R&B/hip-hop artist, producer, and creative genius specializing in versatility and adaptability. Listen to KILLALLINFLUENCERS and Onaka Suita.",
  keywords: ["Zetsuh", "alternative hip hop", "R&B", "producer", "artist", "KILLALLINFLUENCERS", "Onaka Suita", "Japanese", "Nigerian", "music"],
  authors: [{ name: "Zetsuh" }],
  creator: "Zetsuh",
  publisher: "Zetsuh",
  metadataBase: new URL("https://zetsuh.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zetsuh.com",
    siteName: "Zetsuh",
    title: "Zetsuh - Alternative Hip Hop Artist & Producer",
    description: "Official site for Zetsuh - Alternative R&B/hip-hop artist, producer, and creative genius. Listen to KILLALLINFLUENCERS and Onaka Suita.",
    images: [
      {
        url: "/assets/og/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zetsuh - Alternative Hip Hop Artist",
      },
      {
        url: "/assets/logos/zetsuh-logo.svg",
        width: 800,
        height: 400,
        alt: "Zetsuh Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zetsuh - Alternative Hip Hop Artist & Producer",
    description: "Official site for Zetsuh - Alternative R&B/hip-hop artist, producer, and creative genius.",
    images: ["/assets/og/og-image.jpg"],
    creator: "@zetsuh98",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${adrip.variable} ${spaceGrotesk.variable}`}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
