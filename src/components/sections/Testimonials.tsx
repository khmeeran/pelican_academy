"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sundar",
    role: "Parent",
    content: "The transformation in my child's mental calculation speed after the Abacus program at Pelican Academy is truly amazing. The teachers are very professional.",
    rating: 5
  },
  {
    name: "Arun Kumar",
    role: "Franchise Partner",
    content: "Starting a Pelican Academy center was the best business decision. The support and training provided by Madhumathi ma'am and team is top-notch.",
    rating: 5
  },
  {
    name: "Deepika R.",
    role: "Teacher Trainee",
    content: "The teacher training program is very detailed and practical. It gave me the confidence to start my career in education with modern skills.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            Success Stories
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            What Our <span className="gradient-text">Community Says</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 relative group hover:bg-primary transition-colors duration-500"
            >
              <div className="absolute top-8 right-8 text-accent/20 group-hover:text-accent/10 transition-colors">
                <Quote size={60} className="fill-current" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-primary/70 text-lg mb-8 italic group-hover:text-white/80 transition-colors leading-relaxed">
                "{testimonial.content}"
              </p>

              <div>
                <p className="font-bold text-primary text-xl group-hover:text-white transition-colors">{testimonial.name}</p>
                <p className="text-primary/40 text-sm group-hover:text-white/40 transition-colors uppercase tracking-widest font-bold">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
