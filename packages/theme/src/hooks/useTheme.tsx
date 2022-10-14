import { createContext, ReactNode, useContext, useState } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { defaultTheme, darkTheme } from '..';

export type DefaultThemeProps = typeof defaultTheme;
export type DarkThemeProps = typeof darkTheme;

export type ThemeDarkLightProps = DefaultThemeProps | DarkThemeProps;

interface IThemeContext {
  toggleTheme: () => void;
  theme: ThemeDarkLightProps;
}

export const ThemeContext = createContext({} as IThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeDarkLightProps>(defaultTheme);

  function toggleTheme() {
    setTheme(theme.title === 'defaultTheme' ? darkTheme : defaultTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);

  return context;
}
