"use client";

import { motion } from "framer-motion";
import { Laptop, Users, Presentation, MessageSquare, ArrowRight } from "lucide-react";

export default function LearningModes() {
  return (
    <section className="py-24 px-6 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Flexible Learning</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Modern Training for a <span className="text-accent">Global Future</span>
            </h3>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Laptop className="text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Live Online Classes</h4>
                  <p className="text-white/60 leading-relaxed">
                    Interactive, real-time sessions with expert mentors from the comfort of your home. Perfect for global students.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Presentation className="text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Classroom Training</h4>
                  <p className="text-white/60 leading-relaxed">
                    High-tech classroom environment at our Mahindra World City center for focused, hands-on learning experiences.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Users className="text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Interactive Sessions</h4>
                  <p className="text-white/60 leading-relaxed">
                    Personalized attention with small batch sizes to ensure every student masters the concepts effectively.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/5 p-8 rounded-[3rem] border border-white/10 backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000"
                alt="Interactive Learning"
                className="rounded-[2rem] shadow-2xl grayscale-[0.2]"
              />
            </div>
            {/* Abstract motion element */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-32 h-32 border-2 border-accent/20 rounded-full border-dashed"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
