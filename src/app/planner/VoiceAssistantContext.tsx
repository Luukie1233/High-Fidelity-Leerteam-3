import { createContext, useContext, useState, type ReactNode } from 'react';

interface VoiceAssistantContextType {
  voiceAssistant: boolean;
  toggleVoiceAssistant: () => void;
}

const VoiceAssistantContext = createContext<VoiceAssistantContextType | undefined>(undefined);

export function VoiceAssistantProvider({ children }: { children: ReactNode }) {
  const [voiceAssistant, setVoiceAssistant] = useState(true);

  const toggleVoiceAssistant = () => setVoiceAssistant(prev => !prev);

  return (
    <VoiceAssistantContext.Provider value={{ voiceAssistant, toggleVoiceAssistant }}>
      {children}
    </VoiceAssistantContext.Provider>
  );
}

export function useVoiceAssistant() {
  const context = useContext(VoiceAssistantContext);
  if (!context) {
    throw new Error('useVoiceAssistant must be used within a VoiceAssistantProvider');
  }
  return context;
}
