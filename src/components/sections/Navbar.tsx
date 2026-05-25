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

  const handleLogoClick = (e: React.MouseEvent) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '/');
    }
  };

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
              5+ Years Legacy
            </span>
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
        <Link href="/#home" onClick={handleLogoClick} className="flex items-center gap-4 group shrink-0">
          <div className={cn(
            "relative transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105",
            scrolled ? "w-16 h-12 brightness-100" : "w-32 h-24 md:w-48 md:h-36 brightness-0"
          )}>
            <Image
              src="/logo-transparent.png"
              alt="Pelican Academy Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className={cn(
            "flex flex-col transition-all duration-700 ease-[0.16,1,0.3,1]",
            scrolled ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 pointer-events-none"
          )}>
            <span className={cn(
              "font-poppins font-black leading-none tracking-tight transition-all duration-500",
              scrolled ? "text-lg text-white" : "text-2xl md:text-3xl text-primary-deep"
            )}>PELICAN</span>
            <span className={cn(
              "font-inter font-bold tracking-[0.4em] uppercase transition-all duration-500",
              scrolled ? "text-[7px] text-accent/90" : "text-[10px] md:text-xs text-accent"
            )}>Academy</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "relative text-xs xl:text-sm font-black uppercase tracking-[0.1em] transition-colors duration-300 group whitespace-nowrap",
                scrolled ? "text-white hover:text-accent" : "text-primary-deep hover:text-primary"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <a
            href="tel:+919994048827"
            className={cn(
              "flex items-center gap-2 px-7 py-3.5 rounded-full text-xs xl:text-sm font-black tracking-widest transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap",
              scrolled ? "bg-accent text-primary-deep" : "bg-primary-deep text-white"
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
