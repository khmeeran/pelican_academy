"use client";

import { motion } from "framer-motion";
import { Calculator, BookOpen, PenTool, Languages, Palette, GraduationCap, ChevronRight } from "lucide-react";

const courses = [
  {
    title: "Abacus",
    description: "Master mental arithmetic and boost brain power through ancient techniques.",
    icon: Calculator,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Vedic Math",
    description: "Discover the speed of Vedic mathematics for complex calculations.",
    icon: GraduationCap,
    color: "bg-amber-50 text-amber-600"
  },
  {
    title: "Jolly Phonics",
    description: "Foundational reading and writing skills through a multi-sensory approach.",
    icon: BookOpen,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "English Grammar",
    description: "Build confidence and fluency with comprehensive grammar mastery.",
    icon: Languages,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Handwriting",
    description: "Improve legibility and style with scientific handwriting techniques.",
    icon: PenTool,
    color: "bg-rose-50 text-rose-600"
  },
  {
    title: "Calligraphy",
    description: "The art of beautiful writing to enhance creativity and focus.",
    icon: Palette,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Drawing",
    description: "Unleash inner creativity through structured art and sketching classes.",
    icon: Palette,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Subject Tuitions",
    description: "Comprehensive academic support for all school subjects.",
    icon: GraduationCap,
    color: "bg-teal-50 text-teal-600"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Courses() {
  return (
    <section id="courses" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            Our Programs
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            Explore Our <span className="gradient-text">Premium Courses</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primary/60 max-w-2xl mx-auto text-lg"
          >
            Scientifically designed programs to enhance cognitive abilities, creativity, and academic excellence in young learners.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[2rem] border border-gray-100 premium-shadow group transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${course.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <course.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">{course.title}</h4>
              <p className="text-primary/60 text-sm leading-relaxed mb-6">
                {course.description}
              </p>
              <button className="flex items-center gap-2 text-primary font-bold text-sm group-hover:text-accent transition-colors">
                Learn More <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-0 -translate-x-1/2 translate-y-1/2" />
    </section>
  );
}
