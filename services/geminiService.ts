
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Message } from "../types";

const SYSTEM_INSTRUCTION = `
You are VidyarthiGPT, an empathetic and supportive student guidance assistant. 
Your goal is to provide emotional comfort, academic clarity, and career guidance. 
You are NOT a generic search engine or a homework solver. 

GUIDELINES:
1. FOCUS ON GUIDANCE, NOT ANSWERS.
2. EMOTIONAL SAFETY: Always acknowledge the student's feelings first.
3. NON-JUDGMENTAL & CALM.
4. SAFETY FIRST: Provide help for self-harm or danger.
`;

export class GeminiService {
  private ai: GoogleGenAI | null = null;

  constructor() {
    this.init();
  }

  private init() {
    const apiKey = process.env.API_KEY;
    if (apiKey && apiKey !== "undefined") {
      this.ai = new GoogleGenAI({ apiKey });
    } else {
      console.error("VidyarthiGPT Error: API_KEY is missing. Check your Environment Variables.");
    }
  }

  hasApiKey(): boolean {
    const key = process.env.API_KEY;
    return !!key && key !== "undefined";
  }

  async getGuidanceStream(history: Message[], userInput: string, onChunk: (text: string) => void) {
    if (!this.ai) {
      this.init(); // Try to re-init in case environment changed
      if (!this.ai) {
        onChunk("CONFIG_ERROR: My thinking core is missing its API Key. Please add it to your website settings.");
        return "";
      }
    }

    try {
      const contents = history.map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      }));

      contents.push({
        role: 'user',
        parts: [{ text: userInput }]
      });

      const result = await this.ai.models.generateContentStream({
        model: 'gemini-3-flash-preview',
        contents: contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });

      let fullText = "";
      for await (const chunk of result) {
        const textChunk = chunk.text || "";
        fullText += textChunk;
        onChunk(fullText);
      }
      return fullText;
    } catch (error) {
      console.error("Gemini API Error:", error);
      onChunk("I encountered a connection issue. Please check your internet or API key quota.");
      return "";
    }
  }
}

export const geminiService = new GeminiService();
