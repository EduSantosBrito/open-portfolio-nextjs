import Button from '@components/Button';
import { useTheme } from '@contexts/ThemeContext';
import darkModeStyle from '@styles/components/Hero/dark.module.scss';
import defaultStyle from '@styles/components/Hero/default.module.scss';
import lightModeStyle from '@styles/components/Hero/light.module.scss';
import { mergeStyles } from 'merge-style-modules';
import { FC, useEffect, useMemo, useState } from 'react';
import Fade from 'react-reveal/Fade';

const themes = {
  DARK: darkModeStyle,
  LIGHT: lightModeStyle,
};

type Feature = { value: string; className: string };

const Hero: FC = (): JSX.Element => {
  const { theme } = useTheme();
  const [actualFeature, setActualFeature] = useState(0);

  const styles = useMemo(() => {
    const themeStyle = themes[theme];
    return mergeStyles(defaultStyle, themeStyle);
  }, [theme]);

  const features: Feature[] = useMemo(
    () => [
      { value: 'designs', className: 'designs' },
      { value: 'designs', className: 'designs__static' },
      { value: 'sistemas', className: 'systems' },
      { value: 'sistemas', className: 'systems__static' },
      { value: 'websites', className: 'websites' },
      { value: 'websites', className: 'websites__static' },
    ],
    [],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (actualFeature === features.length - 1) {
        return setActualFeature(0);
      }
      return setActualFeature(actualFeature + 1);
    }, 1500);
    return () => clearInterval(interval);
  }, [actualFeature, features.length]);

  const feature: Feature = useMemo(() => features[actualFeature], [
    actualFeature,
    features,
  ]);

  return (
    <div className={styles.container}>
      <Fade left>
        <h1 className={styles.title}>
          <span className={styles.fixed}>Crio</span>
          <div className={`${styles.dynamic} ${styles[feature.className]}`}>
            {feature.value}
          </div>
        </h1>
      </Fade>
      <p className={styles.subtitle}>
        Olá, meu nome é Brito sou UX/UI Designer com foco em soluções digitais
        pensando sempre na experiência do usuário.
      </p>
      <div className={styles.button}>
        <Button
          onClick={() =>
            typeof window !== 'undefined'
              ? (window.location.href = '/#about')
              : null
          }
        >
          Saiba mais
        </Button>
      </div>
      <img className={styles.draw} alt='draw with a wireframe' />
    </div>
  );
};

export default Hero;
