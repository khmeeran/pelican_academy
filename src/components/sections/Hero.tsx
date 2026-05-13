"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
          >
            <Star size={14} className="fill-accent text-accent" />
            <span>ISO 9001:2015 Certified Institution</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
            Empowering Young Minds Through <span className="gradient-text">Smart Learning</span>
          </h1>

          <p className="text-lg md:text-xl text-primary/70 mb-10 max-w-xl leading-relaxed">
            Premium educational ecosystem in Chengalpattu, specializing in Abacus, Vedic Math, and creative skill development since 2021.
          </p>

          <div className="flex flex-col sm:row gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 premium-shadow hover:bg-primary/90 transition-all"
            >
              Enroll Now
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#franchise"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-2 border-primary/10 text-primary px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-all"
            >
              Franchise Inquiry
            </motion.a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-primary/60 font-medium text-sm">
            <div className="flex flex-col">
              <span className="text-primary text-2xl font-bold tracking-tighter">Online</span>
              <span>Classes</span>
            </div>
            <div className="w-px h-10 bg-primary/10" />
            <div className="flex flex-col">
              <span className="text-primary text-2xl font-bold tracking-tighter">Offline</span>
              <span>Learning</span>
            </div>
            <div className="w-px h-10 bg-primary/10" />
            <div className="flex flex-col">
              <span className="text-primary text-2xl font-bold tracking-tighter">2021</span>
              <span>Established</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white/50 backdrop-blur-sm">
            {/* Placeholder for high-quality education image */}
            <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center relative group">
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1000"
                alt="Children Learning"
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100"
              >
                <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-primary">
                  <Star size={20} className="fill-current" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Rating</p>
                  <p className="text-primary font-bold">5.0 Star Academy</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -left-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-gray-100"
              >
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-accent">
                  <Star size={20} className="fill-current" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Certified</p>
                  <p className="text-primary font-bold">ISO 9001:2015</p>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Decorative shapes */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-full -z-10 blur-2xl opacity-30" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary rounded-full -z-10 blur-3xl opacity-10" />
        </motion.div>
      </div>
    </section>
  );
}
