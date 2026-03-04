import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export interface SavedQRCode {
  id: string;
  attractions: number[];
  facilities: string[];
  groupSize: number;
  qrValue: string;
  savedAt: string;
  label: string;
}

interface SavedQRCodesContextType {
  savedQRCodes: SavedQRCode[];
  saveQRCode: (code: Omit<SavedQRCode, 'id' | 'savedAt' | 'label'>) => boolean;
  deleteQRCode: (id: string) => void;
  canSave: boolean;
}

const STORAGE_KEY = 'lakeSideMania_savedQRCodes';
const MAX_CODES = 3;

function loadFromStorage(): SavedQRCode[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveToStorage(codes: SavedQRCode[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(codes));
}

const SavedQRCodesContext = createContext<SavedQRCodesContextType | undefined>(undefined);

export function SavedQRCodesProvider({ children }: { children: ReactNode }) {
  const [savedQRCodes, setSavedQRCodes] = useState<SavedQRCode[]>(loadFromStorage);

  useEffect(() => {
    saveToStorage(savedQRCodes);
  }, [savedQRCodes]);

  const saveQRCode = (code: Omit<SavedQRCode, 'id' | 'savedAt' | 'label'>): boolean => {
    if (savedQRCodes.length >= MAX_CODES) return false;

    const newCode: SavedQRCode = {
      ...code,
      id: Date.now().toString(),
      savedAt: new Date().toISOString(),
      label: `QR-code ${savedQRCodes.length + 1}`,
    };

    setSavedQRCodes(prev => [...prev, newCode]);
    return true;
  };

  const deleteQRCode = (id: string) => {
    setSavedQRCodes(prev => prev.filter(qr => qr.id !== id));
  };

  return (
    <SavedQRCodesContext.Provider value={{
      savedQRCodes,
      saveQRCode,
      deleteQRCode,
      canSave: savedQRCodes.length < MAX_CODES,
    }}>
      {children}
    </SavedQRCodesContext.Provider>
  );
}

export function useSavedQRCodes() {
  const context = useContext(SavedQRCodesContext);
  if (!context) {
    throw new Error('useSavedQRCodes must be used within a SavedQRCodesProvider');
  }
  return context;
}
