import Hero from '@components/Hero';
import Navbar from '@components/Navbar';
import { useTheme } from '@contexts/ThemeContext';
import darkModeStyle from '@styles/components/Header/dark.module.scss';
import defaultStyle from '@styles/components/Header/default.module.scss';
import lightModeStyle from '@styles/components/Header/light.module.scss';
import { mergeStyles } from 'merge-style-modules';
import { FC, useMemo } from 'react';

const themes = {
  DARK: darkModeStyle,
  LIGHT: lightModeStyle,
};

const Header: FC = (): JSX.Element => {
  const { theme } = useTheme();

  const styles = useMemo(() => {
    const themeStyle = themes[theme];
    return mergeStyles(defaultStyle, themeStyle);
  }, [theme]);

  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
