import { Project } from '@api/projects';
import { useTheme } from '@contexts/ThemeContext';
import darkModeStyle from '@styles/components/ProjectItem/dark.module.scss';
import defaultStyle from '@styles/components/ProjectItem/default.module.scss';
import lightModeStyle from '@styles/components/ProjectItem/light.module.scss';
import { mergeStyles } from 'merge-style-modules';
import Image from 'next/image';
import { FC, useEffect, useMemo, useState } from 'react';
import Fade from 'react-reveal/Fade';

type ProjectItemProps = {
  project: Project;
  index: number;
};

const themes = {
  DARK: darkModeStyle,
  LIGHT: lightModeStyle,
};

const ProjectItem: FC<ProjectItemProps> = ({ project, index }): JSX.Element => {
  const [widthMatches, setWidthMatches] = useState<boolean>(false);
  const { theme } = useTheme();

  const styles = useMemo(() => {
    const themeStyle = themes[theme];
    return mergeStyles(defaultStyle, themeStyle);
  }, [theme]);

  const windowMediaQuery = useMemo(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(min-width: 768px)');
    }
  }, []);

  useEffect(() => {
    console.log({ windowMediaQuery });
    if (windowMediaQuery?.matches) {
      setWidthMatches(true);
    }
  }, [windowMediaQuery]);

  useEffect(() => {
    console.log({ widthMatches });
  }, [widthMatches]);

  return (
    <Fade
      left={!widthMatches || index % 2 === 0}
      right={index % 2 !== 0 && widthMatches}
    >
      <div className={styles.container}>
        <img
          className={styles.image}
          src={project.imageUrl}
          alt={`${project.title} project print`}
        />
        <div className={styles.content}>
          <span className={styles.chip}>{project.category}</span>
          <p className={styles.title}>{project.title}</p>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.social}>
            <div>
              <Image
                src='/icons/link.svg'
                className={styles.icon}
                alt='link icon'
                unsized
              />
              <a className={styles.link} href={project.link}>
                Link
              </a>
            </div>
            <div>
              <Image
                src='/icons/behance.svg'
                className={styles.icon}
                alt='behance icon'
                unsized
              />
              <a className={styles.link} href={project.behanceLink}>
                Behance
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ProjectItem;
