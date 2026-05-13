"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Connect With Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
              Get in Touch for <span className="gradient-text">Inquiries & Admissions</span>
            </h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary/40 uppercase tracking-widest mb-1">Call/WhatsApp</p>
                  <a href="tel:+919994048827" className="text-xl font-bold text-primary hover:text-accent transition-colors">+91 9994048827</a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary/40 uppercase tracking-widest mb-1">Email Us</p>
                  <a href="mailto:info@pelicanacademy.in" className="text-xl font-bold text-primary hover:text-accent transition-colors">info@pelicanacademy.in</a>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-primary/40 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-xl font-bold text-primary">Mahindra World City, Chengalpattu</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
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
                className="flex items-center gap-2 bg-primary text-white px-6 py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
              >
                <Phone size={24} />
                Call Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100"
          >
            <form action="https://formsubmit.co/9994048827" method="POST" className="space-y-6">
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New Inquiry from Pelican Academy Website" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary/60 ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary/60 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 00000 00000"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-primary/60 ml-1">Inquiry Type</label>
                <select
                  name="type"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all appearance-none"
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
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-accent focus:ring-4 focus:ring-accent/10 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all"
              >
                Send Inquiry
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Google Maps Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 w-full h-[400px] rounded-[3rem] overflow-hidden grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 shadow-lg border border-gray-100"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15563.483103285747!2d80.00517835!3d12.721469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f86561a35597%3A0xc3f982d1c686e0!2sMahindra%20World%20City%2C%20Chengalpattu%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
