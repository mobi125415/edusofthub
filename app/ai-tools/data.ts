export type AITool = {
  name: string;
  image: string;
  category: string;
  developer: string;
  pricing: string;
  description: string;
  website: string;
  features: string[];
};

export const aiToolsData: Record<string, AITool> = {
  chatgpt: {
    name: "ChatGPT",
    image: "/ai-tools/chatgpt.png",
    category: "AI Assistant",
    developer: "OpenAI",
    pricing: "Free and Paid Plans",
    description:
      "ChatGPT is an AI assistant for writing, learning, coding, research and everyday tasks.",
    website: "https://chatgpt.com/",
    features: [
      "Writing assistance",
      "Coding support",
      "Document analysis",
      "Learning and research",
      "Image understanding",
      "Conversation history",
    ],
  },

  claude: {
    name: "Claude",
    image: "/ai-tools/claude.png",
    category: "AI Assistant",
    developer: "Anthropic",
    pricing: "Free and Paid Plans",
    description:
      "Claude is an AI assistant designed for reasoning, writing, analysis, coding and document work.",
    website: "https://claude.ai/",
    features: [
      "Long document analysis",
      "Writing support",
      "Coding assistance",
      "Reasoning tasks",
      "File uploads",
      "Research support",
    ],
  },

  gemini: {
    name: "Google Gemini",
    image: "/ai-tools/gemini.png",
    category: "AI Assistant",
    developer: "Google",
    pricing: "Free and Paid Plans",
    description:
      "Google Gemini is a multimodal AI assistant for text, images, research, productivity and coding.",
    website: "https://gemini.google.com/",
    features: [
      "Google integration",
      "Multimodal assistance",
      "Writing support",
      "Research help",
      "Coding support",
      "Image understanding",
    ],
  },

  perplexity: {
    name: "Perplexity",
    image: "/ai-tools/perplexity.png",
    category: "AI Search",
    developer: "Perplexity AI",
    pricing: "Free and Paid Plans",
    description:
      "Perplexity is an AI-powered answer engine that provides concise answers with source citations.",
    website: "https://www.perplexity.ai/",
    features: [
      "AI-powered search",
      "Source citations",
      "Research assistance",
      "Follow-up questions",
      "Deep research",
      "Fast summaries",
    ],
  },
};