// DEV-ONLY ROUTE — P0-01 verification. Remove or auth-protect before launch.
// Returns 404 in production regardless of request.
import { NextRequest, NextResponse } from "next/server";
import { generateText } from "@/lib/ai";

export async function POST(request: NextRequest) {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  let prompt: string;
  try {
    const body = await request.json();
    prompt = body?.prompt;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!prompt || typeof prompt !== "string") {
    return NextResponse.json(
      { error: "prompt is required and must be a string" },
      { status: 400 }
    );
  }

  try {
    const response = await generateText(prompt);
    return NextResponse.json({ response });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
