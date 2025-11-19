"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

interface LogoTransitionProps {
  isVisible: boolean;
  onComplete?: () => void;
  duration?: number;
}

export default function LogoTransition({ 
  isVisible, 
  onComplete, 
  duration = 1.5 
}: LogoTransitionProps) {
  console.log('LogoTransition render:', { isVisible, duration });
  
  // Use useEffect to handle completion timing instead of animation callbacks
  useEffect(() => {
    if (isVisible) {
      console.log('LogoTransition started, scheduling completion in', duration * 1000, 'ms');
      const timer = setTimeout(() => {
        console.log('LogoTransition calling onComplete');
        onComplete?.();
      }, duration * 1000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onComplete]);
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="logo-transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
        >
          <div className="logo-transition__content">
            <motion.div
              className="logo-transition__logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut",
                delay: 0.1 
              }}
            >
              <Image
                src="/assets/logos/zetsuh-logo.svg"
                alt="Zetsuh logo"
                width={200}
                height={60}
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
