"use client";

import { motion } from "framer-motion";
import { Landmark, TrendingUp, ShieldCheck, ArrowRight } from "lucide-react";

export default function Franchise() {
  return (
    <section id="franchise" className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary p-12 md:p-24 rounded-[3rem] shadow-2xl relative overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 border-[40px] border-white rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 border-[20px] border-accent rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block bg-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm border border-white/20">
                <span className="text-xs font-bold text-accent uppercase tracking-[0.2em]">Business Opportunity</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-poppins font-bold text-white mb-8 leading-tight">
                Start Your Own <br />
                <span className="text-accent italic font-medium">Academy Legacy</span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed mb-12 font-inter">
                Join the fastest-growing educational franchise network in India. We provide the curriculum, training, and brand power to help you succeed.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                {[
                  { icon: TrendingUp, title: "High ROI", desc: "Low investment with sustainable growth." },
                  { icon: ShieldCheck, title: "ISO Certified", desc: "Trusted systems and proven curriculum." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-accent shrink-0 backdrop-blur-sm">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a href="#contact" className="bg-accent text-primary-deep px-10 py-5 rounded-2xl font-bold text-lg inline-flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-accent/20">
                Request Franchise Prospectus
                <ArrowRight size={20} />
              </a>
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-6">
              <div className="space-y-6 pt-12">
                <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 text-center">
                  <p className="text-4xl font-poppins font-bold text-accent mb-2">50+</p>
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Centers</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 text-center">
                  <p className="text-4xl font-poppins font-bold text-white mb-2">ISO</p>
                  <p className="text-accent text-xs font-bold uppercase tracking-widest">Standard</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 text-center">
                  <p className="text-4xl font-poppins font-bold text-white mb-2">10k+</p>
                  <p className="text-accent text-xs font-bold uppercase tracking-widest">Students</p>
                </div>
                <div className="bg-accent p-10 rounded-[2.5rem] text-center shadow-2xl">
                  <p className="text-4xl font-poppins font-bold text-primary-deep mb-2">Award</p>
                  <p className="text-primary-deep/60 text-xs font-bold uppercase tracking-widest">Winning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
