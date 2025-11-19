import Image from "next/image";
import Link from "next/link";
import TransitionLink from "./TransitionLink";
import type { NavPage } from "@/types";

export type { NavPage };

const ACTIVE_HREF_MAP: Record<NavPage, string> = {
  home: "/",
  about: "/about",
  contact: "/contact",
} as const;

const classNames = (base: string, active: boolean): string =>
  active ? `${base} nav-link--active` : base;

type NavbarProps = {
  currentPage: NavPage;
};

export default function Navbar({ currentPage }: NavbarProps) {
  const isActiveHref = (href: string): boolean => 
    ACTIVE_HREF_MAP[currentPage] === href;

  return (
    <nav className="navbar">
      <TransitionLink
        href="/contact"
        className={classNames("nav-link", isActiveHref("/contact"))}
        aria-current={isActiveHref("/contact") ? "page" : undefined}
      >
        contact
      </TransitionLink>

      <TransitionLink
        href="/"
        className={classNames("nav-logo", currentPage === "home")}
        aria-current={currentPage === "home" ? "page" : undefined}
      >
        <Image
          src="/assets/logos/zetsuh-logo.svg"
          alt="Zetsuh logo"
          width={160}
          height={48}
          priority
        />
      </TransitionLink>

      <TransitionLink
        href="/about"
        className={classNames("nav-link", isActiveHref("/about"))}
        aria-current={isActiveHref("/about") ? "page" : undefined}
      >
        about
      </TransitionLink>
    </nav>
  );
}

