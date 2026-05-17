"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calculator, Brain, Zap, GraduationCap, ChevronRight, X, CheckCircle2, Star
} from "lucide-react";

const courses = [
  {
    title: "Level 1: Foundation",
    description: "Introduction to the physical abacus, bead values, and basic addition/subtraction.",
    details: "Students learn the anatomy of the abacus, correct finger movements, and begin translating physical bead movements into mental imagery. Focuses on single-digit calculations.",
    benefits: ["Basic Number Sense", "Fine Motor Skills", "Initial Visualization", "Math Confidence"],
    ageGroup: "5 - 7 Years",
    icon: Calculator,
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Level 2-4: Intermediate",
    description: "Mastering complex addition/subtraction and introduction to multiplication.",
    details: "Transitioning heavily from the physical tool to the 'mental abacus'. Students learn formulas for complements and begin multiplying multi-digit numbers mentally.",
    benefits: ["Photographic Memory", "Speed & Accuracy", "Mental Multiplication", "Enhanced Focus"],
    ageGroup: "8 - 10 Years",
    icon: Brain,
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    title: "Level 5-8: Advanced",
    description: "High-speed mental arithmetic including division, decimals, and square roots.",
    details: "The pinnacle of brain training. Students can calculate complex equations faster than a calculator. The brain's right hemisphere is fully activated for rapid processing.",
    benefits: ["Rapid Mental Math", "Right Brain Activation", "Absolute Concentration", "Academic Excellence"],
    ageGroup: "11 - 14 Years",
    icon: Zap,
    color: "bg-green-500/10 text-green-600"
  },
  {
    title: "Vedic Mathematics",
    description: "Ancient Indian sutras for ultra-fast arithmetic and algebraic calculations.",
    details: "Designed for older students facing competitive exams. Simplifies complex arithmetic into 16 easy-to-solve mental formulas, drastically reducing calculation time.",
    benefits: ["Competitive Edge", "Algebraic Simplification", "Zero Calculation Error", "Creative Problem Solving"],
    ageGroup: "12+ Years",
    icon: GraduationCap,
    color: "bg-purple-500/10 text-purple-600"
  }
];

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);

  return (
    <section id="courses" className="section-spacing bg-background-warm">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full mb-6"
          >
            <Star size={14} className="text-accent fill-accent" />
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Structured Pathway</span>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-poppins font-bold text-primary-deep mb-8"
          >
            Progressive <span className="text-accent italic font-medium">Abacus Curriculum</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary max-w-2xl mx-auto text-lg font-inter"
          >
            An 8-level scientific framework that takes children from basic bead movements to performing complex mental arithmetic faster than a calculator.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedCourse(course)}
              className="premium-card p-10 flex flex-col cursor-pointer group"
            >
              <div className={`w-16 h-16 rounded-[1.5rem] ${course.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <course.icon size={32} />
              </div>
              <h4 className="text-2xl font-poppins font-bold text-primary-deep mb-4 group-hover:text-primary transition-colors">{course.title}</h4>
              <p className="text-text-secondary text-sm leading-relaxed mb-8 flex-grow font-inter">
                {course.description}
              </p>
              <div className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest border-t border-primary/5 pt-6 group-hover:gap-3 transition-all">
                Explore Details <ChevronRight size={18} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Course Detail Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="absolute inset-0 bg-primary-deep/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-2xl rounded-[3rem] p-10 md:p-16 shadow-2xl relative z-10 overflow-hidden"
            >
              <button 
                onClick={() => setSelectedCourse(null)}
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-background-warm flex items-center justify-center text-primary-deep hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-6 mb-10">
                <div className={`w-20 h-20 rounded-[2rem] ${selectedCourse.color} flex items-center justify-center shadow-inner`}>
                  <selectedCourse.icon size={40} />
                </div>
                <div>
                  <h4 className="text-4xl font-poppins font-bold text-primary-deep">{selectedCourse.title}</h4>
                  <div className="bg-accent/10 px-4 py-1.5 rounded-full inline-block mt-2">
                    <span className="text-xs font-bold text-accent uppercase tracking-[0.2em]">{selectedCourse.ageGroup}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <div>
                  <h5 className="text-xs font-bold text-text-secondary uppercase tracking-[0.3em] mb-4">Curriculum Overview</h5>
                  <p className="text-primary-deep/80 leading-relaxed text-xl font-inter">
                    {selectedCourse.details}
                  </p>
                </div>

                <div>
                  <h5 className="text-xs font-bold text-text-secondary uppercase tracking-[0.3em] mb-6">Learning Outcomes</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedCourse.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-4 bg-background-warm p-5 rounded-[1.5rem] border border-primary/5">
                        <CheckCircle2 size={20} className="text-accent shrink-0" />
                        <span className="text-primary-deep font-bold text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <a 
                    href="#contact" 
                    onClick={() => setSelectedCourse(null)}
                    className="btn-primary w-full flex items-center justify-center gap-3 text-lg"
                  >
                    Request Enrollment Details
                    <ChevronRight size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Scandinavian Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/50 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 border border-primary/10 rounded-full -z-0 -translate-x-1/2 translate-y-1/2" />
    </section>
  );
}
