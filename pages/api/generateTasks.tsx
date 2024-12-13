import type { NextApiRequest, NextApiResponse } from "next";

type GenerateTasksRequest = {
  topics: string[];
};

type GenerateTasksResponse = {
  tasks?: string[];
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GenerateTasksResponse>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { topics }: GenerateTasksRequest = req.body;

  if (!topics || !Array.isArray(topics) || topics.length === 0) {
    return res.status(400).json({ error: "Invalid topics" });
  }

  console.log("received topics:", topics);

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "Missing Gemini API " });
  }

  const prompt = `
    Generate hw tasks for the topics:
    ${topics.map((t, i) => `${i + 1}. ${t}`).join("\n")}
  `;

  console.log("Generated prompt:", prompt);

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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

    console.log("API response:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API Error:", errorText);
      throw new Error(errorText);
    }

    const data = await response.json();
    console.log("api response:", data);

    res.status(200).json({ tasks: data });
  } catch (error) {
    console.error("Err connecting to Gemini:", error);
    res.status(500).json({ error: "Failed to generate" });
  }
}
