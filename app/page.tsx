import { Zap, Code, DollarSign, User, Key, LayoutTemplate, Rocket, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-black text-white">
      <header className="container mx-auto py-6 px-4 flex items-center justify-between sticky top-0 z-50 bg-black/80 backdrop-blur-sm">
        <Link href="/" className="flex items-center space-x-2">
          <Zap className="h-6 w-6" />
          <span className="text-xl font-heading font-bold">Waitly</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm hover:text-gray-300 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm hover:text-gray-300 transition-colors">
            How it works
          </a>
          <a href="#faq" className="text-sm hover:text-gray-300 transition-colors">
            FAQ
          </a>
          <Button variant="outline" className="rounded-full" asChild>
            <Link href="#get-started">Sign In →</Link>
          </Button>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <span className="sr-only">Open menu</span>
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
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </Button>
      </header>

      {/* Hero Section with Radial Glow */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 py-24 md:py-36 lg:py-48">
        {/* Radial Gradient Background - Extended and faded */}
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-500/15 rounded-full blur-[120px] opacity-60"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
            Launch Your Waitlist
            <br />
            in Minutes—for Free
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            The easiest way to collect interest in your product. No backend, no mailers. Just plug in your unique API
            key and you&apos;re live.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <Button
              size="lg"
              className="px-8 py-3 h-auto rounded-full bg-white text-black hover:bg-gray-200 text-lg"
              asChild
            >
              <a href="#get-started" id="get-started">
                Get Started Free →
              </a>
            </Button>
            <a href="#how-it-works" className="text-sm hover:text-gray-300 transition-colors mt-4">
              → or see how it works
            </a>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section id="features" className="container mx-auto px-4 py-28 scroll-mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col p-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-all">
            <div className="mb-4 p-3 rounded-full bg-zinc-800 w-10 h-10 flex items-center justify-center">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold mb-2">Zero Setup</h3>
            <p className="text-gray-400">Just copy your key and you&apos;re live. No infrastructure needed.</p>
          </div>
          <div className="flex flex-col p-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-all">
            <div className="mb-4 p-3 rounded-full bg-zinc-800 w-10 h-10 flex items-center justify-center">
              <LayoutTemplate className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold mb-2">Instant Forms</h3>
            <p className="text-gray-400">Embed a ready-to-go waitlist component anywhere.</p>
          </div>
          <div className="flex flex-col p-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-all">
            <div className="mb-4 p-3 rounded-full bg-zinc-800 w-10 h-10 flex items-center justify-center">
              <DollarSign className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold mb-2">Completely Free</h3>
            <p className="text-gray-400">No pricing tiers, no catch. Waitly is 100% free.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 scroll-mt-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-8">
                <User className="h-7 w-7" />
              </div>
              <div className="text-sm text-gray-400 mb-2">Step 1</div>
              <h3 className="text-2xl font-bold mb-4">Create an Account</h3>
              <p className="text-gray-400">Log in to the Waitly app and create a project.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-8">
                <Key className="h-7 w-7" />
              </div>
              <div className="text-sm text-gray-400 mb-2">Step 2</div>
              <h3 className="text-2xl font-bold mb-4">Get Your API Key</h3>
              <p className="text-gray-400">Every waitlist gets a unique private key and endpoint.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-8">
                <Code className="h-7 w-7" />
              </div>
              <div className="text-sm text-gray-400 mb-2">Step 3</div>
              <h3 className="text-2xl font-bold mb-4">Connect & Go</h3>
              <p className="text-gray-400">Use our embed code or your own form with the endpoint.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-all">
              <div className="mb-4 p-3 rounded-full bg-zinc-800 w-10 h-10 flex items-center justify-center">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold mb-3">Go Live in Seconds</h3>
              <p className="text-gray-400">No code backend setup. Works with any frontend.</p>
            </div>
            <div className="p-6 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-all">
              <div className="mb-4 p-3 rounded-full bg-zinc-800 w-10 h-10 flex items-center justify-center">
                <Code className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold mb-3">Developer Friendly</h3>
              <p className="text-gray-400">Designed for SaaS founders and indie hackers.</p>
            </div>
            <div className="p-6 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-all">
              <div className="mb-4 p-3 rounded-full bg-zinc-800 w-10 h-10 flex items-center justify-center">
                <Rocket className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold mb-3">Built for Speed</h3>
              <p className="text-gray-400">Fast, modern API. See new signups instantly.</p>
            </div>
            <div className="p-6 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-all">
              <div className="mb-4 p-3 rounded-full bg-zinc-800 w-10 h-10 flex items-center justify-center">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold mb-3">Dashboard Included</h3>
              <p className="text-gray-400">View signups right inside your Waitly project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* No Pricing Section */}
      <section className="py-28 text-center bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">No pricing. Seriously. It&apos;s free.</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            We built Waitly for founders like you. No hidden fees. No billing settings. Just launch.
          </p>
          <div className="flex justify-center">
            <div className="text-9xl font-bold">
              <span className="text-white">$</span>
              <span className="text-gray-400">0</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-zinc-900">
              <p className="text-gray-300 mb-4">
                &quot;Found this through Bluesky — literally live in 5 minutes. 🔥&quot;
              </p>
              <p className="text-gray-500">@founderxyz</p>
            </div>
            <div className="p-6 rounded-lg bg-zinc-900">
              <p className="text-gray-300 mb-4">&quot;No need to set up mailers or mess with Airtable again.&quot;</p>
              <p className="text-gray-500">@devonmars</p>
            </div>
            <div className="p-6 rounded-lg bg-zinc-900">
              <p className="text-gray-300 mb-4">
                &quot;Best zero-friction waitlist tool I&apos;ve found. Perfect for MVPs.&quot;
              </p>
              <p className="text-gray-500">@techfounder</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-28 scroll-mt-20 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-zinc-800">
                <AccordionTrigger className="text-left py-6">Do I need a backend to use this?</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Nope. Just your API key and our form or endpoint.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-zinc-800">
                <AccordionTrigger className="text-left py-6">Is it really free?</AccordionTrigger>
                <AccordionContent className="text-gray-400">Yes. Forever. No pricing page needed.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-zinc-800">
                <AccordionTrigger className="text-left py-6">Can I customize the form?</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Yes — use our component or connect your own.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-zinc-800">
                <AccordionTrigger className="text-left py-6">How do I contact the people who sign up?</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  All your waitlist data is available in your Waitly dashboard. You can export it anytime or use our API
                  to connect to your email service.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b border-zinc-800">
                <AccordionTrigger className="text-left py-6">
                  Is there a limit to how many signups I can collect?
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  No limits. Collect as many signups as you want.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Collect Signups?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Create your free waitlist project and start building your audience today.
          </p>
          <Button
            size="lg"
            className="px-8 py-3 h-auto rounded-full bg-white text-black hover:bg-gray-200 text-lg"
            asChild
          >
            <a href="#get-started">Get Started Now →</a>
          </Button>
        </div>
      </section>

      {/* Expanded Footer */}
      <footer className="py-16 border-t border-zinc-800 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="h-6 w-6" />
                <span className="text-xl font-heading font-bold">Waitly</span>
              </div>
              <p className="text-gray-400 mb-4">The easiest way to collect interest in your product.</p>
              <p className="text-gray-500">© 2025 Waitly. Built for builders.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Connect</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Tommy</h4>
                  <div className="flex space-x-3">
                    <a
                      href="https://bsky.app/profile/tommy-frontdev.bsky.social"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                        <line x1="9" y1="9" x2="9.01" y2="9" />
                        <line x1="15" y1="9" x2="15.01" y2="9" />
                      </svg>
                    </a>
                    <a
                      href="https://x.com/0xyyy77"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Mateusz</h4>
                  <div className="flex space-x-3">
                    <a
                      href="https://bsky.app/profile/mpoweredo.bsky.social"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                        <line x1="9" y1="9" x2="9.01" y2="9" />
                        <line x1="15" y1="9" x2="15.01" y2="9" />
                      </svg>
                    </a>
                    <a
                      href="https://x.com/mpoweredo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

