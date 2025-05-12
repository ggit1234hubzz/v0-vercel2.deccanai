"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, LifeBuoy, Send } from "lucide-react"

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    initialMessages: [
      {
        id: "welcome-message",
        role: "assistant",
        content: "Hello! I'm your AI support assistant. How can I help you today?",
      },
    ],
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

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

      <main className="container mx-auto py-8">
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>AI Support Assistant</CardTitle>
            <CardDescription>
              Chat with our AI assistant for immediate help with common questions and issues.
            </CardDescription>
          </CardHeader>
          <CardContent className="h-[500px] flex flex-col">
            <div className="flex-1 overflow-y-auto mb-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === "user" ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-800"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter>
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message here..."
                disabled={isLoading}
                className="flex-1"
              />
              <Button type="submit" disabled={isLoading || !input.trim()}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </form>
          </CardFooter>
        </Card>

        <div className="max-w-3xl mx-auto mt-8 text-center">
          <p className="text-slate-500 text-sm">
            If the AI assistant can't resolve your issue, please{" "}
            <Link href="/tickets/new" className="text-blue-600 hover:underline">
              submit a support ticket
            </Link>{" "}
            for assistance from our support team.
          </p>
        </div>
      </main>
    </div>
  )
}
