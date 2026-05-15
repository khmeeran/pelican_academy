"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Admissions Open 2024-25</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight text-primary-deep">
            Empowering Young Minds Through <span className="gradient-text">Smart Learning</span>
          </h1>

          <p className="text-lg md:text-xl text-primary/70 mb-10 max-w-xl leading-relaxed">
            ISO 9001:2015 Certified premium educational ecosystem specializing in creative skill development for children in Chengalpattu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-background-warm px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 premium-shadow hover:bg-primary-deep transition-all"
            >
              Enroll Now
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#franchise"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-2 border-primary/10 text-primary px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-background-warm transition-all"
            >
              Franchise Inquiry
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white/50 backdrop-blur-sm">
            <div className="aspect-[4/5] relative group">
              <Image
                src="/images/pexels-shootsaga-31447794.jpg"
                alt="Children Learning at Pelican Academy"
                fill
                priority
                className="object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/40 to-transparent" />
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-primary/10"
              >
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-background-warm">
                  <Star size={20} className="fill-current" />
                </div>
                <div>
                  <p className="text-xs text-primary/50 font-bold uppercase tracking-wider">Quality</p>
                  <p className="text-primary-deep font-bold">ISO 9001:2015</p>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Decorative shapes */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-full -z-10 blur-2xl opacity-20" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary rounded-full -z-10 blur-3xl opacity-10" />
        </motion.div>
      </div>
    </section>
  );
}
