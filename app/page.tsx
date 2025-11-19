import PageShell from "@/components/PageShell";
import HomeContent from "@/components/HomeContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zetsuh - Alternative Hip Hop Artist & Producer",
  description: "Official site for Zetsuh - Alternative R&B/hip-hop artist, producer, and creative genius. Listen to KILLALLINFLUENCERS and Onaka Suita.",
  openGraph: {
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
        url: "/assets/cover/cover-1.jpg",
        width: 400,
        height: 480,
        alt: "KILLALLINFLUENCERS album artwork",
      },
    ],
  },
};

export default function Home() {
  return (
    <PageShell currentPage="home">
      <HomeContent />
    </PageShell>
  );
}
