
import React from 'react';
import { MessageRole } from '../types';

interface ChatBubbleProps {
  role: MessageRole;
  content: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ role, content }) => {
  const isAssistant = role === 'assistant';

  return (
    <div className={`flex w-full mb-6 ${isAssistant ? 'justify-start' : 'justify-end'}`}>
      <div className={`flex max-w-[85%] md:max-w-[75%] ${isAssistant ? 'flex-row' : 'flex-row-reverse'}`}>
        {isAssistant && (
          <div className="w-8 h-8 rounded-full bg-[var(--primary)] text-white flex items-center justify-center shrink-0 mr-2 mt-1 safe-shadow">
            <span className="text-xs font-bold">V</span>
          </div>
        )}
        <div
          className={`px-4 py-3 rounded-2xl safe-shadow text-[var(--text-main)] leading-relaxed transition-colors ${
            isAssistant
              ? 'bg-[var(--ai-bubble)] border border-[var(--border)] rounded-tl-none'
              : 'bg-[var(--primary)] text-white rounded-tr-none'
          }`}
        >
          <p className="whitespace-pre-wrap text-[15px]">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
