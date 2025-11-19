"use client";

import { useState, useEffect } from "react";
import LogoTransition from "./LogoTransition";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isInitialLoading, setIsInitialLoading] = useState(true); // Enabled for initial load
  const [showContent, setShowContent] = useState(false); // Hide content initially

  // Fallback: ensure loading screen never gets stuck
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      console.log('Fallback: forcing initial loading to complete');
      setIsInitialLoading(false);
      setShowContent(true);
    }, 3000); // 3 second maximum

    return () => clearTimeout(fallbackTimer);
  }, []);

  const handleInitialLoadingComplete = () => {
    console.log('Initial loading completed');
    setIsInitialLoading(false);
    setShowContent(true);
  };

  return (
    <>
      <LogoTransition 
        isVisible={isInitialLoading} 
        onComplete={handleInitialLoadingComplete}
        duration={2.0}
      />
      <div style={{ 
        opacity: showContent ? 1 : 0, 
        transition: "opacity 0.4s ease-in-out",
        width: "100%",
        height: "100%"
      }}>
        {children}
      </div>
    </>
  );
}
