"use client";

import { motion } from "framer-motion";
import { Briefcase, ShieldCheck, BookOpen, Users, TrendingUp, ArrowRight } from "lucide-react";

const benefits = [
  {
    title: "Complete Training",
    description: "End-to-end operational and academic training for center directors.",
    icon: BookOpen
  },
  {
    title: "Branding Support",
    description: "Premium marketing materials and brand guidance to ensure success.",
    icon: ShieldCheck
  },
  {
    title: "Materials Support",
    description: "Standardized curriculum, student kits, and instructional tools provided.",
    icon: Briefcase
  },
  {
    title: "Continuous Mentorship",
    description: "Regular guidance and business support from our expert team.",
    icon: Users
  }
];

export default function Franchise() {
  return (
    <section id="franchise" className="py-24 px-6 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-primary rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 p-12 lg:p-16 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Partner With Us</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Start Your Own <span className="text-accent">Learning Center</span>
                </h3>
                <p className="text-white/70 text-lg mb-10 leading-relaxed">
                  Join a fast-growing premium educational brand. We provide complete support to help you build a successful academy in your location.
                </p>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-accent/20 hover:bg-accent-hover transition-all"
                >
                  Franchise Inquiry
                  <ArrowRight size={20} />
                </motion.a>
              </motion.div>
            </div>

            <div className="lg:col-span-3 bg-white/5 backdrop-blur-sm p-12 lg:p-16 border-l border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                      <benefit.icon className="text-accent" size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 pt-10 border-t border-white/10 flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-primary shadow-lg shadow-accent/10">
                  <TrendingUp size={32} />
                </div>
                <div>
                  <p className="text-white font-bold text-xl leading-tight">High ROI Business Model</p>
                  <p className="text-white/40 text-sm">Low investment, high emotional and financial rewards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
    </section>
  );
}
