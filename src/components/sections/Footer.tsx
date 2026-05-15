import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Globe, Camera, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-deep text-background-warm pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-6">
            <div className="relative w-12 h-12 overflow-hidden rounded-xl border-2 border-accent-gold/20">
              <Image
                src="/logo.jpeg"
                alt="Pelican Academy Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col text-background-warm">
              <span className="font-bold text-lg leading-tight tracking-tight">PELICAN</span>
              <span className="text-[10px] font-semibold tracking-widest opacity-60 uppercase -mt-0.5">Academy</span>
            </div>
          </Link>
          <p className="text-background-warm/60 text-sm leading-relaxed mb-6">
            An ISO 9001:2015 Certified Institution committed to empowering students through innovative learning methods in Chengalpattu.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.facebook.com/pelicanacademychengalpattu" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background-warm/10 flex items-center justify-center hover:bg-accent hover:text-primary-deep transition-all"
              aria-label="Facebook"
            >
              <Globe size={18} />
            </a>
            <a 
              href="https://www.instagram.com/pelican_academy_chengalpattu" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background-warm/10 flex items-center justify-center hover:bg-accent hover:text-primary-deep transition-all"
              aria-label="Instagram"
            >
              <Camera size={18} />
            </a>
            <a 
              href="https://wa.me/919994048827" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background-warm/10 flex items-center justify-center hover:bg-accent hover:text-primary-deep transition-all"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-accent">Quick Links</h4>
          <ul className="space-y-4 text-background-warm/60 text-sm">
            <li><Link href="/#about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link href="/#courses" className="hover:text-accent transition-colors">Courses</Link></li>
            <li><Link href="/#franchise" className="hover:text-accent transition-colors">Franchise</Link></li>
            <li><Link href="/#gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
            <li><Link href="/#contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-accent">Our Courses</h4>
          <ul className="space-y-4 text-background-warm/60 text-sm">
            <li>Abacus Training</li>
            <li>Vedic Mathematics</li>
            <li>Jolly Phonics</li>
            <li>Handwriting & Calligraphy</li>
            <li>English Grammar</li>
            <li>Teacher Training</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-accent">Contact Info</h4>
          <ul className="space-y-4 text-background-warm/60 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-accent shrink-0" />
              <span>Near Parashakti Hospital, Singaperumalkoil, Chengalpattu, TN 603204</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-accent shrink-0" />
              <a href="tel:+919994048827" className="hover:text-accent transition-colors">+91 9994048827</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-accent shrink-0" />
              <a href="mailto:pelicanacademy.21@gmail.com" className="hover:text-accent transition-colors">pelicanacademy.21@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-background-warm/10 flex flex-col md:flex-row items-center justify-between gap-4 text-background-warm/40 text-xs text-center md:text-left">
        <p>© {currentYear} Pelican Academy. All rights reserved.</p>
        <p>ISO 9001:2015 Certified Institution</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-background-warm transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-background-warm transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
