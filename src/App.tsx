import { useState } from 'react';
import { Language } from './lib/resources';
import { Header } from './components/Header';
import { LanguageSelector } from './components/LanguageSelector';
import { ChatInterface } from './components/ChatInterface';
import { EmergencyModal } from './components/EmergencyModal';
import { Toaster } from './components/ui/sonner';

function App() {
  const [language, setLanguage] = useState<Language | null>(null);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {!language ? (
        <LanguageSelector onSelect={handleLanguageSelect} />
      ) : (
        <>
          <Header 
            language={language} 
            onEmergencyClick={() => setIsEmergencyOpen(true)} 
          />
          <main className="max-w-2xl mx-auto w-full">
            <ChatInterface language={language} />
          </main>
          <EmergencyModal 
            isOpen={isEmergencyOpen} 
            onClose={() => setIsEmergencyOpen(false)} 
            language={language} 
          />
        </>
      )}
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
