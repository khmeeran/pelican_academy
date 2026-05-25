"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("https://formsubmit.co/ajax/pelicanacademy.21@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary-deep rounded-[4rem] overflow-hidden shadow-2xl relative">
          {/* Background Highlight */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(212,163,115,0.1),transparent_50%)]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
            <div className="p-12 md:p-24 lg:p-32 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="relative w-48 h-24 mb-6 -ml-4 transition-all duration-500 hover:scale-105">
                  <Image
                    src="/logo-transparent.png"
                    alt="Pelican Academy Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="inline-block bg-white/10 px-4 py-2 rounded-full mb-10 backdrop-blur-sm border border-white/10">
                  <span className="text-xs font-bold text-accent uppercase tracking-[0.2em]">Admissions Open</span>
                </div>
                <h2 className="text-6xl md:text-7xl font-poppins font-bold text-white mb-10 leading-tight">
                  Invest in Their <br />
                  <span className="text-accent italic font-medium">Future Today</span>
                </h2>
                <p className="text-xl text-white/70 leading-relaxed mb-16 font-inter max-w-lg">
                  Don&apos;t let your child fall behind. Join hundreds of smart parents who have already given their children the Pelican Academy advantage.
                </p>

                <div className="space-y-10">
                  <div className="flex gap-8 items-start">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10">
                      <Phone size={28} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-2">Direct Inquiry</p>
                      <a href="tel:+919994048827" className="text-2xl font-bold text-white hover:text-accent transition-colors">+91 9994048827</a>
                    </div>
                  </div>

                  <div className="flex gap-8 items-start">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent shrink-0 border border-white/10">
                      <MapPin size={28} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-2">Our Campus</p>
                      <p className="text-2xl font-bold text-white leading-tight mb-8">Mahindra World City, <br />Chengalpattu</p>
                      
                      {/* Interactive Map Embed */}
                      <div className="w-full h-64 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group relative">
                        <iframe
                          src="https://maps.google.com/maps?q=Mahindra%20World%20City,%20Chengalpattu&t=&z=14&ie=UTF8&iwloc=&output=embed"
                          width="100%"
                          height="100%"
                          style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                          allowFullScreen={true}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Pelican Academy Location"
                          className="transition-all duration-700 group-hover:grayscale-0 group-hover:invert-0 group-hover:contrast-100"
                        ></iframe>
                        <div className="absolute inset-0 pointer-events-none border-[12px] border-primary-deep/50 rounded-3xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="bg-background-warm p-12 md:p-24 lg:p-32 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-primary/5"
              >
                {formStatus === "success" ? (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 size={56} />
                    </div>
                    <h4 className="text-3xl font-poppins font-bold text-primary-deep mb-4">Application Received</h4>
                    <p className="text-text-secondary text-lg mb-10">Our admissions officer will contact you within 24 hours.</p>
                    <button onClick={() => setFormStatus("idle")} className="btn-primary">Send New Message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-primary-deep uppercase tracking-widest ml-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full px-8 py-5 rounded-2xl bg-background-warm border border-primary/10 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all font-inter"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-primary-deep uppercase tracking-widest ml-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 00000 00000"
                        className="w-full px-8 py-5 rounded-2xl bg-background-warm border border-primary/10 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all font-inter"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-primary-deep uppercase tracking-widest ml-1">Message</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder="How can we help you?"
                        className="w-full px-8 py-5 rounded-2xl bg-background-warm border border-primary/10 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all resize-none font-inter"
                      ></textarea>
                    </div>

                    {formStatus === "error" && (
                      <div className="flex items-center gap-3 text-red-600 bg-red-50 p-5 rounded-2xl border border-red-100">
                        <AlertCircle size={24} />
                        <p className="font-bold text-sm">Please try again or contact us directly.</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="btn-primary w-full py-6 text-xl flex items-center justify-center gap-4 group"
                    >
                      {formStatus === "submitting" ? "Processing..." : "Submit Application"}
                      <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
