import { Categories } from '@contexts/CategoryContext';
import { NextApiRequest, NextApiResponse } from 'next';

export type Project = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  category: Categories;
  link: string;
  behanceLink: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Project[]>): void => {
  const projects: Project[] = [
    {
      id: 1,
      imageUrl: `/projects/project-1.jpg`,
      title: 'Titulo do projeto',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      category: Categories.WEB,
      link: 'https://link-to.project',
      behanceLink: 'https://link-to.behance',
    },
    {
      id: 2,
      imageUrl: `/projects/project-2.jpg`,
      title: 'Titulo do projeto',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      category: Categories.WEB,
      link: 'https://link-to.project',
      behanceLink: 'https://link-to.behance',
    },
    {
      id: 3,
      imageUrl: `/projects/project-3.jpg`,
      title: 'Titulo do projeto',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      category: Categories.WEB,
      link: 'https://link-to.project',
      behanceLink: 'https://link-to.behance',
    },
    {
      id: 4,
      imageUrl: `/projects/project-4.jpg`,
      title: 'Titulo do projeto',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      category: Categories.WEB,
      link: 'https://link-to.project',
      behanceLink: 'https://link-to.behance',
    },
    {
      id: 5,
      imageUrl: `/projects/project-5.jpg`,
      title: 'Titulo do projeto',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      category: Categories.WEB,
      link: 'https://link-to.project',
      behanceLink: 'https://link-to.behance',
    },
    {
      id: 6,
      imageUrl: `/projects/project-6.jpg`,
      title: 'Titulo do projeto',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      category: Categories.WEB,
      link: 'https://link-to.project',
      behanceLink: 'https://link-to.behance',
    },
    {
      id: 7,
      imageUrl: `/projects/project-7.jpg`,
      title: 'Titulo do projeto',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      category: Categories.UI,
      link: 'https://link-to.project',
      behanceLink: 'https://link-to.behance',
    },
    {
      id: 8,
      imageUrl: `/projects/project-8.jpg`,
      title: 'Titulo do projeto',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      category: Categories.UI,
      link: 'https://link-to.project',
      behanceLink: 'https://link-to.behance',
    },
    {
      id: 9,
      imageUrl: `/projects/project-9.jpg`,
      title: 'Titulo do projeto',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      category: Categories.UI,
      link: 'https://link-to.project',
      behanceLink: 'https://link-to.behance',
    },
    {
      id: 10,
      imageUrl: `/projects/project-10.jpg`,
      title: 'Titulo do projeto',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      category: Categories.UI,
      link: 'https://link-to.project',
      behanceLink: 'https://link-to.behance',
    },
    {
      id: 11,
      imageUrl: `/projects/project-11.jpg`,
      title: 'Titulo do projeto',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      category: Categories.UI,
      link: 'https://link-to.project',
      behanceLink: 'https://link-to.behance',
    },
    {
      id: 12,
      imageUrl: `/projects/project-12.jpg`,
      title: 'Titulo do projeto',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
      category: Categories.UI,
      link: 'https://link-to.project',
      behanceLink: 'https://link-to.behance',
    },
  ];
  res
    .status(200)
    .json(
      req.query.category
        ? projects.filter(project => project.category === req.query.category)
        : projects,
    );
};
