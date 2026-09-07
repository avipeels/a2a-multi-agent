import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;
if(!apiKey) {
  throw new Error("GEMINI_API_KEY is not set in the environment variables.");
}

const ai = new GoogleGenAI({
  apiKey: apiKey,
});

async function main(): Promise<void> {
  const response = await ai.models.generateContent({
    model: "gemini-3.6-flash",
    config: {
      systemInstruction: "You are a product research assistant.",
      responseMimeType: "application/json"
    },
    contents: `
    Return information of macbook air M4 as JSON.
    Required fields:
    - product
    - category
    - targetUsers
    - keyStrengths
    - keyWeaknesses
    `,
  })
  console.log(response.text);
}

main().catch((error: unknown) => {
  console.error('LLM request failed:', error);
  process.exit(1);
});