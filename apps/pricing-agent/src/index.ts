import { GeminiLLM } from "@lab/llm";
import { PricingAgent } from "@lab/agent-core/src/pricing-agent.js";

const apiKey = process.env.GEMINI_API_KEY;
if(!apiKey){
     throw new Error("GEMINI_API_KEY is not configured");
}

const llm = new GeminiLLM(apiKey);

const agent = new PricingAgent(llm);

async function main(): Promise<void> {
  const result = await agent.run({
    task:
      "Analyse the prcing of mac studio mini"
  });

  console.log("\n=== RESEARCH RESULT ===\n");
  console.log(result.result);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});