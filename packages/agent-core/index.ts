export interface AgentInput {
    task: string;
}

export interface AgentOutput {
    result: string;
}

export interface Agent {
    run(input: AgentInput): Promise<AgentOutput>
}