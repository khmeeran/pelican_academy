"use client";

import { motion } from "framer-motion";
import { Brain, Activity, Zap } from "lucide-react";
import Image from "next/image";

const values = [
  {
    title: "Whole Brain Development",
    description: "Our program stimulates both the left (logical) and right (creative) hemispheres of the brain simultaneously.",
    icon: Brain,
  },
  {
    title: "Visualization Technique",
    description: "Students learn to visualize the abacus, performing complex arithmetic mentally with astonishing speed.",
    icon: Activity,
  },
  {
    title: "Enhanced Concentration",
    description: "The tactile and visual nature of our training drastically improves focus, memory, and recall in children.",
    icon: Zap,
  }
];

import contentData from "@/data/content.json";

export default function About() {
  const { about } = contentData;

  return (
    <section id="about" className="section-spacing bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-background-warm">
              <Image
                src="/images/pexels-bipspatiala-31864391.jpg"
                alt="PELICAN Academy Learning Environment"
                width={800}
                height={600}
                className="object-cover aspect-[4/3]"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full -z-0 blur-3xl" />
            <div className="absolute -top-10 -left-10 w-40 h-40 border-4 border-primary/10 rounded-[3rem] -z-0" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-primary-deep p-8 rounded-[2rem] shadow-2xl z-20 hidden md:block"
            >
              <div className="relative w-20 h-10 mb-2">
                <Image
                  src="/pelican-logo-official-white.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-4xl font-poppins font-bold text-white mb-1">360°</p>
              <p className="text-xs font-bold text-accent tracking-[0.2em] uppercase">Cognitive Growth</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block bg-primary/5 px-4 py-2 rounded-full mb-6">
              <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">{about.badge}</span>
            </div>
            <h2 className="text-5xl font-poppins font-bold text-primary-deep mb-8 leading-tight">
              {about.title} <br />
              <span className="text-accent italic font-medium">{about.titleHighlight}</span>
            </h2>
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed font-inter">
              {about.paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
