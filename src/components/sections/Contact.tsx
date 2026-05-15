"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("https://formsubmit.co/ajax/919994048827", {
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
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-background-warm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Connect With Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary-deep mb-8 leading-tight">
              Get in Touch for <span className="gradient-text">Inquiries & Admissions</span>
            </h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-primary/10">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary/40 uppercase tracking-widest mb-1">Call/WhatsApp</p>
                  <a href="tel:+919994048827" className="text-xl font-bold text-primary-deep hover:text-primary transition-colors">+91 9994048827</a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-primary/10">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary/40 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-xl font-bold text-primary-deep">Near Parashakti Hospital, Singaperumalkoil, Chengalpattu</p>
                  <a 
                    href="https://maps.app.goo.gl/YourActualGoogleMapsLink" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-bold hover:underline mt-2 inline-block"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="https://wa.me/919994048827"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-2xl font-bold shadow-lg shadow-green-500/20 hover:scale-105 transition-transform"
              >
                <MessageCircle size={24} />
                WhatsApp Us
              </a>
              <a
                href="tel:+919994048827"
                className="flex items-center gap-2 bg-primary text-background-warm px-6 py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
              >
                <Phone size={24} />
                Call Now
              </a>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-[2rem] overflow-hidden shadow-xl border border-primary/10 h-[300px] relative group">
              <iframe
                src="https://www.google.com/maps?q=Pelican+Academy,Singaperumalkoil,Chengalpattu,Tamil+Nadu&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.5) contrast(1.1) opacity(0.8)" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/50 backdrop-blur-sm p-10 rounded-[3rem] shadow-xl border border-primary/5 relative overflow-hidden"
          >
            {formStatus === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
              >
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={48} />
                </div>
                <h4 className="text-2xl font-bold text-primary-deep">Message Sent!</h4>
                <p className="text-primary/60 max-w-xs">Thank you for your inquiry. Our team will get back to you shortly.</p>
                <button 
                  onClick={() => setFormStatus("idle")}
                  className="text-primary font-bold hover:underline pt-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="_subject" value="New Inquiry from Pelican Academy Website" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary/60 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-background-warm border border-primary/10 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary/60 ml-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 00000 00000"
                      className="w-full px-6 py-4 rounded-2xl bg-background-warm border border-primary/10 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary/60 ml-1">Inquiry Type</label>
                  <select
                    name="type"
                    className="w-full px-6 py-4 rounded-2xl bg-background-warm border border-primary/10 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all appearance-none"
                  >
                    <option>Course Admission</option>
                    <option>Franchise Inquiry</option>
                    <option>Teacher Training</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary/60 ml-1">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-6 py-4 rounded-2xl bg-background-warm border border-primary/10 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {formStatus === "error" && (
                  <div className="flex items-center gap-2 text-red-500 text-sm font-medium bg-red-50 p-4 rounded-xl">
                    <AlertCircle size={18} />
                    <span>Something went wrong. Please try again or call us directly.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full bg-primary text-background-warm py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-primary/20 hover:bg-primary-deep transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === "submitting" ? (
                    <span className="flex items-center gap-2">
                      Sending... <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </span>
                  ) : (
                    <>
                      Send Inquiry
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
