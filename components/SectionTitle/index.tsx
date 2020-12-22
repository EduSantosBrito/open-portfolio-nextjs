import { useTheme } from '@contexts/ThemeContext';
import darkModeStyle from '@styles/components/SectionTitle/dark.module.scss';
import defaultStyle from '@styles/components/SectionTitle/default.module.scss';
import lightModeStyle from '@styles/components/SectionTitle/light.module.scss';
import { mergeStyles } from 'merge-style-modules';
import { FC, useMemo } from 'react';

type SectionTitleProps = {
  label: string;
  className?: string;
};

const themes = {
  DARK: darkModeStyle,
  LIGHT: lightModeStyle,
};

const SectionTitle: FC<SectionTitleProps> = ({
  label,
  className,
}): JSX.Element => {
  const { theme } = useTheme();

  const styles = useMemo(() => {
    const themeStyle = themes[theme];
    return mergeStyles(defaultStyle, themeStyle);
  }, [theme]);

  return <h2 className={`${styles.title} ${className}`}>{label}</h2>;
};

export default SectionTitle;
