import { useState, createContext, useContext } from "react";

interface ThemeContextProps {
  theme: "light" | "dark";
  setTheme?: (theme: ThemeContextProps["theme"]) => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextProps>({ theme: "dark" });

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeContextProps["theme"]>("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
