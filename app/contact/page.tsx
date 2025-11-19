import Image from "next/image";
import PageShell from "@/components/PageShell";
import AnimatedSection from "@/components/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Zetsuh - Get in Touch",
  description: "Contact Zetsuh for collaborations, bookings, and inquiries. Reach out to the alternative hip-hop artist and producer.",
  openGraph: {
    type: "website",
    url: "https://zetsuh-site.vercel.app/contact",
    title: "Contact Zetsuh - Get in Touch",
    description: "Contact Zetsuh for collaborations, bookings, and inquiries. Reach out to the alternative hip-hop artist and producer.",
    images: [
      {
        url: "/assets/gifs/contact.gif",
        width: 900,
        height: 600,
        alt: "Animated contact visual",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <PageShell currentPage="contact">
      <AnimatedSection className="section">
        <a className="email-link" href="mailto:zetsuhraps@gmail.com">
          zetsuhraps@gmail.com
        </a>

        <Image
          src="/assets/gifs/contact.gif"
          alt="Animated contact visual"
          className="gif-image"
          width={900}
          height={600}
          unoptimized
          sizes="(max-width: 600px) 100vw, 420px"
        />
      </AnimatedSection>
    </PageShell>
  );
}

