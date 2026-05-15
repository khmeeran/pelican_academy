"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase, ChevronRight, BookOpen, Users, Star, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const trainingFeatures = [
  {
    title: "Master Curriculum",
    desc: "In-depth training on Abacus, Vedic Math, and Jolly Phonics methodologies.",
    icon: BookOpen
  },
  {
    title: "Global Certification",
    desc: "ISO 9001:2015 recognized certification to teach anywhere in the network.",
    icon: Award
  },
  {
    title: "Micro-Teaching Sessions",
    desc: "Practical hands-on teaching experience with real-time expert feedback.",
    icon: Users
  },
  {
    title: "Business Launch Support",
    desc: "Learn how to market your classes and manage your own teaching center.",
    icon: Briefcase
  }
];

export default function TeacherTraining() {
  return (
    <section className="section-spacing bg-background-warm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-accent/10 px-4 py-2 rounded-full mb-6">
              <span className="text-xs font-bold text-accent uppercase tracking-[0.2em]">Professional Empowerment</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-poppins font-bold text-primary-deep mb-8 leading-tight">
              Transform Your Passion <br />
              <span className="text-primary italic font-medium">Into a Career</span>
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed mb-12 font-inter">
              Our world-class Teacher Training programs are designed for passionate individuals looking to master smart-learning techniques. Join an elite network of certified educators.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {trainingFeatures.map((item, i) => (
                <div key={i} className="bg-white/50 p-6 rounded-3xl border border-primary/5 hover:bg-white transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-4">
                    <item.icon size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-primary-deep mb-2">{item.title}</h4>
                  <p className="text-text-secondary text-xs leading-relaxed font-inter">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6">
              <a href="#contact" className="btn-primary inline-flex items-center gap-3">
                Join Training Batch
                <ChevronRight size={20} />
              </a>
              <div className="flex items-center gap-2 text-primary-deep font-bold">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-accent/20" />
                  ))}
                </div>
                <span className="text-sm">200+ Certified Trainers</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-2xl border-[16px] border-white/50 group">
              <Image
                src="/images/pexels-tima-miroshnichenko-5427868.jpg"
                alt="Teacher Training Excellence"
                width={800}
                height={1000}
                className="object-cover aspect-[4/5] transition-transform duration-[3s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary-deep/10 mix-blend-multiply" />
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-8 rounded-[2.5rem] shadow-xl border border-primary/5">
                <div className="flex items-center gap-4 mb-3">
                  <Star className="text-accent fill-accent" size={20} />
                  <p className="text-primary-deep font-bold font-poppins">Professional Excellence</p>
                </div>
                <p className="text-text-secondary text-sm font-inter leading-relaxed">
                  "The training at Pelican Academy completely changed my teaching perspective. The Zero-Royalty model makes it the best choice for independent teachers."
                </p>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
