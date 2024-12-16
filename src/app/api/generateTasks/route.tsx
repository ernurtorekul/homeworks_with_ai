import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { topics } = body;

  if (!topics || !Array.isArray(topics) || topics.length === 0) {
    return NextResponse.json({ error: "Invalid topics" }, { status: 400 });
  }

  const prompt = `
    Generate hw tasks for the topics:
    ${topics.map((t, i) => `${i + 1}. ${t}`).join("\n")}
  `;

  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "Missing Gemini API key" }, { status: 500 });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    const data = await response.json();
    return NextResponse.json({ tasks: data });
  } catch (error) {
    console.error("Error connecting to Gemini:", error);
    return NextResponse.json({ error: "Failed to generate tasks" }, { status: 500 });
  }
}
