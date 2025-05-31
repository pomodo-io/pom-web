'use client';

import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { Montserrat } from "next/font/google"; 
import { motion } from "framer-motion"; 
import { ShimmerButton } from "~/components/magicui/shimmer-button";
import { useEffect, useState } from "react";

// Initialize Montserrat with desired weights and subsets
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // 400 for paragraph, 500 for button, 700 for heading
});

export default function Home() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#7a9bc7] relative overflow-hidden">
      {/* Animated background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-50" />
      </motion.div>

      <header className="container mx-auto flex items-center justify-between px-4 py-6 relative z-10">
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image src="/POM-Logo.svg" alt="Pomodo.io Logo" width={50} height={50} className="mt-2" />
          <span className="text-2xl font-bold text-white drop-shadow-lg">pomodo.io</span>
        </motion.div>

        <motion.nav 
          className="hidden items-center gap-8 md:flex"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {['Register', 'Sign in', 'About', 'Pricing'].map((item, index) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={`/${item.toLowerCase().replace(' ', '')}`}
                className="text-white transition-colors hover:text-white/80"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        <motion.div 
          className="flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
            <Link
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-white transition-colors hover:text-white/80"
            >
              <Instagram size={20} />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotate: -5 }} whileTap={{ scale: 0.9 }}>
            <Link
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="text-white transition-colors hover:text-white/80"
            >
              <Linkedin size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </header>

      <main className="container mx-auto flex flex-col items-center px-4 py-16 lg:flex-row lg:py-24 relative z-10">
        <motion.div
          className={`mb-10 text-center lg:mb-0 lg:w-1/2 lg:text-left ${montserrat.className}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.h1 
            className="text-5xl font-medium leading-tight tracking-wide text-white drop-shadow-lg md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            KEEP YOURSELF
          </motion.h1>
          <motion.h1 
            className="text-5xl font-bold leading-tight tracking-wide text-white drop-shadow-lg md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            ACCOUNTABLE
          </motion.h1>
          <motion.p 
            className="mx-auto mt-4 mb-8 max-w-lg text-xl text-white drop-shadow-md md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            A tool to get you connected with like minded individuals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <ShimmerButton 
              className="mx-auto lg:mx-0 text-lg font-bold text-white"
              shimmerColor="#ffffff"
              background="#8cd672"
            >
              New Study Session +
            </ShimmerButton>
          </motion.div>
        </motion.div>
        <motion.div 
          className="flex items-center justify-center w-full lg:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px]">
            <motion.div 
              className="absolute inset-0 rounded-full bg-white mb-10 ml-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: 1 
              }}
              transition={{ 
                opacity: {
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 1.5
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 2
                }
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: [0, -10, 0]
              }}
              transition={{ 
                opacity: {
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 1
                },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 2
                }
              }}
            >
              <Image
                src="/POM-Home-Studying-v3.svg"
                alt="Student studying with laptop"
                width={800}
                height={800}
                className="relative z-10 h-auto w-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
