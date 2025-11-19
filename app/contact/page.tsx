import Image from "next/image";
import PageShell from "@/components/PageShell";
import AnimatedSection from "@/components/AnimatedSection";

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

