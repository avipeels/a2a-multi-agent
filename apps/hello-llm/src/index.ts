import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;
if(!apiKey) {
  throw new Error("GEMINI_API_KEY is not set in the environment variables.");
}

const ai = new GoogleGenAI({
  apiKey: apiKey,
});

async function main(): Promise<void> {
  const answer = await askGemini('Explain the difference between an LLM and an AI Agent.');
  console.log(answer);
}

async function askGemini(prompt: string): Promise<string>{
  const response = await ai.models.generateContent({
     model: "gemini-3.6-flash",
     contents: `${prompt}`
  })
  const text = response.text ?? "";
  console.log(text);
  return text;
}

main().catch((error: unknown) => {
  console.error('LLM request failed:', error);
  process.exit(1);
});