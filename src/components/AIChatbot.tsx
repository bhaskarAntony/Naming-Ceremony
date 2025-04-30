import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Send, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import GlassCard from './GlassCard';

const genAI = new GoogleGenerativeAI('AIzaSyCpQ-5HVVg1QI_0jCVTEnLCD1BLtbwL-e4');

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant', content: string }>>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { language } = useLanguage();

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
      const prompt = `You are an AI assistant helping with questions about a baby naming ceremony.
        The ceremony is on May 4th, 2025, at Sri Brahmachaitanya Srirama Kalyana Mantapa.
        Please provide helpful, concise answers about the ceremony, traditions, or any related questions.
        Current language: ${language}
        User question: ${userMessage}`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      setMessages(prev => [...prev, { role: 'assistant', content: text }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: language === 'en' 
          ? 'Sorry, I encountered an error. Please try again later.' 
          : 'ಕ್ಷಮಿಸಿ, ದೋಷ ಸಂಭವಿಸಿದೆ. ದಯವಿಟ್ಟು ನಂತರ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors z-50"
      >
        <MessageCircle size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="fixed bottom-0 right-6 z-50 w-full max-w-md"
          >
            <GlassCard className="relative w-full max-h-[calc(100vh-100px)] p-6 bg-dark-100/80 backdrop-blur-md rounded-t-2xl shadow-2xl flex flex-col">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <h3 className={`text-2xl font-decorative text-gold-400 mb-4 ${language === 'kn' ? 'font-kannada' : ''}`}>
                {language === 'en' ? 'Ask About the Ceremony' : 'ಸಮಾರಂಭದ ಬಗ್ಗೆ ಕೇಳಿ'}
              </h3>

              <div className="flex-1 space-y-4 mb-4 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary-500 scrollbar-track-dark-100">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-primary-600/20 ml-8'
                        : 'bg-dark-100/40 mr-8'
                    }`}
                  >
                    <p className="text-white">{message.content}</p>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold-400"></div>
                  </div>
                )}
              </div>

              <form onSubmit={sendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={language === 'en' ? 'Ask a question...' : 'ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ...'}
                  className="flex-1 px-4 py-2 bg-dark-100/50 border border-primary-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-white"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="p-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors disabled:opacity-50"
                >
                  <Send size={20} />
                </button>
              </form>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;