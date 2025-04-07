"use client"

import { WaitlistForm } from "@/components/waitlist-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DemoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="container mx-auto py-6 px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          <span className="text-xl font-heading font-bold">Waitly</span>
        </Link>
        <Button variant="outline" asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Waitly Demo</h1>
          <p className="text-lg text-gray-300 mb-10 text-center">
            This is how your waitlist form will look. Try submitting your email to see it in action.
          </p>

          <div className="p-8 rounded-lg bg-gray-900 bg-opacity-30 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-center">Join Our Waitlist</h2>
            <p className="text-gray-300 mb-6 text-center">
              Be the first to know when we launch. No spam, just updates.
            </p>
            <WaitlistForm />
          </div>

          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-bold mb-4">How to Implement</h2>
            <div className="p-4 rounded-lg bg-gray-900 bg-opacity-30">
              <p className="text-sm font-mono mb-2 text-gray-400">HTML & JavaScript</p>
              <pre className="p-4 rounded bg-black overflow-x-auto">
                <code className="text-sm text-gray-300">
                  {`<form id="waitlist-form">
  <input type="email" placeholder="Your email" required />
  <button type="submit">Join Waitlist</button>
</form>

<script>
  document.getElementById('waitlist-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    
    // Replace with your API key
    const response = await fetch('https://api.waitly.dev/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
      },
      body: JSON.stringify({ email })
    });
    
    if (response.ok) {
      alert('Thanks for joining our waitlist!');
    }
  });
</script>`}
                </code>
              </pre>
            </div>

            <div className="p-4 rounded-lg bg-gray-900 bg-opacity-30">
              <p className="text-sm font-mono mb-2 text-gray-400">React Component</p>
              <pre className="p-4 rounded bg-black overflow-x-auto">
                <code className="text-sm text-gray-300">
                  {`import { useState } from 'react';

function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.waitly.dev/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_API_KEY'
        },
        body: JSON.stringify({ email })
      });
      
      if (response.ok) {
        alert('Thanks for joining our waitlist!');
        setEmail('');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        required
      />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Joining...' : 'Join Waitlist'}
      </button>
    </form>
  );
}`}
                </code>
              </pre>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/">Get Your API Key →</Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-6 border-t border-gray-800">
        <p className="text-center text-sm text-gray-400">© 2025 Waitly. All rights reserved.</p>
      </footer>
    </div>
  )
}

