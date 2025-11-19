import type { Metadata } from "next";
import "./globals.css";
import { adrip, spaceGrotesk } from "./fonts";

export const metadata: Metadata = {
  title: "Zetsuh",
  description: "Official site for Zetsuh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${adrip.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
