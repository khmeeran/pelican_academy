"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sowmya R.",
    role: "Parent of Abacus Student",
    text: "My son's mental calculation speed has improved drastically. He's much more confident with numbers now. The teachers are very patient.",
    image: "/images/pexels-olia-danilevich-6149059.jpg"
  },
  {
    name: "Karthik M.",
    role: "Parent of Jolly Phonics Student",
    text: "I am amazed at how quickly my daughter started reading. The Jolly Phonics method works wonders. Highly recommended!",
    image: "/images/pexels-mary-taylor-5896479.jpg"
  },
  {
    name: "Priya V.",
    role: "Teacher Training Graduate",
    text: "The certification course was comprehensive and professional. It has opened up a new career path for me. Great support from the management.",
    image: "/images/pexels-tima-miroshnichenko-5427868.jpg"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block bg-accent/10 px-4 py-2 rounded-full mb-6">
            <span className="text-xs font-bold text-accent uppercase tracking-[0.2em]">Parent Stories</span>
          </div>
          <h2 className="text-5xl font-poppins font-bold text-primary-deep mb-6">
            Trusted by <span className="text-primary italic font-medium">Hundreds of Families</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="premium-card p-12 relative flex flex-col items-center text-center"
            >
              <div className="absolute top-8 left-10 text-accent/20">
                <Quote size={60} fill="currentColor" />
              </div>
              
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-8 border-4 border-background-warm shadow-xl">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-lg text-text-secondary italic mb-10 leading-relaxed font-inter relative z-10">
                &quot;{testimonial.text}&quot;
              </p>

              <div className="mt-auto">
                <h4 className="text-xl font-bold text-primary-deep">{testimonial.name}</h4>
                <p className="text-xs font-bold text-accent uppercase tracking-widest mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
