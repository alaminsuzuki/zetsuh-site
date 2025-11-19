"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import AlbumModal from "@/components/AlbumModal";
import type { Album } from "@/types";
import { ALBUM_DATA } from "@/constants";

export default function HomeContent() {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

  const openModal = (album: Album) => {
    setSelectedAlbum(album);
  };

  const closeModal = () => {
    setSelectedAlbum(null);
  };

  return (
    <>
      <motion.section
        className="section hero-section"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
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
      </motion.section>

      <AnimatedSection className="section" delay={0.1}>
        <h2 className="section-heading">music</h2>
        <div className="music-grid">
          {ALBUM_DATA.map((cover) => (
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
    </>
  );
}
