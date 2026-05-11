export type AIToolType =
  | "chat"
  | "summarize"
  | "translate"
  | "title-generator"
  | "code-explainer";

export interface AIRequest {
  input: string;
}

export interface AIResponse {
  result: string;
}