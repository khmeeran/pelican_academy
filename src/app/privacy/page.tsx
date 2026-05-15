import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background-warm">
      <Navbar />
      <div className="max-w-4xl mx-auto py-32 px-6">
        <h1 className="text-4xl font-bold text-primary-deep mb-8">Privacy Policy</h1>
        <div className="prose prose-lg text-primary/70 space-y-6">
          <p>Effective Date: January 1, 2024</p>
          <p>
            At Pelican Academy, we value your privacy. This policy explains how we collect and use your information when you visit our website or inquire about our courses.
          </p>
          <h2 className="text-2xl font-bold text-primary-deep mt-8">Information We Collect</h2>
          <p>
            When you use our contact form, we collect your name, phone number, and any message you provide. This information is used solely to respond to your inquiries.
          </p>
          <h2 className="text-2xl font-bold text-primary-deep mt-8">How We Use Your Data</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide information about our courses and services.</li>
            <li>To manage admissions and franchise inquiries.</li>
            <li>To improve our website experience.</li>
          </ul>
          <h2 className="text-2xl font-bold text-primary-deep mt-8">Third-Party Services</h2>
          <p>
            We use FormSubmit to handle form submissions and may use analytics tools to monitor website traffic. We do not sell your personal data to third parties.
          </p>
          <h2 className="text-2xl font-bold text-primary-deep mt-8">Contact Us</h2>
          <p>
            If you have any questions about this policy, please contact us at info@pelicanacademy.in.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
