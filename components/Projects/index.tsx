import CategoryToggle from '@components/CategoryToggle';
import SectionTitle from '@components/SectionTitle';
import { useTheme } from '@contexts/ThemeContext';
import darkModeStyle from '@styles/components/Projects/dark.module.scss';
import defaultStyle from '@styles/components/Projects/default.module.scss';
import lightModeStyle from '@styles/components/Projects/light.module.scss';
import { mergeStyles } from '@utils/mergeStyles';
import { FC, useMemo } from 'react';

const themes = {
  DARK: darkModeStyle,
  LIGHT: lightModeStyle,
};

const Projects: FC = (): JSX.Element => {
  const { theme } = useTheme();

  const styles = useMemo(() => {
    const themeStyle = themes[theme];
    return mergeStyles(defaultStyle, themeStyle);
  }, [theme]);
  return (
    <div className={styles.container}>
      <SectionTitle label='Projetos' />
      <CategoryToggle />
    </div>
  );
};

export default Projects;
