import { useTheme } from '@contexts/ThemeContext';
import darkModeStyle from '@styles/components/NavItem/dark.module.scss';
import defaultStyle from '@styles/components/NavItem/default.module.scss';
import lightModeStyle from '@styles/components/NavItem/light.module.scss';
import { mergeStyles } from '@utils/mergeStyles';
import Link from 'next/link';
import { FC, useMemo } from 'react';

const themes = {
  DARK: darkModeStyle,
  LIGHT: lightModeStyle,
};

type NavItemProps = { label: string; to?: string; render?: JSX.Element };

const NavItem: FC<NavItemProps> = ({ label, to, render }): JSX.Element => {
  const { theme } = useTheme();

  const styles = useMemo(() => {
    const themeStyle = themes[theme];
    return mergeStyles(defaultStyle, themeStyle);
  }, [theme]);
  return (
    <div className={styles.container}>
      {to ? (
        <div className={styles.link}>
          <Link href={to}>{label}</Link>
        </div>
      ) : (
        <div className={styles.component}>{render}</div>
      )}
    </div>
  );
};
export default NavItem;
