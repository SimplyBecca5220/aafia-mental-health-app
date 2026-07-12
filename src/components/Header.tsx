import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Language, UI_TEXT } from '@/lib/resources';

interface HeaderProps {
  language: Language;
  onEmergencyClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ language, onEmergencyClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b flex items-center justify-between px-4 z-50">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b253a799-b4d4-4973-b66a-d778c1ec6d59/aafia-avatar-2369475d-1782945379342.webp" 
            alt="Ààfíà AI" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="font-bold text-lg text-primary leading-tight">Ààfíà AI</h1>
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">Mental Health Companion</p>
        </div>
      </div>
      
      <Button 
        variant="destructive" 
        size="sm" 
        className="gap-2 font-medium"
        onClick={onEmergencyClick}
      >
        <ShieldAlert className="w-4 h-4" />
        <span className="hidden sm:inline">{UI_TEXT.emergency_btn[language]}</span>
      </Button>
    </header>
  );
};
