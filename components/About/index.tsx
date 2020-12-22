import SectionTitle from '@components/SectionTitle';
import { useTheme } from '@contexts/ThemeContext';
import darkModeStyle from '@styles/components/About/dark.module.scss';
import defaultStyle from '@styles/components/About/default.module.scss';
import lightModeStyle from '@styles/components/About/light.module.scss';
import { mergeStyles } from 'merge-style-modules';
import { FC, useMemo } from 'react';

const themes = {
  DARK: darkModeStyle,
  LIGHT: lightModeStyle,
};

const About: FC = (): JSX.Element => {
  const { theme } = useTheme();

  const styles = useMemo(() => {
    const themeStyle = themes[theme];
    return mergeStyles(defaultStyle, themeStyle);
  }, [theme]);

  return (
    <div id='about' className={styles.container}>
      <SectionTitle label='Sobre mim' className={styles.title} />
      <div className={styles.description}>
        <p>
          Minha especialidade é projetar aplicativos móveis, sites e sistemas de
          grande e pequeno porte. Tenho feito isso há bastante tempo e trabalhei
          em todos os tipos de projetos, seguimentos e clientes, de pequenas
          startups a grandes corporações.
        </p>
        <p>
          Você pode me pegar ouvindo minha música favorita Falling do Harry
          Styles, postando alguns designs no Behance, praticando minha escrita
          no Medium, aprendendo e ensinando no meu canal do Youtube, vamos ficar
          mais próximos também no Instagram, acompanhe minha carreira
          profissional no Linkedin e em casa fazendo um belo hambúrguer
          artesanal.{' '}
          <span role='img' aria-label='horn hand icon'>
            🤘
          </span>
        </p>
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
      <div className={styles.wrapper}>
        <img
          className={styles.image}
          src='/images/about-picture.png'
          alt='Its me'
        />
      </div>
    </div>
  );
};

export default About;
