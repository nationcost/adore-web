import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Bot, Loader2 } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hello! I am ADORE AI. How can I help you with your server today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const getChatSession = () => {
    if (!chatSessionRef.current) {
      const ai = new GoogleGenerativeAI('AIzaSyBGvprmkCSftsJ257hcLy0PATPuiUfUbAs');
      chatSessionRef.current = ai.getGenerativeModel({
        model: 'gemini-1.5-flash',
        systemInstruction: "You are ADORE AI, a helpful and intelligent support assistant for the ADORE Discord bot. Your goal is to help users with features like Anti-Nuke, Moderation, Leveling, Welcome messages, and more. You are friendly, concise, and knowledgeable about Discord server management. If asked about pricing, mention the Premium subscription. If asked about bugs, direct them to the Support Server.",
      }).startChat({
        history: messages.slice(1).map(msg => ({
          role: msg.role === 'model' ? 'model' : 'user',
          parts: [{ text: msg.text }]
        }))
      });
    }
    return chatSessionRef.current;
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const chat = getChatSession();
      const response = await chat.sendMessage(userMessage);

      setMessages(prev => [...prev, {
        role: 'model',
        text: response.response.text() || "I'm having trouble thinking right now."
      }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, something went wrong. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Helper to format bold text (**text**)
  const formatMessage = (text: string) => {
    // Regex updated to support newlines within bold text using [\s\S]
    const parts = text.split(/(\*\*[\s\S]*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
        return <strong key={index} className="font-bold text-white">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)] transition-all duration-500 hover:scale-110 active:scale-95 ${isOpen
          ? 'bg-white text-black rotate-90'
          : 'bg-white text-black hover:bg-gray-200 hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.4)]'
          }`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[90vw] md:w-96 h-[500px] max-h-[80vh] flex flex-col bg-white/[0.04] backdrop-blur-3xl backdrop-saturate-150 border border-white/10 rounded-[2.5rem] shadow-2xl shadow-black/50 overflow-hidden transition-all duration-500 origin-bottom-right ${isOpen
          ? 'opacity-100 scale-100 translate-y-0'
          : 'opacity-0 scale-90 translate-y-10 pointer-events-none'
          }`}
      >
        {/* Inner Highlight */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>

        {/* Header */}
        <div className="relative z-10 p-5 border-b border-white/5 bg-white/[0.02] flex items-center gap-3">
          <div className="p-2 bg-white/10 rounded-xl border border-white/20 text-white">
            <Sparkles size={20} />
          </div>
          <div>
            <h3 className="font-bold text-white">ADORE AI</h3>
            <p className="text-xs text-gray-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              Online
            </p>
          </div>
        </div>

        {/* Messages Area */}
        <div className="relative z-10 flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border ${msg.role === 'user'
                ? 'bg-gray-700 border-gray-600'
                : 'bg-white text-black border-white'
                }`}>
                {msg.role === 'user' ? <div className="w-2 h-2 bg-gray-400 rounded-full" /> : <Bot size={16} />}
              </div>

              <div className={`max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed border whitespace-pre-wrap ${msg.role === 'user'
                ? 'bg-white/10 border-white/10 text-white rounded-tr-none'
                : 'bg-black/40 border-white/5 text-gray-300 rounded-tl-none shadow-lg'
                }`}>
                {formatMessage(msg.text)}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-white flex items-center justify-center">
                <Bot size={16} className="text-black" />
              </div>
              <div className="p-3.5 bg-black/40 border border-white/5 rounded-2xl rounded-tl-none flex items-center gap-2 text-gray-400 text-sm">
                <Loader2 size={16} className="animate-spin" />
                Thinking...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="relative z-10 p-4 bg-white/[0.02] border-t border-white/5">
          <div className="flex items-center gap-2 bg-black/30 border border-white/10 rounded-full px-4 py-2 focus-within:border-white/20 focus-within:bg-black/50 transition-all">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything..."
              className="flex-1 bg-transparent border-none text-white text-sm focus:outline-none placeholder-gray-500 py-2"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;