import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { LifeBuoy, Search } from "lucide-react"

// FAQ categories and questions
const faqCategories = [
  {
    id: "account",
    title: "Account Management",
    description: "Questions about managing your account",
    faqs: [
      {
        question: "How do I reset my password?",
        answer:
          "To reset your password, click on the 'Forgot Password' link on the login page. You will receive an email with instructions to reset your password. Follow the link in the email and create a new password.",
      },
      {
        question: "How can I update my profile information?",
        answer:
          "You can update your profile information by logging into your account and navigating to the 'Profile' or 'Account Settings' section. From there, you can edit your personal information, contact details, and preferences.",
      },
      {
        question: "Can I have multiple users on one account?",
        answer:
          "Yes, depending on your subscription plan, you can add multiple users to your account. Navigate to 'Account Settings' > 'Users' to manage user access and permissions. Each user will have their own login credentials but will be associated with your account.",
      },
    ],
  },
  {
    id: "billing",
    title: "Billing and Payments",
    description: "Questions about billing, invoices, and payments",
    faqs: [
      {
        question: "How can I view my current subscription plan?",
        answer:
          "You can view your current subscription plan by logging into your account and navigating to 'Billing' or 'Subscription' in your account settings. This section will display your current plan, billing cycle, and payment method.",
      },
      {
        question: "How do I update my payment method?",
        answer:
          "To update your payment method, go to 'Account Settings' > 'Billing' > 'Payment Methods'. From there, you can add a new payment method or edit existing ones. Make sure to set your preferred payment method as the default.",
      },
      {
        question: "Can I get a refund for my subscription?",
        answer:
          "Our refund policy depends on your subscription plan and how long you've been subscribed. Please refer to our Terms of Service for detailed information or contact our support team for assistance with refund requests.",
      },
    ],
  },
  {
    id: "technical",
    title: "Technical Issues",
    description: "Common technical problems and solutions",
    faqs: [
      {
        question: "Why is the application running slowly?",
        answer:
          "Slow performance can be caused by various factors including internet connection issues, browser cache, or system resources. Try clearing your browser cache, closing unnecessary applications, or using a different browser. If the issue persists, please contact our support team.",
      },
      {
        question: "How do I troubleshoot login issues?",
        answer:
          "If you're having trouble logging in, first ensure you're using the correct email and password. Try resetting your password, clearing browser cookies, or using incognito/private browsing mode. Also, check if your account has been locked due to multiple failed login attempts.",
      },
      {
        question: "The system is showing an error message. What should I do?",
        answer:
          "If you encounter an error message, first try refreshing the page. If the error persists, note down the error code or message, take a screenshot if possible, and contact our support team with these details. This will help us diagnose and resolve the issue more quickly.",
      },
    ],
  },
  {
    id: "features",
    title: "Features and Functionality",
    description: "Learn how to use specific features",
    faqs: [
      {
        question: "How do I export data from the system?",
        answer:
          "To export data, navigate to the relevant section (e.g., Reports, Analytics) and look for an 'Export' or 'Download' button. You can typically choose between formats like CSV, Excel, or PDF. Select your preferred format and date range if applicable, then click Export.",
      },
      {
        question: "Can I customize the dashboard?",
        answer:
          "Yes, you can customize your dashboard by clicking on the 'Customize' or 'Edit' button usually located in the top right corner of the dashboard. From there, you can add, remove, or rearrange widgets, change the layout, and set your preferences for data visualization.",
      },
      {
        question: "How do I set up automated reports?",
        answer:
          "To set up automated reports, go to the 'Reports' section and select the report you want to automate. Look for a 'Schedule' or 'Automate' option. You can then configure the frequency (daily, weekly, monthly), recipients, and format of the report. Save your settings to activate the automation.",
      },
    ],
  },
]

export default function FAQPage() {
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
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 mb-6">
            Find answers to common questions about our products and services. If you can't find what you're looking for,
            feel free to contact our support team.
          </p>

          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <Input placeholder="Search for answers..." className="pl-10 py-6 text-lg" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {faqCategories.map((category) => (
            <Card key={category.id} className="h-full">
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-slate-600">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
          <p className="text-slate-600 mb-6">
            Our support team is here to help. Submit a ticket or chat with our AI assistant for immediate assistance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/tickets/new">Submit a Ticket</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/chat">Chat with AI</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
