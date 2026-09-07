import type { LLM } from "../../llm/src/index.js";
import type {
    Agent,
    AgentInput,
    AgentOutput
} from '../index.js';

export class ReseachAgent implements Agent {
    constructor(private readonly llm: LLM) {

    }

    async run(input: AgentInput): Promise<AgentOutput> {
        const response = await this.llm.generate(input.task, {
            systemInstructions: `
            You are a product research agent.

Your job is to analyze the user's request
and provide a useful, factual assessment.

Focus on:
- suitability
- strengths
- weaknesses
- trade-offs

Do not invent facts.
If information is unavailable, explicitly say so.
            `
        })
        return {
            result: response
        };
    }
}