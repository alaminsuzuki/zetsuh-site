import type { Album } from "@/types";

export const ALBUM_DATA: Album[] = [
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

export const SITE_CONFIG = {
  name: "Zetsuh",
  description: "Official site for Zetsuh - Alternative R&B/hip-hop artist, producer, and creative genius.",
  url: "https://zetsuh.com",
  ogImage: "/assets/og/og-image.jpg",
  links: {
    linktree: "https://linktree.com/zetsuh98",
  },
} as const;
