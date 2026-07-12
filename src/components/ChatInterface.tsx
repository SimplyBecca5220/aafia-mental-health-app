import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Wind, Mic, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Language, UI_TEXT, GROUNDING_EXERCISES } from '@/lib/resources';
import { Message, getAIResponse } from '@/lib/chat-engine';

interface ChatInterfaceProps {
  language: Language;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({ language }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: UI_TEXT.greeting[language],
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || inputValue;
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      const lowerInput = textToSend.toLowerCase();
      
      // Special logic for grounding exercises triggers in chat
      if (lowerInput.includes('breath') || lowerInput.includes('calm') || lowerInput.includes('ground')) {
        // If they just mentioned it, we might want to suggest or start it
        // For simplicity, if they specifically ask for grounding, we start it
        if (lowerInput.includes('start') || lowerInput.includes('do') || lowerInput.includes('exercise')) {
           handleGroundingExercise(lowerInput.includes('3') ? '3breaths' : '478');
           return;
        }
      }

      const aiResponseText = getAIResponse(textToSend, language);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponseText,
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleGroundingExercise = (type: '478' | '3breaths' = '478') => {
    const steps = type === '478' ? GROUNDING_EXERCISES["478_BREATHING"] : GROUNDING_EXERCISES["THREE_BREATHS"];
    
    // Intro message
    const intro: Message = {
      id: Date.now().toString(),
      text: type === '478' ? 
            (language === 'en' ? "Let's do a 4-7-8 breathing exercise. Follow my lead." : 
             language === 'yo' ? "Ẹ jẹ́ kí a ṣe ìdánilẹ́kọ̀ọ́ mímí 4-7-8. Tẹ̀lé mi." :
             language === 'pcm' ? "Make we do 4-7-8 breathing exercise. Follow me." :
             language === 'ha' ? "Bari mu yi aikin numfashi na 4-7-8. Bi ni." :
             "Ka anyị mee mmega ahụ 4-7-8. Soro m.") :
            (language === 'en' ? "Let's take 3 deep breaths together. Find a quiet spot." :
             language === 'yo' ? "Ẹ jẹ́ kí a mí sínú lẹ́ẹ̀mẹ́ta. Ẹ wá ibìkan tó dákẹ́." :
             language === 'pcm' ? "Make we take 3 deep breaths together. Find quiet place." :
             language === 'ha' ? "Bari mu yi dogon numfashi sau 3 tare. Nemo wuri mai shuru." :
             "Ka anyị kuo ume miri emi ugboro atọ. Chọta ebe dị jụụ."),
      sender: 'ai',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, intro]);
    setIsTyping(true);

    // Deliver steps one by one
    let delay = 2000;
    steps.forEach((step, index) => {
      setTimeout(() => {
        const stepMsg: Message = {
          id: (Date.now() + index + 2).toString(),
          text: step[language] || step.en,
          sender: 'ai',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, stepMsg]);
        if (index === steps.length - 1) setIsTyping(false);
      }, delay);
      delay += type === '478' ? 5000 : 4000; // Give time to breathe
    });
  };

  const toggleRecording = () => {
    if (isRecording) {
      setIsRecording(false);
      // Simulate transcription
      const transcription = language === 'en' ? "I'm feeling very stressed with work today." :
                          language === 'yo' ? "Ara n ni mi pẹlu iṣẹ lónìí." :
                          language === 'pcm' ? "Work wahala too much today, I dey stressed." :
                          language === 'ha' ? "Aiki yana ba ni wahala sosai yau." :
                          "Ọrụ na-enye m nsogbu nke ukwuu taa.";
      
      handleSend(transcription);
    } else {
      setIsRecording(true);
      // Auto stop after 3 seconds for simulation
      setTimeout(() => {
        setIsRecording((current) => {
          if (current) {
            // This is just to trigger the stop logic if it was still recording
            // In a real app we'd handle the stream stop
          }
          return current;
        });
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col h-screen pt-16 pb-4">
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-4 py-6 space-y-6 scroll-smooth"
      >
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                {msg.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 overflow-hidden">
                    <img 
                      src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b253a799-b4d4-4973-b66a-d778c1ec6d59/aafia-avatar-2369475d-1782945379342.webp" 
                      className="w-full h-full object-cover"
                      alt="AI"
                    />
                  </div>
                )}
                <div 
                  className={`px-4 py-3 rounded-2xl shadow-sm ${
                    msg.sender === 'user' 
                      ? 'bg-primary text-primary-foreground rounded-tr-none' 
                      : 'bg-white border border-border rounded-tl-none'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                  <span className={`text-[9px] mt-1 block opacity-50 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-white border px-4 py-2 rounded-2xl rounded-tl-none flex gap-1 items-center">
              <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce"></span>
            </div>
          </motion.div>
        )}
      </div>

      <div className="px-4 pt-2">
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="relative flex items-center gap-2 max-w-2xl mx-auto"
        >
          <div className="relative flex-1">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={UI_TEXT.input_placeholder[language]}
              className="pr-20 h-14 rounded-2xl border-2 focus-visible:ring-primary/20 bg-white"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
              {isRecording ? (
                <motion.button
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  type="button"
                  onClick={toggleRecording}
                  className="text-destructive p-1"
                >
                  <Square className="w-5 h-5 fill-current" />
                </motion.button>
              ) : (
                <button 
                  type="button" 
                  onClick={toggleRecording} 
                  className="text-muted-foreground hover:text-primary transition-colors p-1"
                  title="Voice Note"
                >
                  <Mic className="w-5 h-5" />
                </button>
              )}
              <button 
                type="button" 
                onClick={() => handleGroundingExercise('3breaths')} 
                className="text-primary hover:text-primary/70 transition-colors p-1" 
                title="3 Breaths Grounding"
              >
                <Wind className="w-5 h-5" />
              </button>
            </div>
          </div>
          <Button 
            type="submit" 
            size="icon" 
            className="h-14 w-14 rounded-2xl shrink-0 shadow-lg"
            disabled={!inputValue.trim() || isTyping || isRecording}
          >
            <Send className="w-5 h-5" />
          </Button>
        </form>
        <p className="text-[10px] text-center text-muted-foreground mt-4 pb-2">
          Ààfíà AI is a companion, not a medical professional. If you are in crisis, please use the Help button.
        </p>
      </div>
    </div>
  );
};
