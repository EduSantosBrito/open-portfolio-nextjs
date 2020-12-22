import { Categories, useCategory } from '@contexts/CategoryContext';
import { useTheme } from '@contexts/ThemeContext';
import darkModeStyle from '@styles/components/CategoryToggle/dark.module.scss';
import defaultStyle from '@styles/components/CategoryToggle/default.module.scss';
import lightModeStyle from '@styles/components/CategoryToggle/light.module.scss';
import { mergeStyles } from 'merge-style-modules';
import { FC, useMemo } from 'react';

const themes = {
  DARK: darkModeStyle,
  LIGHT: lightModeStyle,
};

const CategoryToggle: FC = (): JSX.Element => {
  const { theme } = useTheme();
  const { category, setCategory } = useCategory();

  const styles = useMemo(() => {
    const themeStyle = themes[theme];
    return mergeStyles(defaultStyle, themeStyle);
  }, [theme]);

  return (
    <div className={styles.container}>
      <button
        onClick={() => setCategory(Categories.WEB)}
        className={`${styles.icon} ${
          category === Categories.WEB ? styles.active : ''
        }`}
      >
        <img className={styles.web} alt='Web design icon' />
        <p>Web design</p>
      </button>
      <button
        onClick={() => setCategory(Categories.UI)}
        className={`${styles.icon} ${
          category === Categories.UI ? styles.active : ''
        }`}
      >
        <img className={styles.ui} alt='UI design icon' />
        <p>UX/UI design</p>
      </button>
    </div>
  );
};

export default CategoryToggle;
