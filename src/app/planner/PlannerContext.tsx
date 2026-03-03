import { createContext, useContext, useState, type ReactNode } from 'react';

export type FacilityOption = 'mindervaliden' | 'kinderwagen' | 'rollator' | 'geen';

interface PlannerContextType {
  selectedAttractions: number[];
  setSelectedAttractions: (attractions: number[]) => void;
  toggleAttraction: (id: number) => void;
  selectedFacilities: Set<FacilityOption>;
  toggleFacility: (option: FacilityOption) => void;
  groupSize: number;
  setGroupSize: (size: number) => void;
}

const PlannerContext = createContext<PlannerContextType | undefined>(undefined);

export function PlannerProvider({ children }: { children: ReactNode }) {
  const [selectedAttractions, setSelectedAttractions] = useState<number[]>([1]);
  const [selectedFacilities, setSelectedFacilities] = useState<Set<FacilityOption>>(new Set());
  const [groupSize, setGroupSize] = useState(4);

  const toggleAttraction = (id: number) => {
    setSelectedAttractions(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const toggleFacility = (option: FacilityOption) => {
    const newOptions = new Set(selectedFacilities);
    if (newOptions.has(option)) {
      newOptions.delete(option);
    } else {
      newOptions.add(option);
    }
    setSelectedFacilities(newOptions);
  };

  return (
    <PlannerContext.Provider value={{
      selectedAttractions,
      setSelectedAttractions,
      toggleAttraction,
      selectedFacilities,
      toggleFacility,
      groupSize,
      setGroupSize,
    }}>
      {children}
    </PlannerContext.Provider>
  );
}

export function usePlanner() {
  const context = useContext(PlannerContext);
  if (!context) {
    throw new Error('usePlanner must be used within a PlannerProvider');
  }
  return context;
}
