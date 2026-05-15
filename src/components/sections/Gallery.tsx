"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera } from "lucide-react";

const galleryImages = [
  { url: "/images/pexels-shootsaga-31447794.jpg", title: "Interactive Learning" },
  { url: "/images/pexels-mary-taylor-5896479.jpg", title: "Creative Art" },
  { url: "/images/pexels-rdne-8500618.jpg", title: "Skill Development" },
  { url: "/images/pexels-tara-winstead-6693302.jpg", title: "Focused Study" },
  { url: "/images/pexels-tima-miroshnichenko-5427868.jpg", title: "Future Leaders" },
  { url: "/images/pexels-shootsaga-30889597.jpg", title: "Global Standards" },
  { url: "/images/pexels-aminulislambulbul-32628278.jpg", title: "Academic Excellence" },
  { url: "/images/pexels-irrabagon-37358629.jpg", title: "Young Achievers" },
  { url: "/images/pexels-swastikarora-18012459.jpg", title: "Growth & Innovation" }
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-spacing bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-primary/5 px-5 py-2.5 rounded-full mb-8"
          >
            <Camera size={18} className="text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Visual Journey</span>
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-poppins font-bold text-primary-deep mb-8"
          >
            Our <span className="text-accent italic font-medium">Academy Gallery</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary max-w-2xl mx-auto text-lg font-inter mb-16"
          >
            A glimpse into the vibrant learning environment and creative milestones at Pelican Academy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square rounded-[3rem] overflow-hidden group shadow-2xl border border-primary/5 cursor-pointer"
            >
              <Image
                src={image.url}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/90 via-primary-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-12">
                <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-3">Gallery</p>
                  <p className="text-background-warm font-poppins font-bold text-3xl leading-tight">{image.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
