import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, LifeBuoy, MessageSquareText, FileQuestion } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <header className="container mx-auto py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <LifeBuoy className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold">SupportHub</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="font-medium">
              Home
            </Link>
            <Link href="/tickets" className="font-medium">
              My Tickets
            </Link>
            <Link href="/faq" className="font-medium">
              FAQ
            </Link>
            <Link href="/contact" className="font-medium">
              Contact
            </Link>
          </nav>
          <div className="flex gap-3">
            <Button variant="outline">Sign In</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-12">
        <section className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Customer Support Made Simple</h2>
          <p className="text-xl text-slate-600 mb-8">
            Get the help you need, when you need it. Our support system is designed to make your experience seamless.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/tickets/new">Submit a Ticket</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/chat">Chat with AI</Link>
            </Button>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-16">
          <Card>
            <CardHeader>
              <MessageSquareText className="h-10 w-10 text-blue-600 mb-2" />
              <CardTitle>Submit Support Requests</CardTitle>
              <CardDescription>Create and track support tickets with our easy-to-use system</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Submit detailed support requests and receive timely responses from our support team. Track the status of
                your tickets in real-time.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="gap-1" asChild>
                <Link href="/tickets/new">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <FileQuestion className="h-10 w-10 text-blue-600 mb-2" />
              <CardTitle>FAQ Knowledge Base</CardTitle>
              <CardDescription>Find instant answers to common questions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Browse our comprehensive FAQ section to find immediate solutions to common issues and questions about
                our products and services.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="gap-1" asChild>
                <Link href="/faq">
                  Explore FAQs <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <MessageSquareText className="h-10 w-10 text-blue-600 mb-2" />
              <CardTitle>AI-Powered Chat Support</CardTitle>
              <CardDescription>Get instant help from our AI assistant</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Chat with our AI assistant for immediate responses to your questions. Available 24/7 to help you resolve
                common issues quickly.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="gap-1" asChild>
                <Link href="/chat">
                  Start Chatting <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">How It Works</h2>
            <p className="text-slate-600">Our support process is designed to be simple and efficient</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Submit Request</h3>
              <p className="text-sm text-slate-600">Fill out our simple support request form</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">Receive Confirmation</h3>
              <p className="text-sm text-slate-600">Get an immediate confirmation with ticket ID</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">Track Progress</h3>
              <p className="text-sm text-slate-600">Monitor the status of your request in real-time</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold mb-2">Get Resolution</h3>
              <p className="text-sm text-slate-600">Receive timely solutions to your issues</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <LifeBuoy className="h-6 w-6 text-blue-400" />
                <h3 className="text-xl font-bold">SupportHub</h3>
              </div>
              <p className="text-slate-300">Providing exceptional customer support solutions to help you succeed.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/tickets" className="hover:text-white">
                    My Tickets
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <Link href="/tickets/new" className="hover:text-white">
                    Submit a Ticket
                  </Link>
                </li>
                <li>
                  <Link href="/chat" className="hover:text-white">
                    Chat Support
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white">
                    Knowledge Base
                  </Link>
                </li>
                <li>
                  <Link href="/status" className="hover:text-white">
                    System Status
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-slate-300">
                <li>support@supporthub.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Support Street, Help City</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>© {new Date().getFullYear()} SupportHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
