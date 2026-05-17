"use client";

import { motion } from "framer-motion";
import { Laptop, Briefcase, GraduationCap, School, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Learning Portal",
    description: "Interactive digital tools for visualization and mental math practice from home.",
    icon: Laptop,
    href: "#",
    color: "bg-blue-500/10 text-blue-600",
    hoverColor: "group-hover:bg-blue-600"
  },
  {
    title: "Franchise",
    description: "Start your own academy with zero inventory and world-class support systems.",
    icon: Briefcase,
    href: "#franchise",
    color: "bg-orange-500/10 text-orange-600",
    hoverColor: "group-hover:bg-orange-600"
  },
  {
    title: "Teacher Training",
    description: "Get ISO 9001:2015 certified as a professional Abacus and Vedic Math instructor.",
    icon: GraduationCap,
    href: "#teacher-training",
    color: "bg-green-500/10 text-green-600",
    hoverColor: "group-hover:bg-green-600"
  },
  {
    title: "School Programs",
    description: "Integrate our proven curriculum directly into your school's academic schedule.",
    icon: School,
    href: "#contact",
    color: "bg-purple-500/10 text-purple-600",
    hoverColor: "group-hover:bg-purple-600"
  }
];

export default function ServiceGrid() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-10 rounded-[2.5rem] border border-primary/5 hover:border-transparent transition-all duration-500 bg-white hover:shadow-2xl hover:shadow-primary/10 flex flex-col items-start"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} ${service.hoverColor} group-hover:text-white flex items-center justify-center mb-8 transition-all duration-500`}>
                <service.icon size={32} />
              </div>
              <h4 className="text-2xl font-poppins font-bold text-primary-deep mb-4">{service.title}</h4>
              <p className="text-text-secondary text-sm leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              <Link 
                href={service.href}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-deep group-hover:text-accent transition-colors"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
