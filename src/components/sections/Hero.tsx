"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Trophy } from "lucide-react";
import Image from "next/image";

import { useState, useEffect } from "react";
import updatesInitialData from "@/data/updates.json";

export default function Hero() {
  const updates = updatesInitialData;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-warm pt-48 pb-20 px-6">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(107,122,61,0.05),transparent_70%)]" />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-24 -right-24 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-primary/10 px-5 py-2.5 rounded-full mb-8 shadow-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">{updates.announcement}</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-poppins font-bold leading-[1.05] mb-8 tracking-tight text-primary-deep">
            A Legacy of <br />
            <span className="text-accent italic font-medium">Academic Excellence</span>
          </h1>

          <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-xl leading-relaxed font-inter font-medium">
            {updates.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#contact" className="btn-primary flex items-center justify-center gap-3 text-lg group">
              Book Free Assessment
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#courses" className="btn-secondary flex items-center justify-center gap-3 text-lg">
              Explore Programs
            </a>
          </div>

          <div className="mt-16 flex items-center gap-8 border-t border-primary/10 pt-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                <ShieldCheck size={28} />
              </div>
              <div>
                <p className="text-sm font-bold text-primary-deep leading-tight">ISO Certified</p>
                <p className="text-xs text-text-secondary uppercase tracking-widest font-bold">9001:2015</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center text-accent">
                <Trophy size={28} />
              </div>
              <div>
                <p className="text-sm font-bold text-primary-deep leading-tight">5+ Years</p>
                <p className="text-xs text-text-secondary uppercase tracking-widest font-bold">Legacy</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[16px] border-white/80 backdrop-blur-sm group">
            <div className="aspect-[4/5] relative">
              <Image
                src="/images/pexels-shootsaga-31447794.jpg"
                alt="Children Learning at Pelican Academy"
                fill
                priority
                loading="eager"
                className="object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary-deep/10 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/40 to-transparent" />
              
              {/* Premium Floating Badge */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 -right-12 bg-white/95 backdrop-blur-md p-6 rounded-[2rem] shadow-2xl flex items-center gap-4 border border-primary/5"
              >
                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-white shadow-lg shadow-accent/20">
                  <Star size={28} className="fill-current" />
                </div>
                <div>
                  <p className="text-[10px] text-text-secondary font-bold uppercase tracking-[0.2em] mb-1">Global Standard</p>
                  <p className="text-primary-deep font-poppins font-bold text-lg leading-tight">World Class <br />Academy</p>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Scandinavian Aesthetic Shapes */}
          <div className="absolute -top-16 -right-16 w-64 h-64 border-2 border-accent/20 rounded-full -z-10" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/5 rounded-full -z-10 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
