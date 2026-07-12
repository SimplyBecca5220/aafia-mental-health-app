import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Language } from '@/lib/resources';

interface LanguageSelectorProps {
  onSelect: (lang: Language) => void;
}

const LANGUAGES: { code: Language; label: string; sub: string }[] = [
  { code: 'en', label: 'English', sub: 'Standard English' },
  { code: 'pcm', label: 'Pidgin', sub: 'Nigerian Pidgin English' },
  { code: 'yo', label: 'Yorùbá', sub: 'Èdè Yorùbá' },
  { code: 'ha', label: 'Hausa', sub: 'Harshen Hausa' },
  { code: 'ig', label: 'Igbo', sub: 'Asụsụ Igbo' },
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full"
      >
        <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden shadow-xl border-4 border-white">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b253a799-b4d4-4973-b66a-d778c1ec6d59/aafia-avatar-2369475d-1782945379342.webp" 
            alt="Ààfíà AI" 
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Sannu, Káàbọ̀, Nnọọ, Welcome</h2>
        <p className="text-muted-foreground mb-10">Choose your preferred language to start our conversation.</p>
        
        <div className="grid grid-cols-1 gap-3 w-full">
          {LANGUAGES.map((lang, idx) => (
            <motion.div
              key={lang.code}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
            >
              <Button
                variant="outline"
                className="w-full h-16 flex flex-col items-center justify-center gap-0 border-2 hover:border-primary/50 hover:bg-primary/5 group transition-all"
                onClick={() => onSelect(lang.code)}
              >
                <span className="text-lg font-bold group-hover:text-primary transition-colors">{lang.label}</span>
                <span className="text-[10px] text-muted-foreground">{lang.sub}</span>
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
