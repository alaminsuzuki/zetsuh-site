"use client";

import Image from "next/image";
import { useState } from "react";
import PageShell from "@/components/PageShell";
import AnimatedSection from "@/components/AnimatedSection";
import AlbumModal from "@/components/AlbumModal";

const albumCovers = [
  {
    id: "killallinfluencers",
    src: "/assets/cover/cover-1.jpg",
    alt: "KILLALLINFLUENCERS album artwork",
    title: "KILLALLINFLUENCERS",
    year: "2023",
    description: "KILLALLINFLUENCERS (2023) is a raw, experimental alternative hip-hop project exploring digital identity, self-image, and modern chaos.",
    links: [
      { label: "Listen Now", url: "https://linktree.com/zetsuh98" },
    ],
  },
  {
    id: "onaka-suita",
    src: "/assets/cover/cover-2.png",
    alt: "Onaka Suita album artwork",
    title: "Onaka Suita",
    year: "2024",
    description: "Onaka Suita (2024) blends melodic rap, Japanese cultural influences, and introspective storytelling into a more emotional, personal project.",
    links: [
      { label: "Listen Now", url: "https://linktree.com/zetsuh98" },
    ],
  },
];

export default function Home() {
  const [selectedAlbum, setSelectedAlbum] = useState<typeof albumCovers[0] | null>(null);

  const openModal = (album: typeof albumCovers[0]) => {
    setSelectedAlbum(album);
  };

  const closeModal = () => {
    setSelectedAlbum(null);
  };

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
            <div className="music-grid__item" key={cover.id}>
              <button
                onClick={() => openModal(cover)}
                className="music-grid__link"
                aria-label={`Open ${cover.title} details`}
              >
                <Image
                  src={cover.src}
                  alt={cover.alt}
                  width={400}
                  height={480}
                  className="poster-image"
                  sizes="(max-width: 600px) 100vw, 240px"
                />
              </button>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {selectedAlbum && (
        <AlbumModal
          isOpen={!!selectedAlbum}
          onClose={closeModal}
          title={selectedAlbum.title}
          description={selectedAlbum.description}
          links={selectedAlbum.links}
          coverImage={{
            src: selectedAlbum.src,
            alt: selectedAlbum.alt,
          }}
        />
      )}

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
