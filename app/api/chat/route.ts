import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()

  // Add system message to help the AI assistant respond appropriately
  const systemMessage = {
    role: "system",
    content: `You are a helpful customer support AI assistant for SupportHub, a customer support platform.
    
    Your goal is to provide helpful, accurate, and friendly responses to customer inquiries.
    
    Common topics you can help with:
    - Account management (password resets, profile updates)
    - Billing questions (subscription plans, payment methods)
    - Technical issues (troubleshooting common problems)
    - Product features (how to use specific features)
    
    If you don't know the answer to a question, suggest that the user submit a support ticket for assistance from the human support team.
    
    Always be polite, professional, and empathetic in your responses.`,
  }

  // Add system message to the beginning of the messages array
  const messagesWithSystem = [systemMessage, ...messages]

  const result = streamText({
    model: openai("gpt-4o"),
    messages: messagesWithSystem,
  })

  return result.toDataStreamResponse()
}
