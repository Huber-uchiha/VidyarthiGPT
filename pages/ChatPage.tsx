
import React, { useState, useRef, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Message } from '../types';
import { geminiService } from '../services/geminiService';
import ChatBubble from '../components/ChatBubble';

const ChatPage: React.FC = () => {
  const location = useLocation();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Hello. I'm VidyarthiGPT. I'm here to listen and help you navigate your journey as a student. \n\nHow are you feeling today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [streamingMessage, setStreamingMessage] = useState<string>("");
  const [hasError, setHasError] = useState(!geminiService.hasApiKey());
  const scrollRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!initializedRef.current && location.state?.initialPrompt) {
      handleSend(location.state.initialPrompt);
      initializedRef.current = true;
    }
  }, [location.state]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading, streamingMessage]);

  const handleSend = async (text: string = input) => {
    const trimmedInput = text.trim();
    if (!trimmedInput || isLoading) return;

    // Check key again before sending
    if (!geminiService.hasApiKey()) {
      setHasError(true);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: trimmedInput,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setStreamingMessage("");

    const finalContent = await geminiService.getGuidanceStream(
      messages, 
      trimmedInput, 
      (chunk) => {
        setStreamingMessage(chunk);
      }
    );

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: finalContent || "I'm sorry, I couldn't process that. Please check your configuration.",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, assistantMessage]);
    setStreamingMessage("");
    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col h-[calc(100vh-64px-72px)] md:h-[calc(100vh-64px)] p-4 md:p-6">
      <header className="flex items-center justify-between mb-6 pb-4 border-b border-[var(--border)] shrink-0">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-2xl bg-[var(--primary)] text-white flex items-center justify-center font-bold safe-shadow">V</div>
          <div>
            <h2 className="text-lg font-bold text-[var(--text-main)] font-heading leading-tight">VidyarthiGPT</h2>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
              <span className="text-xs text-[var(--text-muted)]">Active Assistance</span>
            </div>
          </div>
        </div>
      </header>

      {hasError && (
        <div className="mb-6 p-4 bg-rose-50 border border-rose-200 rounded-2xl text-rose-800 text-sm animate-fade-in-up">
          <p className="font-bold mb-1">⚠️ Setup Required</p>
          <p>Your API Key is missing. If you've deployed to Vercel, make sure you added <strong>API_KEY</strong> to your Environment Variables and redeployed.</p>
        </div>
      )}

      <div 
        ref={scrollRef}
        className="flex-grow overflow-y-auto mb-4 space-y-2 px-2 custom-scrollbar scroll-smooth"
      >
        {messages.map(msg => (
          <ChatBubble key={msg.id} role={msg.role} content={msg.content} />
        ))}
        {(isLoading || streamingMessage) && (
          <div className="flex justify-start mb-6">
            <div className="flex max-w-[85%] md:max-w-[75%]">
              <div className="w-8 h-8 rounded-full bg-[var(--primary)] text-white flex items-center justify-center shrink-0 mr-2 mt-1 safe-shadow">
                <span className="text-xs font-bold animate-pulse">V</span>
              </div>
              <div className="bg-[var(--ai-bubble)] border border-[var(--border)] rounded-2xl rounded-tl-none px-4 py-3 safe-shadow transition-colors">
                {streamingMessage ? (
                  <p className="whitespace-pre-wrap text-[15px] text-[var(--text-main)]">{streamingMessage}</p>
                ) : (
                  <div className="flex space-x-1 py-2">
                    <div className="w-1.5 h-1.5 bg-[var(--primary)]/50 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-[var(--primary)]/50 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-[var(--primary)]/50 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-auto shrink-0 space-y-3">
        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            disabled={hasError}
            placeholder={hasError ? "Setup API key to start chatting..." : "Share what's on your mind..."}
            rows={2}
            className="w-full bg-[var(--card-bg)] border border-[var(--border)] rounded-3xl px-6 py-4 pr-16 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 transition-all resize-none safe-shadow placeholder:text-[var(--text-muted)] text-[var(--text-main)] disabled:opacity-50"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isLoading || hasError}
            className="absolute right-3 bottom-3 p-3 bg-[var(--primary)] text-white rounded-2xl disabled:opacity-30 transition-all hover:bg-[var(--primary)]/90 active:scale-95 safe-shadow"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
