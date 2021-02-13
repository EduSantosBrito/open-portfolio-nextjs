import { Project } from '@api/projects';
import CategoryToggle from '@components/CategoryToggle';
import ProjectItem from '@components/ProjectItem';
import SectionTitle from '@components/SectionTitle';
import { useCategory } from '@contexts/CategoryContext';
import { useTheme } from '@contexts/ThemeContext';
import darkModeStyle from '@styles/components/Projects/dark.module.scss';
import defaultStyle from '@styles/components/Projects/default.module.scss';
import lightModeStyle from '@styles/components/Projects/light.module.scss';
import { mergeStyles } from 'merge-style-modules';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';

const themes = {
  DARK: darkModeStyle,
  LIGHT: lightModeStyle,
};

const Projects: FC = (): JSX.Element => {
  const { theme } = useTheme();
  const { category } = useCategory();
  const [projects, setProjects] = useState<Project[] | null>(null);

  const fetchProjects = useCallback(async (): Promise<void> => {
    const response = await fetch(`/api/projects?category=${category}`);
    const projects = await response.json();
    setProjects(projects);
  }, [category]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const styles = useMemo(() => {
    const themeStyle = themes[theme];
    return mergeStyles(defaultStyle, themeStyle);
  }, [theme]);

  return (
    <div id='projects' className={styles.container}>
      <SectionTitle label='Projetos' />
      <CategoryToggle />
      <div className={styles.projects}>
        {projects?.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};
export default Projects;
