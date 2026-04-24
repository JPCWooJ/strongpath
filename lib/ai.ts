import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export const MODEL = "claude-sonnet-4-20250514";

// All Anthropic Claude API calls go through this file.
// Do not import @anthropic-ai/sdk directly in route handlers or components.

export async function generateText(prompt: string): Promise<string> {
  const message = await client.messages.create({
    model: MODEL,
    max_tokens: 1024,
    messages: [{ role: "user", content: prompt }],
  });

  const block = message.content[0];
  if (block.type !== "text") {
    throw new Error(`Unexpected content block type: ${block.type}`);
  }
  return block.text;
}
