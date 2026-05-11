import { AIResponse } from "@/types/ai";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function sendAIRequest(
  endpoint: string,
  input: string
): Promise<AIResponse> {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ input }),
  });

  if (!response.ok) {
    throw new Error("Failed to get response from API");
  }

  return response.json();
}