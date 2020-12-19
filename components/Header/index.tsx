import { useTheme } from '@contexts/ThemeContext';
import darkModeStyle from '@styles/components/Header/dark.module.scss';
import defaultStyle from '@styles/components/Header/default.module.scss';
import lightModeStyle from '@styles/components/Header/light.module.scss';
import { mergeStyles } from '@utils/mergeStyles';
import { useMemo } from 'react';

const themes = {
  DARK: darkModeStyle,
  LIGHT: lightModeStyle,
};

const Header = (): JSX.Element => {
  const { theme, switchTheme } = useTheme();

  const styles = useMemo(() => {
    const themeStyle = themes[theme];
    return mergeStyles(defaultStyle, themeStyle);
  }, [theme]);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>Daibert</div>
      <div className={styles.nav}>
        <div className={styles.nav_item}>
          <button onClick={() => switchTheme()}>switch</button>
        </div>
        <div className={styles.nav_item}>Home</div>
        <div className={styles.nav_item}>Sobre mim</div>
        <div className={styles.nav_item}>Projetos</div>
        <div className={styles.nav_item}>
          <button>Orcamento</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
