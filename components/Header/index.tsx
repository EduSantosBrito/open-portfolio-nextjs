import NavItem from '@components/NavItem';
import { useTheme } from '@contexts/ThemeContext';
import darkModeStyle from '@styles/components/Header/dark.module.scss';
import defaultStyle from '@styles/components/Header/default.module.scss';
import lightModeStyle from '@styles/components/Header/light.module.scss';
import { mergeStyles } from '@utils/mergeStyles';
import { useMemo, useState } from 'react';

const themes = {
  DARK: darkModeStyle,
  LIGHT: lightModeStyle,
};

const Header = (): JSX.Element => {
  const { theme, switchTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const styles = useMemo(() => {
    const themeStyle = themes[theme];
    return mergeStyles(defaultStyle, themeStyle);
  }, [theme]);

  return (
    <div className={styles.container}>
      <div className={`${styles.content} ${open ? styles.open : ''}`}>
        <button
          onClick={() => setOpen(!open)}
          className={`${styles.icon} ${open ? styles.open : ''}`}
        />
        <img
          className={`${styles.logo} ${open ? styles.open : ''}`}
          alt='Logo description'
        />
        <div className={`${styles.iconCTA} ${open ? styles.open : ''}`}>
          icon2
        </div>
        <div className={`${styles.nav} ${open ? styles.open : ''}`}>
          <NavItem
            label='switch'
            render={
              <button
                className={`${styles.buttonTheme} ${open ? styles.open : ''}`}
                onClick={() => switchTheme()}
              >
                switch
              </button>
            }
          />
          <NavItem label='Home' to='#' />
          <NavItem label='Sobre mim' to='#about' />
          <NavItem label='Projetos' to='#projects' />
          <NavItem
            label='Orçamento'
            render={<button className={styles.buttonCTA}>Orcamento</button>}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
