"use client";

import Link from "next/link";
import type { PropsWithChildren } from "react";
import Navbar, { type NavPage } from "./Navbar";
import PageTransition from "./PageTransition";

interface PageShellProps extends PropsWithChildren {
  currentPage: NavPage;
}

const PageShell = ({ children, currentPage }: PageShellProps) => (
  <div className="page-shell">
    <div className="page-shell__inner">
      <Navbar currentPage={currentPage} />
      <PageTransition className="page-shell__content">
        {children}
      </PageTransition>
      <footer className="site-footer">
        <p>zetsuh copyright 2025</p>
        <div className="footer-links">
          <Link href="/">home</Link>
          <Link href="/about">about</Link>
          <Link href="/contact">contact</Link>
        </div>
      </footer>
    </div>
  </div>
);

export default PageShell;

