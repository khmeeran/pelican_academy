"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase, ChevronRight } from "lucide-react";
import Image from "next/image";

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
              <span className="text-xs font-bold text-accent uppercase tracking-[0.2em]">Professional Growth</span>
            </div>
            <h2 className="text-5xl font-poppins font-bold text-primary-deep mb-8 leading-tight">
              Empowering the <br />
              <span className="text-primary">Next Generation of Educators</span>
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed mb-12 font-inter">
              Our world-class Teacher Training programs are designed for passionate individuals looking to master Abacus, Vedic Math, and Jolly Phonics. Gain a global certification and join our elite teaching network.
            </p>

            <div className="space-y-8 mb-12">
              {[
                { icon: Award, title: "Global Certification", desc: "Recognized standards across international education boards." },
                { icon: Briefcase, title: "Career Support", desc: "100% placement assistance and business startup mentorship." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-accent shrink-0 shadow-sm border border-accent/5">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-deep mb-1">{item.title}</h4>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary inline-flex items-center gap-3">
              Become a Certified Trainer
              <ChevronRight size={20} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white/50">
              <Image
                src="/images/pexels-tima-miroshnichenko-5427868.jpg"
                alt="Teacher Training Session"
                width={800}
                height={1000}
                className="object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-primary-deep/20 mix-blend-multiply" />
            </div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
