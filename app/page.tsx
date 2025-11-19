import Image from "next/image";
import PageShell from "@/components/PageShell";
import AnimatedSection from "@/components/AnimatedSection";

const albumCovers = [
  {
    src: "/assets/cover/cover-1.jpg",
    alt: "Zetsuh album artwork one",
    href: "https://linktr.ee/zetsuh98",
  },
  {
    src: "/assets/cover/cover-2.png",
    alt: "Zetsuh album artwork two",
    href: "https://linktr.ee/zetsuh98",
  },
];

export default function Home() {
  return (
    <PageShell currentPage="home">
      <AnimatedSection className="section hero-section">
        <div className="hero-row">
          <p className="hero-text">artist • producer • alternative hip hop</p>
          <Image
            src="/assets/hero/hero.jpg"
            alt="Aerial view from above a street crossing"
            className="hero-image"
            width={600}
            height={600}
            priority
            sizes="(max-width: 600px) 100vw, 320px"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection className="section" delay={0.1}>
        <h2 className="section-heading">music</h2>
        <div className="music-grid">
          {albumCovers.map((cover) => (
            <div className="music-grid__item" key={cover.src}>
              <a
                href={cover.href}
                target="_blank"
                rel="noopener noreferrer"
                className="music-grid__link"
                aria-label={`${cover.alt} link`}
              >
                <Image
                  src={cover.src}
                  alt={cover.alt}
                  width={400}
                  height={480}
                  className="poster-image"
                  sizes="(max-width: 600px) 100vw, 240px"
                />
              </a>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section" delay={0.2}>
        <h2 className="section-heading">let&apos;s go</h2>
        <Image
          src="/assets/gifs/homepage.gif"
          alt="Animated glitch art"
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
