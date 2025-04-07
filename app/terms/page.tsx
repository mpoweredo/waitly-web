import Link from "next/link"
import { Zap } from "lucide-react"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="container mx-auto py-6 px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Zap className="h-6 w-6" />
          <span className="text-xl font-heading font-bold">Waitly</span>
        </Link>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300">Last Updated: April 7, 2025</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
          <p>
            Welcome to Waitly ("we," "our," or "us"). By accessing or using our waitlist management service (the
            "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms,
            please do not use the Service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Description of Service</h2>
          <p>
            Waitly provides a platform for collecting and managing waitlist signups for your products or services. Our
            Service allows you to create, manage, and analyze waitlists through our API and embeddable components.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Account Registration</h2>
          <p>
            To use certain features of the Service, you may need to register for an account. You agree to provide
            accurate, current, and complete information during the registration process and to update such information
            to keep it accurate, current, and complete.
          </p>
          <p>
            You are responsible for safeguarding your account credentials and for all activities that occur under your
            account. You agree to notify us immediately of any unauthorized use of your account.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. API Keys and Security</h2>
          <p>
            As part of the Service, you will receive API keys that allow you to integrate Waitly with your applications.
            You are responsible for keeping your API keys secure and should not share them with unauthorized parties.
          </p>
          <p>
            You agree to implement reasonable security measures to protect your API keys and the data collected through
            our Service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. User Data and Privacy</h2>
          <p>When collecting information from your users through our Service, you agree to:</p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>
              Provide a clear and accessible privacy policy that explains how you collect, use, and share user data
            </li>
            <li>Obtain all necessary consents for the collection and processing of user data</li>
            <li>Use the data collected only for the purposes disclosed to your users</li>
            <li>Comply with all applicable data protection and privacy laws</li>
          </ul>
          <p>
            Please refer to our{" "}
            <Link href="/privacy" className="text-blue-400 hover:underline">
              Privacy Policy
            </Link>{" "}
            for information on how we collect, use, and disclose information from our users.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Acceptable Use</h2>
          <p>You agree not to use the Service to:</p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe the intellectual property rights of others</li>
            <li>Send unsolicited communications (spam)</li>
            <li>Distribute malware or engage in other harmful activities</li>
            <li>Attempt to gain unauthorized access to the Service or its related systems</li>
            <li>Collect or harvest user data without proper consent</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Intellectual Property</h2>
          <p>
            The Service, including all content, features, and functionality, is owned by Waitly and is protected by
            copyright, trademark, and other intellectual property laws.
          </p>
          <p>
            We grant you a limited, non-exclusive, non-transferable, and revocable license to use the Service for its
            intended purposes, subject to these Terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to the Service at any time, with or without cause,
            and with or without notice.
          </p>
          <p>
            Upon termination, your right to use the Service will immediately cease, and you must cease all use of the
            Service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Disclaimer of Warranties</h2>
          <p>
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
            IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
            PURPOSE, OR NON-INFRINGEMENT.
          </p>
          <p>
            WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR
            THAT THE SERVICE IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Limitation of Liability</h2>
          <p>
            IN NO EVENT SHALL WAITLY BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
            DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES,
            RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">11. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. If we make material changes to these Terms, we will
            provide notice through the Service or by other means.
          </p>
          <p>
            Your continued use of the Service after the changes become effective constitutes your acceptance of the new
            Terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">12. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the United States, without
            regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">13. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p className="mt-2">Email: support@waitly.dev</p>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-6">
          <Link href="/" className="text-blue-400 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}

