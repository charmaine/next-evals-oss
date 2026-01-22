import { LanguageModel } from "ai";
import { createAnthropic } from "@ai-sdk/anthropic";

export interface Model {
  name: string;
  model: LanguageModel;
}

// Create Anthropic provider using ANTHROPIC_API_KEY
const anthropic = createAnthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export const MODELS: Model[] = [
  {
    name: "Claude Sonnet",
    model: anthropic("claude-sonnet-4-20250514"),
  },
];
