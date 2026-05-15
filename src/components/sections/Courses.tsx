"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calculator, BookOpen, PenTool, Languages, Palette, 
  GraduationCap, ChevronRight, X, CheckCircle2, Star
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
    color: "bg-accent-gold/10 text-accent"
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
    color: "bg-accent-gold/10 text-accent"
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
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Our Curriculum</span>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-poppins font-bold text-primary-deep mb-8"
          >
            Refined <span className="text-accent italic font-medium">Learning Programs</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary max-w-2xl mx-auto text-lg font-inter"
          >
            Scientifically designed programs to enhance cognitive abilities, creativity, and academic excellence in young learners.
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
