import { Theme, useTheme } from '@contexts/ThemeContext';
import darkModeStyle from '@styles/components/ThemeToggle/dark.module.scss';
import defaultStyle from '@styles/components/ThemeToggle/default.module.scss';
import lightModeStyle from '@styles/components/ThemeToggle/light.module.scss';
import { mergeStyles } from 'merge-style-modules';
import { FC, useMemo } from 'react';

const themes = {
  DARK: darkModeStyle,
  LIGHT: lightModeStyle,
};

type ThemeToggleProps = {
  className?: string;
};

const ThemeToggle: FC<ThemeToggleProps> = ({ className }): JSX.Element => {
  const { theme, switchTheme } = useTheme();

  const styles = useMemo(() => {
    const themeStyle = themes[theme];
    return mergeStyles(defaultStyle, themeStyle);
  }, [theme]);

  const isDarkActive = useMemo(() => theme === Theme.DARK, [theme]);

  return (
    <button
      onClick={() => switchTheme()}
      className={`${styles.container} ${className ?? ''}`}
    >
      <div
        className={`${styles.switch} ${isDarkActive ? styles.active : ''}`}
      />
    </button>
  );
};

export default ThemeToggle;
