import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, LifeBuoy } from "lucide-react"

export default function TicketSuccess() {
  // Generate a random ticket ID
  const ticketId = `TKT-${Math.floor(100000 + Math.random() * 900000)}`

  return (
    <div className="min-h-screen bg-slate-50">
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
        </div>
      </header>

      <main className="container mx-auto py-12">
        <Card className="max-w-md mx-auto text-center">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="text-2xl">Support Request Submitted!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-600">
              Thank you for submitting your support request. Our team will review your issue and respond as soon as
              possible.
            </p>

            <div className="bg-slate-100 p-4 rounded-lg">
              <p className="text-sm text-slate-500">Your Ticket ID</p>
              <p className="text-xl font-mono font-semibold">{ticketId}</p>
            </div>

            <p className="text-sm text-slate-500">
              We've sent a confirmation email with these details to your email address. Please keep your ticket ID for
              reference.
            </p>
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <Button asChild className="w-full">
              <Link href="/tickets">View My Tickets</Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link href="/">Return to Home</Link>
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
