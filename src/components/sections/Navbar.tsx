"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About us", href: "/#about" },
  { name: "Our programs", href: "/#courses" },
  { name: "Teacher training programs", href: "/#teacher-training" },
  { name: "Franchisee", href: "/#franchise" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Utility Bar */}
      <div className={cn(
        "fixed top-0 left-0 right-0 z-[60] bg-primary-deep text-white/80 py-2 px-6 hidden md:block transition-transform duration-500",
        scrolled ? "-translate-y-full" : "translate-y-0"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] font-bold tracking-[0.2em] uppercase">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent" />
              ISO 9001:2015 Certified
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent" />
              10+ Years Legacy
            </span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Student Login</a>
            <a href="#" className="hover:text-accent transition-colors border-l border-white/20 pl-6">Franchise Portal</a>
          </div>
        </div>
      </div>

      <nav
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-500 px-6",
          scrolled ? "top-0 bg-primary shadow-xl py-4" : "top-0 md:top-10 bg-transparent py-6"
        )}
      >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/#home" className="flex items-center gap-4 group">
          <div className={cn(
            "relative overflow-hidden rounded-2xl transition-all duration-500 group-hover:scale-105 shadow-md",
            scrolled ? "w-16 h-12" : "w-20 h-16 md:w-28 md:h-20"
          )}>
            <Image
              src="/logo.jpeg"
              alt="Pelican Academy Logo"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-poppins font-bold leading-none tracking-tighter transition-all duration-500",
              scrolled ? "text-xl text-white" : "text-3xl md:text-4xl text-primary-deep"
            )}>PELICAN</span>
            <span className={cn(
              "font-inter font-black tracking-[0.3em] uppercase transition-all duration-500",
              scrolled ? "text-[8px] text-accent" : "text-xs md:text-sm text-primary/80"
            )}>Academy</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "relative text-sm font-bold uppercase tracking-widest transition-colors duration-300 group",
                scrolled ? "text-white/80 hover:text-white" : "text-primary-deep/80 hover:text-primary"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <a
            href="tel:+919994048827"
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 shadow-lg hover:scale-105 active:scale-95",
              scrolled ? "bg-accent text-primary-deep" : "bg-primary text-white"
            )}
          >
            <Phone size={16} />
            <span>ENROLL NOW</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn(
            "md:hidden p-2 rounded-lg transition-colors",
            scrolled ? "text-white" : "text-primary-deep"
          )} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="md:hidden fixed inset-0 z-[60] bg-primary text-white overflow-hidden"
          >
            <div className="flex flex-col h-full p-8 pt-24 gap-8">
              <button 
                className="absolute top-8 right-8 text-white/60 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <X size={32} />
              </button>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-poppins font-bold hover:text-accent transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-auto"
              >
                <a
                  href="tel:+919994048827"
                  className="flex items-center justify-center gap-3 bg-accent text-primary-deep px-8 py-5 rounded-2xl text-xl font-bold shadow-2xl"
                >
                  <Phone size={24} />
                  <span>Call Us Today</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
}
