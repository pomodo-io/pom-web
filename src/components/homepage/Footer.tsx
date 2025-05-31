"use client";
import React from "react";
import { motion, useInView } from "framer-motion"; 
import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-white/10">
    <motion.footer 
      ref={ref}
      className="py-12 px-4"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-white">Pomodo.io</h3>
            <p className="text-white/80">
              Helping students stay accountable and achieve their goals through collaborative study sessions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Features', 'Pricing', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-white/80 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-white">Legal</h3>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-white/80 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              <motion.a 
                href="https://instagram.com" 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white/80 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white/80 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a 
                href="https://twitter.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white/80 hover:text-white transition-colors"
              >
                <Twitter size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 border-t border-white/10 pt-8 text-center"
        >
          <p className="text-white/80">
            © 2025 pomodo.io. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
    </div>
  );
};

export default Footer;