import { useTheme } from '@contexts/ThemeContext';
import darkModeStyle from '@styles/components/NavItem/dark.module.scss';
import defaultStyle from '@styles/components/NavItem/default.module.scss';
import lightModeStyle from '@styles/components/NavItem/light.module.scss';
import { mergeStyles } from 'merge-style-modules';
import { FC, useMemo } from 'react';

const themes = {
  DARK: darkModeStyle,
  LIGHT: lightModeStyle,
};

type NavItemProps = {
  label?: string;
  to?: string;
  render?: JSX.Element;
  onClick?: () => void;
};

const NavItem: FC<NavItemProps> = ({
  label,
  to,
  render,
  onClick,
}): JSX.Element => {
  const { theme } = useTheme();

  const styles = useMemo(() => {
    const themeStyle = themes[theme];
    return mergeStyles(defaultStyle, themeStyle);
  }, [theme]);
  return (
    <div className={styles.container}>
      {to ? (
        <button onClick={onClick} className={styles.link}>
          <a href={to}>{label}</a>
        </button>
      ) : (
        <div className={styles.component}>{render}</div>
      )}
    </div>
  );
};
export default NavItem;
