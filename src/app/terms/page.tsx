import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background-warm">
      <Navbar />
      <div className="max-w-4xl mx-auto py-32 px-6">
        <h1 className="text-4xl font-bold text-primary-deep mb-8">Terms of Service</h1>
        <div className="prose prose-lg text-primary/70 space-y-6">
          <p>Effective Date: January 1, 2024</p>
          <p>
            Welcome to Pelican Academy. By accessing our website, you agree to comply with the following terms and conditions.
          </p>
          <h2 className="text-2xl font-bold text-primary-deep mt-8">Use of Content</h2>
          <p>
            All content on this website, including text, images, and logos, is the property of Pelican Academy and is protected by copyright laws. You may not use or reproduce our content without prior written permission.
          </p>
          <h2 className="text-2xl font-bold text-primary-deep mt-8">Course Information</h2>
          <p>
            While we strive for accuracy, course details, schedules, and pricing are subject to change. Please contact our center directly for the most up-to-date information.
          </p>
          <h2 className="text-2xl font-bold text-primary-deep mt-8">Franchise Inquiries</h2>
          <p>
            Submission of a franchise inquiry form does not guarantee a franchise agreement. All applications are subject to a rigorous review process.
          </p>
          <h2 className="text-2xl font-bold text-primary-deep mt-8">Limitation of Liability</h2>
          <p>
            Pelican Academy is not liable for any direct or indirect damages arising from the use of this website or the information provided herein.
          </p>
          <h2 className="text-2xl font-bold text-primary-deep mt-8">Governing Law</h2>
          <p>
            These terms are governed by the laws of India and the jurisdiction of the courts in Chengalpattu, Tamil Nadu.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
