"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { src: "/images/whatsapp-1.jpg", alt: "Affiliation Logo 1" },
  { src: "/images/whatsapp-2.jpg", alt: "Affiliation Logo 2" },
  { src: "/images/whatsapp-3.jpg", alt: "Affiliation Logo 3" },
];

export default function Affiliations() {
  return (
    <section className="bg-white py-12 border-y border-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
          <p className="text-xs font-bold text-text-secondary uppercase tracking-[0.3em] mb-4 md:mb-0">
            Our Proud <br className="hidden md:block" /> Affiliations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative w-24 h-12 md:w-32 md:h-16 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
