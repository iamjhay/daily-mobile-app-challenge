// src/ScreenContext.tsx

import { createContext, useContext, useState } from "react";

type ScreenContextType = {
  selectedScreen: number | null;
  setSelectedScreen: (index: number | null) => void;
};

const ScreenContext = createContext<ScreenContextType>({
  selectedScreen: null,
  setSelectedScreen: () => {},
});

export function ScreenProvider({ children }: { children: React.ReactNode }) {
  const [selectedScreen, setSelectedScreen] = useState<number | null>(null);

  return (
    <ScreenContext.Provider value={{ selectedScreen, setSelectedScreen }}>
      {children}
    </ScreenContext.Provider>
  );
}

export default function useScreen() {
  return useContext(ScreenContext);
}
