import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";

export const adrip = localFont({
  src: "../public/fonts/adrip1.ttf",
  variable: "--font-adrip",
  weight: "400",
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
