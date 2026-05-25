import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import ServiceGrid from "@/components/sections/ServiceGrid";
import About from "@/components/sections/About";
import Courses from "@/components/sections/Courses";
import LearningModes from "@/components/sections/LearningModes";
import TeacherTraining from "@/components/sections/TeacherTraining";
import Franchise from "@/components/sections/Franchise";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ServiceGrid />
      <About />
      <Courses />
      <LearningModes />
      <TeacherTraining />
      <Franchise />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* Global Floating WhatsApp Button */}
      <a
        href="https://wa.me/919994048827"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-2xl shadow-[0_20px_50px_rgba(37,211,102,0.3)] flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-300 active:scale-95 group"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-md"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
        <span className="absolute right-full mr-4 bg-white text-primary-deep px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-primary/5">
          Chat with us
        </span>
      </a>
    </main>
  );
}
