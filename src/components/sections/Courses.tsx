"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calculator, Brain, Zap, ChevronRight, X, CheckCircle2, Star, BookOpen, PenTool, Palette, Type
} from "lucide-react";

const courses = [
  {
    title: "Abacus Program",
    description: "Abacus program is a scientifically designed learning method that strengthens children’s mathematical abilities and overall brain development.",
    details: "The course consists of 5 progressive levels, enabling students to gradually master concepts with confidence and accuracy.",
    benefits: [
      "Enhances memory power and concentration",
      "Improves calculation speed and mental accuracy",
      "Develops visualization and analytical thinking skills",
      "Strengthens logical reasoning and problem-solving abilities",
      "Builds confidence in performing mental math"
    ],
    ageGroup: "5 - 14 Years",
    icon: Calculator,
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Vedic Maths",
    description: "Vedic Maths is an innovative and systematic approach to mathematics that simplifies complex calculations through powerful mental techniques and logical methods.",
    details: "It enables students to solve problems with greater speed, accuracy, and confidence while developing a strong foundation in mathematics.",
    benefits: [
      "Enhances calculation speed and numerical accuracy",
      "Strengthens analytical thinking and problem-solving abilities",
      "Encourages quick mental calculations without reliance on calculators",
      "Develops logical reasoning and cognitive skills",
      "Makes mathematics engaging, interactive, and easy to understand"
    ],
    ageGroup: "10+ Years",
    icon: Zap,
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    title: "Jolly Phonics",
    description: "Jolly Phonics is a fun, engaging, and multi-sensory approach to teaching children how to read and write through letter sounds.",
    details: "It helps young learners develop strong communication and literacy skills by combining actions, stories, songs, and interactive activities for effective learning.",
    benefits: [
      "Develops strong reading and pronunciation skills",
      "Improves spelling and word recognition abilities",
      "Enhances listening, speaking, and communication skills",
      "Builds a strong foundation in English language learning",
      "Strengths vocabulary and comprehension skills"
    ],
    ageGroup: "4 - 7 Years",
    icon: Brain,
    color: "bg-green-500/10 text-green-600"
  },
  {
    title: "English Grammar",
    description: "English Grammar is an essential component of language development that enables students to communicate with clarity, confidence, and accuracy.",
    details: "A strong foundation in grammar enhances a child’s ability to read, write, speak, and comprehend English effectively, supporting both academic and personal growth.",
    benefits: [
      "Enhances spoken and written communication with accuracy and confidence",
      "Develops strong sentence construction and language proficiency",
      "Improves reading comprehension, vocabulary and creative writing skills",
      "Encourages clear expression of thoughts and ideas in a structured manner",
      "Builds confidence in classroom interaction and public communication",
      "Provides a strong linguistic foundation for higher education and competitive examinations",
      "Encourages critical thinking and effective communication skills for lifelong learning"
    ],
    ageGroup: "7+ Years",
    icon: BookOpen,
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "Handwriting Improvement",
    description: "The Handwriting Improvement Course is designed to help children develop neat, clear, and well-structured handwriting through guided practice, proper stroke formation, and effective writing techniques.",
    details: "The Handwriting Improvement Course is designed to help children develop neat, clear, and well-structured handwriting through guided practice, proper stroke formation, and effective writing techniques.",
    benefits: [
      "Improves handwriting clarity, neatness, and consistency",
      "Enhances letter formation, spacing, and alignment",
      "Increases writing speed with improved accuracy",
      "Boosts confidence in classroom writing and examinations",
      "Makes writing more organized, attractive, and easy to read"
    ],
    ageGroup: "6+ Years",
    icon: PenTool,
    color: "bg-pink-500/10 text-pink-600"
  },
  {
    title: "Calligraphy",
    description: "Calligraphy is the art of beautiful, artistic, and stylish writing.",
    details: "It focuses on creating elegant letters and creative handwriting patterns using proper strokes, spacing, and design techniques.",
    benefits: [
      "Learn innovative writing styles and creative lettering techniques",
      "Develop artistic presentation skills through stylish and decorative writing",
      "Explore modern and traditional calligraphy patterns with creative designs",
      "Improve creativity, imagination, and aesthetic sense in writing",
      "Gain confidence in creating attractive certificates, titles, and decorative content"
    ],
    ageGroup: "10+ Years",
    icon: Type,
    color: "bg-indigo-500/10 text-indigo-600"
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
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Our Enrichment Programs</span>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-poppins font-bold text-primary-deep mb-8"
          >
            Skills That <span className="text-accent italic font-medium">Set Them Apart</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary max-w-2xl mx-auto text-lg font-inter"
          >
            Our specialized curriculum goes beyond the textbook, building the critical thinking, speed, and confidence your child needs to excel in competitive environments.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-primary/5 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
              <Palette size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-primary-deep">Drawing & Enrichment Activities</h4>
              <p className="text-text-secondary text-sm">Drawing and other enrichment activities are also offered to students to foster creativity, artistic expression, confidence, and overall holistic development.</p>
            </div>
          </div>
          <a href="#contact" className="btn-primary whitespace-nowrap">Enquire Now</a>
        </motion.div>
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
