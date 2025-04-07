import Link from "next/link";
import { Zap } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="container mx-auto py-6 px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Zap className="h-6 w-6" />
          <span className="text-xl font-heading font-bold">Waitlo</span>
        </Link>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300">Last Updated: April 7, 2025</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
          <p>
            At Waitlo ("we," "our," or "us"), we respect your privacy and are
            committed to protecting the personal information you provide to us.
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you use our waitlist management
            service (the "Service").
          </p>
          <p>
            Please read this Privacy Policy carefully. By accessing or using our
            Service, you acknowledge that you have read, understood, and agree
            to be bound by this Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            2. Information We Collect
          </h2>

          <h3 className="text-xl font-bold mt-6 mb-3">
            2.1 Information You Provide
          </h3>
          <p>We collect information that you voluntarily provide when you:</p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Register for an account</li>
            <li>Create and manage waitlists</li>
            <li>Contact our support team</li>
            <li>Subscribe to our newsletters</li>
          </ul>
          <p>
            This information may include your name, email address, company name,
            and any other information you choose to provide.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">
            2.2 Information Collected Through Your Use of the Service
          </h3>
          <p>
            When you use our Service, we may automatically collect certain
            information, including:
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>
              Log data (IP address, browser type, pages visited, time spent)
            </li>
            <li>Device information (hardware model, operating system)</li>
            <li>Usage data (features used, actions taken)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-3">
            2.3 Information Collected from Your Users
          </h3>
          <p>
            Through our Service, you may collect information from your users who
            sign up for your waitlists. This typically includes email addresses
            and any additional information you configure your waitlist to
            collect.
          </p>
          <p>
            You are responsible for obtaining appropriate consent from your
            users for the collection and processing of their information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            3. How We Use Your Information
          </h2>
          <p>
            We use the information we collect for various purposes, including
            to:
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Provide, maintain, and improve our Service</li>
            <li>Process transactions and manage your account</li>
            <li>Send you technical notices, updates, and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Monitor and analyze trends, usage, and activities</li>
            <li>Detect, prevent, and address technical issues</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            4. How We Share Your Information
          </h2>
          <p>We may share your information in the following circumstances:</p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>With service providers who perform services on our behalf</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights, privacy, safety, or property</li>
            <li>
              In connection with a business transfer (merger, acquisition, etc.)
            </li>
            <li>With your consent or at your direction</li>
          </ul>
          <p>
            We do not sell your personal information or the information of your
            users.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect the security of your personal information. However, no
            method of transmission over the Internet or electronic storage is
            100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            6. Your Rights and Choices
          </h2>
          <p>
            Depending on your location, you may have certain rights regarding
            your personal information, including:
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Accessing, correcting, or deleting your information</li>
            <li>
              Restricting or objecting to our processing of your information
            </li>
            <li>
              Receiving a copy of your information in a structured,
              machine-readable format
            </li>
            <li>Withdrawing consent where processing is based on consent</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information
            provided in the "Contact Us" section.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy, unless a
            longer retention period is required or permitted by law.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            8. Children's Privacy
          </h2>
          <p>
            Our Service is not directed to children under the age of 13, and we
            do not knowingly collect personal information from children under
            13. If you believe we have collected information from a child under
            13, please contact us.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            9. International Data Transfers
          </h2>
          <p>
            Your information may be transferred to, and processed in, countries
            other than the country in which you reside. These countries may have
            data protection laws that are different from the laws of your
            country.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            10. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. If we make
            material changes, we will notify you through the Service or by other
            means.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">11. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p className="mt-2">Email: pawel.trela.dev@gmail.com</p>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6">
          <Link href="/" className="text-blue-400 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
