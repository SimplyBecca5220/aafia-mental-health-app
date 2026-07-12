import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { EMERGENCY_RESOURCES, Language, UI_TEXT } from '@/lib/resources';
import { PhoneCall, AlertTriangle } from 'lucide-react';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose, language }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-destructive/5 border-destructive/20">
        <DialogHeader>
          <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mb-2 mx-auto sm:mx-0">
            <AlertTriangle className="text-destructive w-6 h-6" />
          </div>
          <DialogTitle className="text-destructive text-xl flex items-center gap-2">
            {UI_TEXT.emergency_btn[language]}
          </DialogTitle>
          <DialogDescription className="text-foreground/80 pt-2">
            If you or someone you know is in immediate danger or having thoughts of self-harm, please reach out for professional help immediately.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 my-4">
          {EMERGENCY_RESOURCES.map((resource, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg border shadow-sm flex items-start justify-between gap-4">
              <div>
                <h4 className="font-bold text-sm">{resource.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{resource.description}</p>
                <p className="text-lg font-mono font-bold text-primary mt-2">{resource.phone}</p>
              </div>
              <Button size="icon" variant="secondary" className="rounded-full shrink-0" asChild>
                <a href={`tel:${resource.phone.replace(/\s/g, '')}`}>
                  <PhoneCall className="w-4 h-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        <DialogFooter className="sm:justify-start">
          <Button variant="ghost" onClick={onClose} className="w-full sm:w-auto">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
