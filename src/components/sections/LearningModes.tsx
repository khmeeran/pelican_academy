"use client";

import { motion } from "framer-motion";
import { Laptop, Users, Home, ArrowRight } from "lucide-react";

const modes = [
  {
    title: "On-Campus Learning",
    description: "Traditional face-to-face interaction in our modern, safe, and collaborative Singaperumalkoil center.",
    icon: Home,
    bg: "bg-white",
    accent: "text-primary"
  },
  {
    title: "Virtual Academy",
    description: "Highly interactive online batches with live instructors, digital tools, and the same global curriculum.",
    icon: Laptop,
    bg: "bg-background-warm",
    accent: "text-accent"
  },
  {
    title: "Hybrid Model",
    description: "A flexible mix of physical classroom sessions and virtual check-ins for the modern parent's schedule.",
    icon: Users,
    bg: "bg-white",
    accent: "text-primary-deep"
  }
];

export default function LearningModes() {
  return (
    <section className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-poppins font-bold text-primary-deep mb-6">
            Designed for the <span className="text-accent italic font-medium">Modern Student</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg font-inter">
            Flexible learning formats that prioritize child safety, educational quality, and parental convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {modes.map((mode, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`premium-card p-12 flex flex-col items-start ${mode.bg} group`}
            >
              <div className={`w-20 h-20 rounded-[2rem] bg-background-warm flex items-center justify-center ${mode.accent} mb-10 group-hover:scale-110 transition-all duration-500 shadow-inner`}>
                <mode.icon size={36} />
              </div>
              <h4 className="text-3xl font-poppins font-bold text-primary-deep mb-6 leading-tight">{mode.title}</h4>
              <p className="text-text-secondary text-lg leading-relaxed mb-10 font-inter">
                {mode.description}
              </p>
              <div className="mt-auto flex items-center gap-3 text-accent font-bold uppercase tracking-widest text-sm cursor-pointer group-hover:gap-5 transition-all">
                Learn More <ArrowRight size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
