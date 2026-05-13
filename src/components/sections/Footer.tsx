import Link from "next/link";
import { Mail, Phone, MapPin, Globe, Share2, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary font-bold text-xl">
              P
            </div>
            <div className="flex flex-col text-white">
              <span className="font-bold text-lg leading-tight tracking-tight">PELICAN</span>
              <span className="text-[10px] font-semibold tracking-widest opacity-60 uppercase -mt-0.5">Academy</span>
            </div>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            An ISO 9001:2015 Certified Institution committed to empowering students through innovative learning methods since 2021.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
              <Globe size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
              <MessageCircle size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all">
              <Share2 size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-accent">Quick Links</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li><Link href="#about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link href="#courses" className="hover:text-accent transition-colors">Courses</Link></li>
            <li><Link href="#franchise" className="hover:text-accent transition-colors">Franchise</Link></li>
            <li><Link href="#gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
            <li><Link href="#contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-accent">Our Courses</h4>
          <ul className="space-y-4 text-white/60 text-sm">
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
          <ul className="space-y-4 text-white/60 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-accent shrink-0" />
              <span>Mahindra World City, Chengalpattu, Tamil Nadu</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-accent shrink-0" />
              <a href="tel:+919994048827" className="hover:text-accent transition-colors">+91 9994048827</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-accent shrink-0" />
              <a href="mailto:info@pelicanacademy.in" className="hover:text-accent transition-colors">info@pelicanacademy.in</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:row items-center justify-between gap-4 text-white/40 text-xs text-center md:text-left">
        <p>© {currentYear} Pelican Academy. All rights reserved.</p>
        <p>ISO 9001:2015 Certified Institution</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
