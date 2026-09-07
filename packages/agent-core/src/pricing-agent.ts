import type { LLM } from "../../llm/src/index.js";
import type {
    Agent,
    AgentInput,
    AgentOutput
} from '../index.js';

export class PricingAgent implements Agent {
    constructor(private readonly llm: LLM) {

    }

    async run(input: AgentInput): Promise<AgentOutput> {
        const response = await this.llm.generate(input.task, {
            systemInstructions: `
            You are a pricing analysis agent.

Your job is to analyze the product
and provide factual price.

Focus on:
- actuality

Do not invent facts.
If information is unavailable, explicitly say so.
            `
        })
        return {
            result: response
        };
    }
}