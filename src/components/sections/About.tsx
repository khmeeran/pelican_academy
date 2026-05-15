"use client";

import { motion } from "framer-motion";
import { Target, Heart, GraduationCap } from "lucide-react";
import Image from "next/image";

const values = [
  {
    title: "Our Mission",
    description: "To cultivate cognitive excellence and emotional intelligence in every child through scientifically proven methods.",
    icon: Target,
  },
  {
    title: "Core Values",
    description: "Integrity, curiosity, and disciplined creativity form the foundation of our educational philosophy.",
    icon: Heart,
  },
  {
    title: "Expert Pedagogy",
    description: "Our certified educators employ international teaching standards to ensure holistic development.",
    icon: GraduationCap,
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
                alt="Our Academy Environment"
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
              className="absolute -bottom-6 -left-6 bg-primary p-8 rounded-[2rem] shadow-2xl z-20 hidden md:block"
            >
              <p className="text-4xl font-poppins font-bold text-background-warm mb-1">ISO</p>
              <p className="text-xs font-bold text-accent tracking-[0.2em] uppercase">Certified Quality</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block bg-primary/5 px-4 py-2 rounded-full mb-6">
              <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Established Excellence</span>
            </div>
            <h2 className="text-5xl font-poppins font-bold text-primary-deep mb-8 leading-tight">
              Crafting a Legacy of <br />
              <span className="text-accent italic font-medium">Empowered Minds</span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-10 font-inter">
              Pelican Academy is more than just a tuition center. We are a sanctuary for skill development where traditional wisdom meets modern scientific techniques. Our Singaperumalkoil branch is committed to providing a world-class educational experience.
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
