import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-deep text-background-warm pt-32 pb-16 px-6 relative overflow-hidden">
      {/* Decorative Gold Separator */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="lg:col-span-1">
            <Link href="/#home" className="flex items-center mb-10 group">
              <div className="relative w-48 h-24 transition-all duration-500 group-hover:scale-105">
                <Image
                  src="/logo-transparent.png"
                  alt="Pelican Academy Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-white/60 text-lg leading-relaxed mb-10 font-inter max-w-xs">
              An ISO 9001:2015 Certified Institution dedicated to crafting the future through disciplined excellence.
            </p>
            <div className="flex gap-5">
              {[
                { 
                  icon: (props: React.ComponentProps<"svg">) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>, 
                  href: "https://www.facebook.com/pelicanacademychengalpattu", 
                  label: "Facebook" 
                },
                { 
                  icon: (props: React.ComponentProps<"svg">) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>, 
                  href: "https://www.instagram.com/pelican_academy_chengalpattu", 
                  label: "Instagram" 
                },
                { 
                  icon: MessageCircle, 
                  href: "https://wa.me/919994048827", 
                  label: "WhatsApp" 
                }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 hover:bg-accent hover:border-accent hover:text-primary-deep transition-all duration-300 shadow-lg shadow-black/20 group"
                >
                  <social.icon size={22} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-poppins font-bold text-xl mb-10 text-white flex items-center gap-3">
              Quick Navigation
              <span className="w-10 h-px bg-accent/30" />
            </h4>
            <ul className="space-y-5">
              {[
                { name: "About us", href: "/#about" },
                { name: "Our programs", href: "/#courses" },
                { name: "Teacher training programs", href: "/#teacher-training" },
                { name: "Franchisee", href: "/#franchise" },
                { name: "Contact", href: "/#contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/50 hover:text-accent transition-colors text-lg font-inter flex items-center group">
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-bold text-xl mb-10 text-white flex items-center gap-3">
              Professional Resources
              <span className="w-10 h-px bg-accent/30" />
            </h4>
            <ul className="space-y-5 text-white/50 text-lg font-inter">
              <li><a href="#" className="hover:text-accent transition-colors">Track Certificate</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Free Abacus Worksheets</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Learning Portal Demo</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Franchise Business Plan</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Exam Portal Login</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-bold text-xl mb-10 text-white flex items-center gap-3">
              Reach Us
              <span className="w-10 h-px bg-accent/30" />
            </h4>
            <ul className="space-y-8 text-white/50 text-lg font-inter">
              <li className="flex gap-4">
                <MapPin size={22} className="text-accent shrink-0" />
                <span className="leading-relaxed">Mahindra World City, <br />Chengalpattu, <br />Tamil Nadu</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={22} className="text-accent shrink-0" />
                <a href="tel:+919994048827" className="hover:text-accent transition-colors">+91 9994048827</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={22} className="text-accent shrink-0" />
                <a href="mailto:pelicanacademy.21@gmail.com" className="hover:text-accent transition-colors text-sm">pelicanacademy.21@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-white/30 text-sm font-inter">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 text-center md:text-left">
            <p>© {currentYear} Pelican Academy. All rights reserved.</p>
            <p className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent" />
              ISO 9001:2015 Certified
            </p>
          </div>
          <div className="flex gap-10">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
