export interface AgentInput {
    task: string;
    context?: Record<string, unknown>;
}

export interface AgentOutput {
    result: string;
    metadata?: Record<string, unknown>;
}

export interface Agent {
    run(input: AgentInput): Promise<AgentOutput>
}