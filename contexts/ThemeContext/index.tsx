import {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export enum Theme {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
}

export type ThemeContextType = {
  theme: Theme;
  switchTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.DARK,
  switchTheme: () => console.warn('no theme provider'),
});

export const useTheme = (): ThemeContextType => useContext(ThemeContext);

export const ThemeProvider: FC = ({ children }): JSX.Element => {
  const [theme, setTheme] = useState(Theme.DARK);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTheme(
        window?.matchMedia('(prefers-color-scheme: dark)').matches
          ? Theme.DARK
          : Theme.LIGHT,
      );
    }
  }, []);

  const switchTheme = useCallback(() => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
  }, [theme]);

  const value: ThemeContextType = useMemo(() => ({ theme, switchTheme }), [
    switchTheme,
    theme,
  ]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
