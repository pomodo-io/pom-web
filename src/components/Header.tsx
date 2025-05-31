'use client';

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#7a9bc7] relative z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-6">
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

        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden items-center gap-8 md:flex"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {['About', 'Pricing', 'Support'].map((item, index) => (
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

        {/* Desktop Auth Buttons */}
        <motion.div 
          className="hidden md:flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/signin"
              className="px-4 py-2 text-white transition-colors hover:text-white/80"
            >
              Sign in
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/register"
              className="px-4 py-2 bg-white text-[#7a9bc7] rounded-md font-medium transition-colors hover:bg-white/90"
            >
              Sign up
            </Link>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Menu size={24} />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 bg-[#5477a5] shadow-lg md:hidden z-50"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex justify-between items-center p-6 border-b border-white/10">
                  <span className="text-white font-medium">Menu</span>
                  <motion.button
                    className="text-white p-2"
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                {/* Mobile Menu Items */}
                <div className="flex flex-col p-6 gap-6">
                  {['About', 'Pricing', 'Support'].map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ scale: 1.05, x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={`/${item.toLowerCase().replace(' ', '')}`}
                        className="text-white text-lg font-medium transition-colors hover:text-white/80"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Auth Buttons */}
                <div className="mt-auto p-6 border-t border-white/10">
                  <div className="flex flex-col gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href="/signin"
                        className="block w-full text-center px-4 py-2 text-white transition-colors hover:text-white/80"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Sign in
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href="/register"
                        className="block w-full text-center px-4 py-2 bg-white text-[#7a9bc7] rounded-md font-medium transition-colors hover:bg-white/90"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Sign up
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
} 