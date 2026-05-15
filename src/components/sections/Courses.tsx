"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calculator, BookOpen, PenTool, Languages, Palette, 
  GraduationCap, ChevronRight, X, CheckCircle2 
} from "lucide-react";

const courses = [
  {
    title: "Abacus",
    description: "Master mental arithmetic and boost brain power through 3G Abacus techniques.",
    details: "Our Abacus program enhances concentration, memory, and speed-math skills. It uses the 3-generation (3G) technique to help children visualize calculations without physical tools.",
    benefits: ["Improved Concentration", "Photographic Memory", "Speed & Accuracy", "Mental Agility"],
    ageGroup: "5 - 14 Years",
    icon: Calculator,
    color: "bg-primary/5 text-primary"
  },
  {
    title: "Vedic Math",
    description: "Discover the speed of Vedic mathematics for complex calculations.",
    details: "Based on ancient Indian sutras, this program simplifies complex arithmetic into easy-to-solve mental steps. Ideal for competitive exam preparation and building number confidence.",
    benefits: ["Fast Calculations", "Algebraic Simplification", "Confidence in Math", "Creative Thinking"],
    ageGroup: "12+ Years",
    icon: GraduationCap,
    color: "bg-accent/10 text-primary-deep"
  },
  {
    title: "Jolly Phonics",
    description: "Foundational reading and writing skills through a multi-sensory approach.",
    details: "A world-renowned synthetic phonics program that teaches children the 42 letter sounds, rather than just the alphabet, enabling them to read and write early.",
    benefits: ["Early Reading Skills", "Accurate Spelling", "Correct Pronunciation", "Confidence in Literacy"],
    ageGroup: "4 - 7 Years",
    icon: BookOpen,
    color: "bg-accent-gold/10 text-accent-gold"
  },
  {
    title: "English Grammar",
    description: "Build confidence and fluency with comprehensive grammar mastery.",
    details: "Structured grammar modules designed to improve spoken and written English. We focus on sentence structure, parts of speech, and vocabulary enrichment.",
    benefits: ["Fluent Communication", "Error-free Writing", "Rich Vocabulary", "Public Speaking Confidence"],
    ageGroup: "8+ Years",
    icon: Languages,
    color: "bg-primary/5 text-primary"
  },
  {
    title: "Handwriting",
    description: "Improve legibility and style with scientific handwriting techniques.",
    details: "Our scientific approach to handwriting focuses on posture, grip, and letter formation to help students write legibly and fast without fatigue.",
    benefits: ["Neat & Legible Writing", "Increased Writing Speed", "Proper Pen Grip", "Better Exam Presentation"],
    ageGroup: "6+ Years",
    icon: PenTool,
    color: "bg-accent/10 text-primary-deep"
  },
  {
    title: "Calligraphy",
    description: "The art of beautiful writing to enhance creativity and focus.",
    details: "Learn the elegant art of decorative writing. This program helps in developing artistic skills, patience, and fine motor coordination.",
    benefits: ["Artistic Expression", "Focus & Patience", "Fine Motor Skills", "Decorative Projects"],
    ageGroup: "10+ Years",
    icon: Palette,
    color: "bg-accent-gold/10 text-accent-gold"
  },
  {
    title: "Drawing & Art",
    description: "Unleash inner creativity through structured art and sketching classes.",
    details: "From basic shapes to advanced shading and coloring, our art program encourages children to express themselves through various mediums.",
    benefits: ["Creative Expression", "Visual Thinking", "Color Theory Knowledge", "Emotional Well-being"],
    ageGroup: "5+ Years",
    icon: Palette,
    color: "bg-primary/5 text-primary"
  },
  {
    title: "Teacher Training",
    description: "Expert-led programs for aspiring educators and professionals.",
    details: "Comprehensive training for those wanting to teach Abacus, Vedic Math, or Phonics. Includes certification and business support for starting your own center.",
    benefits: ["Career Opportunity", "ISO Certified Training", "Teaching Methodology", "Business Mentorship"],
    ageGroup: "Adults / Educators",
    icon: GraduationCap,
    color: "bg-accent/10 text-primary-deep"
  }
];

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);

  return (
    <section id="courses" className="py-24 px-6 relative overflow-hidden bg-white/30">
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
            className="text-4xl md:text-5xl font-bold text-primary-deep mb-6"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="bg-background-warm p-8 rounded-[2rem] border border-primary/5 premium-shadow group transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => setSelectedCourse(course)}
            >
              <div className={`w-14 h-14 rounded-2xl ${course.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <course.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-primary-deep mb-3">{course.title}</h4>
              <p className="text-primary/60 text-sm leading-relaxed mb-6 flex-grow">
                {course.description}
              </p>
              <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:text-primary-deep transition-colors">
                Learn More <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
              className="absolute inset-0 bg-primary-deep/40 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-background-warm w-full max-w-2xl rounded-[3rem] p-8 md:p-12 shadow-2xl relative z-10 overflow-hidden"
            >
              <button 
                onClick={() => setSelectedCourse(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 rounded-2xl ${selectedCourse.color} flex items-center justify-center`}>
                  <selectedCourse.icon size={32} />
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-primary-deep">{selectedCourse.title}</h4>
                  <div className="bg-primary/5 px-3 py-1 rounded-full inline-block mt-1">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">{selectedCourse.ageGroup}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h5 className="text-sm font-bold text-primary/40 uppercase tracking-widest mb-3">About the Course</h5>
                  <p className="text-primary-deep/80 leading-relaxed text-lg">
                    {selectedCourse.details}
                  </p>
                </div>

                <div>
                  <h5 className="text-sm font-bold text-primary/40 uppercase tracking-widest mb-4">Key Benefits</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedCourse.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white/50 p-4 rounded-2xl border border-primary/5">
                        <CheckCircle2 size={18} className="text-accent shrink-0" />
                        <span className="text-primary-deep font-semibold">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <a 
                    href="#contact" 
                    onClick={() => setSelectedCourse(null)}
                    className="w-full bg-primary text-background-warm py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-primary/20 hover:bg-primary-deep transition-all"
                  >
                    Inquire About This Course
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-0 -translate-x-1/2 translate-y-1/2" />
    </section>
  );
}
