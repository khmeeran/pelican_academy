"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const points = [
    "ISO 9001:2015 Certified",
    "Expert Mentorship",
    "Flexible Online & Offline Batches",
    "Franchise Opportunities Available",
    "Teacher Training Programs"
  ];

  return (
    <section id="about" className="py-24 px-6 bg-background-warm/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000"
                alt="About Pelican Academy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-background-warm p-8 rounded-2xl shadow-xl max-w-xs hidden md:block border border-primary/10">
              <p className="text-primary-deep font-bold text-lg mb-2">Our Mission</p>
              <p className="text-primary/60 text-sm leading-relaxed">
                To empower students through innovative learning methods and provide a world-class educational ecosystem.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary-deep mb-6 leading-tight">
              A Legacy of Excellence in <span className="gradient-text">Modern Education</span>
            </h3>
            <p className="text-primary/70 text-lg mb-8 leading-relaxed">
              Pelican Academy is an ISO 9001:2015 certified institution. We are dedicated to providing premium skill development and academic support through interactive and result-oriented teaching methodologies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent shrink-0" size={20} />
                  <span className="text-primary-deep/80 font-medium">{point}</span>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <p className="text-primary-deep font-semibold mb-2 italic">&quot;Education is the passport to the future, for tomorrow belongs to those who prepare for it today.&quot;</p>
              <p className="text-primary/60 text-sm font-bold">— Academy Director</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
