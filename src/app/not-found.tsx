import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background-warm flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-md w-full text-center">
          <h1 className="text-9xl font-poppins font-bold text-primary/10">404</h1>
          <div className="-mt-12 relative z-10">
            <h2 className="text-4xl font-poppins font-bold text-primary-deep mb-4">Page Not Found</h2>
            <p className="text-text-secondary text-lg mb-10">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link href="/" className="btn-primary inline-flex">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
