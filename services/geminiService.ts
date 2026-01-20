
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Message } from "../types";

const SYSTEM_INSTRUCTION = `
You are VidyarthiGPT, an empathetic and supportive student guidance assistant. 
Your goal is to provide emotional comfort, academic clarity, and career guidance. 
You are NOT a generic search engine or a homework solver. 

GUIDELINES:
1. FOCUS ON GUIDANCE, NOT ANSWERS: If a student asks for a math answer or an essay, gently explain that your role is to guide them through the process or help them manage their stress, not to do the work for them.
2. EMOTIONAL SAFETY: Always acknowledge the student's feelings first (e.g., "I can hear that you're feeling overwhelmed, and that's okay.").
3. NON-JUDGMENTAL: Never criticize a student's confusion or choices.
4. CALM & SIMPLE: Use simple, reassuring language. Avoid complex jargon.
5. SAFETY FIRST: If a student mentions self-harm, severe depression, or danger, immediately provide empathy and strongly encourage them to seek professional help or call a helpline. State clearly that you are an AI and not a substitute for professional mental health support.
6. EMPOWERMENT: Encourage small, manageable steps.

Your personality: Warm, patient, respectful, and peer-like but wise.
`;

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async getGuidanceStream(history: Message[], userInput: string, onChunk: (text: string) => void) {
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
          topP: 0.95,
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
      onChunk("I encountered a small error while thinking. Could you try sharing that with me again? I'm listening.");
      return "";
    }
  }

  // Fallback for non-streaming calls if needed
  async getGuidance(history: Message[], userInput: string): Promise<string> {
    try {
      const contents = history.map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      }));

      contents.push({
        role: 'user',
        parts: [{ text: userInput }]
      });

      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
          topP: 0.95,
        }
      });

      return response.text || "I'm sorry, I'm having a bit of trouble connecting right now.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I encountered a small error while thinking.";
    }
  }
}

export const geminiService = new GeminiService();
