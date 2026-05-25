"use client";

import { motion } from "framer-motion";
import { Landmark, TrendingUp, ShieldCheck, ArrowRight, Award, GraduationCap, Megaphone, Heart, LayoutGrid } from "lucide-react";

const franchiseBenefits = [
  {
    title: "Zero Royalty Per Child",
    desc: "Grow your academy without the burden of royalty charges for every admission.",
    icon: Landmark,
  },
  {
    title: "Low Investment – High Growth Opportunity",
    desc: "Start your educational venture with an affordable franchise model and excellent earning potential.",
    icon: TrendingUp,
  },
  {
    title: "Complete Academic & Operational Support",
    desc: "From study materials to assessments and activity planning, we provide end-to-end support.",
    icon: ShieldCheck,
  },
  {
    title: "Strong Curriculum with Skill-Based Programs",
    desc: "Offer in-demand courses like Abacus, Jolly Phonics, Vedic Maths, Handwriting Improvement and English Grammar.",
    icon: Award,
  },
  {
    title: "Continuous Training & Expert Guidance",
    desc: "Receive professional mentoring, teacher training, and regular academic assistance.",
    icon: GraduationCap,
  },
  {
    title: "Smart Marketing & Branding Assistance",
    desc: "Build a strong presence in your locality with our promotional and branding support.",
    icon: Megaphone,
  },
  {
    title: "Child-Centric Learning Methodology",
    desc: "Our programs are designed to enhance confidence, creativity, concentration, and communication skills.",
    icon: Heart,
  },
  {
    title: "Easy to Manage & Expand",
    desc: "A flexible and professionally structured franchise model suitable for passionate educators and entrepreneurs.",
    icon: LayoutGrid,
  }
];

export default function Franchise() {
  return (
    <section id="franchise" className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block bg-accent/10 px-5 py-2 rounded-full mb-6">
            <span className="text-xs font-bold text-accent uppercase tracking-[0.3em]">Business Opportunity</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-poppins font-bold text-primary-deep mb-8 leading-tight">
            Partner with <span className="text-primary italic font-medium">Pelican Academy</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto font-inter">
            Join a legacy of excellence. Our franchise model is designed for passionate educators looking to make a global impact with a local touch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {franchiseBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="premium-card p-10 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                <benefit.icon size={28} />
              </div>
              <h4 className="text-xl font-poppins font-bold text-primary-deep mb-4 leading-tight group-hover:text-primary transition-colors">{benefit.title}</h4>
              <p className="text-text-secondary text-sm leading-relaxed font-inter">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-primary p-12 md:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 border-[40px] border-white rounded-full -translate-y-1/2 translate-x-1/2" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h3 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6">Ready to Start Your Academy?</h3>
              <p className="text-xl text-white/80 font-inter mb-0">
                Download our comprehensive franchise prospectus and learn about our unique &quot;Zero Royalty&quot; model.
              </p>
            </div>
            <a href="#contact" className="bg-accent text-primary-deep px-12 py-6 rounded-2xl font-bold text-xl inline-flex items-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-black/20 whitespace-nowrap">
              Get Prospectus
              <ArrowRight size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
