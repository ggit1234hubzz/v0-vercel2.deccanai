import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LifeBuoy, Plus, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

// Mock ticket data
const tickets = [
  {
    id: "TKT-123456",
    subject: "Cannot access my account after password reset",
    status: "open",
    priority: "high",
    created: "2025-05-10T14:30:00",
    updated: "2025-05-11T09:15:00",
  },
  {
    id: "TKT-123455",
    subject: "Billing question about my recent invoice",
    status: "in-progress",
    priority: "medium",
    created: "2025-05-08T11:20:00",
    updated: "2025-05-11T08:45:00",
  },
  {
    id: "TKT-123454",
    subject: "Feature request: Dark mode for dashboard",
    status: "open",
    priority: "low",
    created: "2025-05-07T16:45:00",
    updated: "2025-05-10T13:30:00",
  },
  {
    id: "TKT-123453",
    subject: "Error message when uploading files",
    status: "closed",
    priority: "high",
    created: "2025-05-05T09:10:00",
    updated: "2025-05-09T14:20:00",
  },
]

export default function TicketsPage() {
  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  // Function to get status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-blue-100 text-blue-800"
      case "in-progress":
        return "bg-yellow-100 text-yellow-800"
      case "closed":
        return "bg-green-100 text-green-800"
      default:
        return "bg-slate-100 text-slate-800"
    }
  }

  // Function to get priority badge color
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "low":
        return "bg-slate-100 text-slate-800"
      case "medium":
        return "bg-blue-100 text-blue-800"
      case "high":
        return "bg-red-100 text-red-800"
      default:
        return "bg-slate-100 text-slate-800"
    }
  }

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
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">My Support Tickets</h2>
          <Button asChild>
            <Link href="/tickets/new" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              New Ticket
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            <Input placeholder="Search tickets..." className="pl-10" />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              All
            </Button>
            <Button variant="outline" size="sm">
              Open
            </Button>
            <Button variant="outline" size="sm">
              Closed
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-0">
            <CardTitle>Support Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full mt-4">
                <thead>
                  <tr className="text-left border-b">
                    <th className="pb-3 font-medium text-slate-500">Ticket ID</th>
                    <th className="pb-3 font-medium text-slate-500">Subject</th>
                    <th className="pb-3 font-medium text-slate-500">Status</th>
                    <th className="pb-3 font-medium text-slate-500">Priority</th>
                    <th className="pb-3 font-medium text-slate-500">Created</th>
                    <th className="pb-3 font-medium text-slate-500">Last Update</th>
                    <th className="pb-3 font-medium text-slate-500">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((ticket) => (
                    <tr key={ticket.id} className="border-b hover:bg-slate-50">
                      <td className="py-4 text-sm font-mono">{ticket.id}</td>
                      <td className="py-4 font-medium">{ticket.subject}</td>
                      <td className="py-4">
                        <Badge variant="outline" className={getStatusColor(ticket.status)}>
                          {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
                        </Badge>
                      </td>
                      <td className="py-4">
                        <Badge variant="outline" className={getPriorityColor(ticket.priority)}>
                          {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)}
                        </Badge>
                      </td>
                      <td className="py-4 text-sm text-slate-500">{formatDate(ticket.created)}</td>
                      <td className="py-4 text-sm text-slate-500">{formatDate(ticket.updated)}</td>
                      <td className="py-4">
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/tickets/${ticket.id}`}>View</Link>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
