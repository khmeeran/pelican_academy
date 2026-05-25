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

export default function About() {
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
                src="/images/pexels-mary-taylor-5896479.jpg"
                alt="Brain Training at Pelican Academy"
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
              <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">The Science of Learning</span>
            </div>
            <h2 className="text-5xl font-poppins font-bold text-primary-deep mb-8 leading-tight">
              More Than Math: It&apos;s <br />
              <span className="text-accent italic font-medium">Brain Engineering</span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-10 font-inter">
              Pelican Academy is more than just a tuition center—it&apos;s a launchpad for future leaders. Our proven methodologies transform how children process information, turning academic struggle into self-assured mastery and giving them the critical advantage they need to lead.
            </p>

            <div className="space-y-6">
              {values.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-6 items-start p-6 rounded-3xl transition-colors hover:bg-background-warm group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-deep mb-2">{item.title}</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
