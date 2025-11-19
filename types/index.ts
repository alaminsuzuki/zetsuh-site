export interface Album {
  id: string;
  src: string;
  alt: string;
  title: string;
  year: string;
  description: string;
  links: Array<{ label: string; url: string }>;
}

export type NavPage = "home" | "about" | "contact";
