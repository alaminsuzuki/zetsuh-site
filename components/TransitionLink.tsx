"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import LogoTransition from "./LogoTransition";

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  "aria-current"?: "page" | undefined;
}

export default function TransitionLink({ href, children, className, ...props }: TransitionLinkProps) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Fallback: ensure transition state is reset if something goes wrong
  useEffect(() => {
    if (isTransitioning) {
      const fallbackTimer = setTimeout(() => {
        console.log('Fallback: forcing transition state reset');
        setIsTransitioning(false);
      }, 2000); // 2 second fallback

      return () => clearTimeout(fallbackTimer);
    }
  }, [isTransitioning]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    console.log('TransitionLink clicked:', href);
    setIsTransitioning(true);
    
    // Navigate immediately but show logo transition to cover the change
    setTimeout(() => {
      console.log('Navigating to:', href);
      router.push(href);
      
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    }, 200); // Much shorter delay - just enough for logo to appear
    
    // Reset transition state after logo animation completes
    setTimeout(() => {
      console.log('Resetting transition state');
      setIsTransitioning(false);
    }, 1200);
  };

  return (
    <>
      <LogoTransition 
        isVisible={isTransitioning} 
        onComplete={() => setIsTransitioning(false)}
        duration={1.0}
      />
      <Link 
        href={href} 
        className={className}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Link>
    </>
  );
}
