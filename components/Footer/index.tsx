import Button from '@components/Button';
import ThemeToggle from '@components/ThemeToggle';
import { useTheme } from '@contexts/ThemeContext';
import darkModeStyle from '@styles/components/Footer/dark.module.scss';
import defaultStyle from '@styles/components/Footer/default.module.scss';
import lightModeStyle from '@styles/components/Footer/light.module.scss';
import { mergeStyles } from 'merge-style-modules';
import { FC, useMemo } from 'react';

const themes = {
  DARK: darkModeStyle,
  LIGHT: lightModeStyle,
};

const Footer: FC = (): JSX.Element => {
  const { theme } = useTheme();

  const styles = useMemo(() => {
    const themeStyle = themes[theme];
    return mergeStyles(defaultStyle, themeStyle);
  }, [theme]);

  return (
    <div className={styles.container}>
      <div className={styles.cta}>
        <h3 className={styles.title}>Bora trabalhar em um projeto juntos?</h3>
        <p className={styles.subtitle}>
          Podemos, juntos, criar um projeto com excelência. Está sem dúvidas e
          preparado para começar essa jornada? Então bora começar!
        </p>
        <div className={styles.buttonContainer}>
          <Button
            className={styles.button}
            onClick={() => console.warn('footer button without handler')}
          >
            Fazer um orçamento
          </Button>
        </div>
      </div>
      <div className={styles.sitemap}>
        <img className={styles.logo} alt='Logo description' />
        <div className={styles.links}>
          <button className={styles.linkButton}>
            <a href='#home' className={styles.linkText}>
              Home
            </a>
          </button>
          <button className={styles.linkButton}>
            <a href='#about' className={styles.linkText}>
              Sobre mim
            </a>
          </button>
          <button className={styles.linkButton}>
            <a href='#projects' className={styles.linkText}>
              Projetos
            </a>
          </button>
          <ThemeToggle />
        </div>
        <div className={styles.social}>
          <a
            href='https://instagram.com'
            className={styles.icon}
            target='_blank'
            rel='noreferrer'
          >
            <img className={styles.instagram} alt='Instagram icon' />
          </a>
          <a
            href='https://medium.com'
            className={styles.icon}
            target='_blank'
            rel='noreferrer'
          >
            <img className={styles.medium} alt='Medium icon' />
          </a>
          <a
            href='https://linkedin.com'
            className={styles.icon}
            target='_blank'
            rel='noreferrer'
          >
            <img className={styles.linkedin} alt='Linkedin icon' />
          </a>
          <a
            href='https://youtube.com'
            className={styles.icon}
            target='_blank'
            rel='noreferrer'
          >
            <img className={styles.youtube} alt='Youtube icon' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
