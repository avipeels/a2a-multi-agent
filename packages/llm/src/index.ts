import { GoogleGenAI } from "@google/genai";

export interface LLMGenerateOptions {
    systemInstructions?: string;
}

export interface LLM {
    generate(
        prompt: string,
        options?: LLMGenerateOptions
    ): Promise<string>;
}

export class GeminiLLM implements LLM {
    private readonly client: GoogleGenAI;
    constructor(apiKey: string){
        if(!apiKey){
            throw new Error('Gemini api key is required')
        }
        this.client= new GoogleGenAI({
            apiKey
        })
    }
    async generate(prompt: string, options?: LLMGenerateOptions): Promise<string> {
        const response = await this.client.models.generateContent({
            model: "gemini-3.6-flash",
            config: {
                systemInstruction: options?.systemInstructions
            },
            contents: prompt
        })
        return response.text ?? ''
    }
}