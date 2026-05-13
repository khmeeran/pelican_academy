"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Heart, TrendingUp } from "lucide-react";

export default function TeacherTraining() {
  const tracks = [
    {
      title: "Career Opportunities",
      description: "Join our network of expert educators and build a rewarding career.",
      icon: TrendingUp
    },
    {
      title: "Professional Certification",
      description: "Get certified in modern teaching methodologies and specialized subjects.",
      icon: Award
    },
    {
      title: "Expert Mentorship",
      description: "Learn from the best in the industry with personalized guidance.",
      icon: Heart
    },
    {
      title: "Skill Development",
      description: "Continuous learning and upskilling programs for teachers.",
      icon: BookOpen
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            Empower Your Career
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            Professional <span className="gradient-text">Teacher Training</span>
          </motion.h3>
          <p className="text-primary/60 max-w-2xl mx-auto text-lg">
            We don't just teach students; we empower educators. Join our professional training programs to master the art of teaching.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-primary hover:text-white transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-primary transition-all">
                <track.icon size={28} />
              </div>
              <h4 className="text-xl font-bold mb-3">{track.title}</h4>
              <p className="opacity-60 text-sm leading-relaxed group-hover:opacity-80">
                {track.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:text-accent transition-colors">
            Become a Certified Educator <Award size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
