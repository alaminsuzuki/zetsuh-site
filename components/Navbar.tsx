import Image from "next/image";
import Link from "next/link";

export type NavPage = "home" | "about" | "contact";

const activeHrefMap: Record<NavPage, string> = {
  home: "/",
  about: "/about",
  contact: "/contact",
};

const cx = (base: string, active: boolean) =>
  active ? `${base} nav-link--active` : base;

type NavbarProps = {
  currentPage: NavPage;
};

const Navbar = ({ currentPage }: NavbarProps) => {
  const isActiveHref = (href: string) => activeHrefMap[currentPage] === href;

  return (
    <nav className="navbar">
      <Link
        href="/contact"
        className={cx("nav-link", isActiveHref("/contact"))}
        aria-current={isActiveHref("/contact") ? "page" : undefined}
      >
        contact
      </Link>

      <Link
        href="/"
        className={cx("nav-logo", currentPage === "home")}
        aria-current={currentPage === "home" ? "page" : undefined}
      >
        <Image
          src="/assets/logos/zetsuh-logo.svg"
          alt="Zetsuh logo"
          width={160}
          height={48}
          priority
        />
      </Link>

      <Link
        href="/about"
        className={cx("nav-link", isActiveHref("/about"))}
        aria-current={isActiveHref("/about") ? "page" : undefined}
      >
        about
      </Link>
    </nav>
  );
};

export default Navbar;

