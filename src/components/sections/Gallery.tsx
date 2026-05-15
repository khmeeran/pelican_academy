"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
    <section id="gallery" className="py-24 px-6 bg-background-warm/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
          >
            Visual Journey
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-primary-deep mb-6"
          >
            Our <span className="gradient-text">Academy Gallery</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primary/60 max-w-2xl mx-auto text-lg mb-12"
          >
            A glimpse into the vibrant learning environment and creative milestones at Pelican Academy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative aspect-square rounded-[2.5rem] overflow-hidden group shadow-xl border border-primary/5 cursor-pointer"
            >
              <Image
                src={image.url}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/90 via-primary-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-10">
                <div>
                  <p className="text-accent font-bold text-xs uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-all delay-100">Gallery</p>
                  <p className="text-background-warm font-bold text-2xl opacity-0 group-hover:opacity-100 transition-all delay-200">{image.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
