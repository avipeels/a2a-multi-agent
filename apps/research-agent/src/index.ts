import { GeminiLLM } from "@lab/llm";
import { ResearchAgent } from "@lab/agent-core/src/research-agent.js";

const apiKey = process.env.GEMINI_API_KEY;
if(!apiKey){
     throw new Error("GEMINI_API_KEY is not configured");
}

const llm = new GeminiLLM(apiKey);

const agent = new ResearchAgent(llm);

async function main(): Promise<void> {
  const result = await agent.run({
    task:
      "Is the MacBook Air M4 suitable for a senior frontend engineer who works with React, TypeScript, Node.js and Docker?"
  });

  console.log("\n=== RESEARCH RESULT ===\n");
  console.log(result.result);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});