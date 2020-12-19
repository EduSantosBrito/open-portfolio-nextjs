// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

export type Metadata = {
  property: string;
  content: string;
};

export default (
  req: NextApiRequest,
  res: NextApiResponse<Metadata[]>,
): void => {
  const metadatas: Metadata[] = [
    {
      property: 'title',
      content: 'Open Portfolio Nextjs',
    },
    {
      property: 'description',
      content:
        "Hey, that's my website. Be free to come and see my experiences and open source projects. :)",
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://your.domain',
    },
    {
      property: 'og:title',
      content: 'Open Portfolio Nextjs',
    },
    {
      property: 'og:description',
      content:
        "Hey, that's my website. Be free to come and see my experiences and open source projects. :)",
    },
    {
      property: 'og:image',
      content: '/og-image.png',
    },
    {
      property: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      property: 'twitter:url',
      content: 'https://your.domain',
    },
    {
      property: 'twitter:title',
      content: 'Open Portfolio Nextjs',
    },
    {
      property: 'twitter:description',
      content:
        "Hey, that's my website. Be free to come and see my experiences and open source projects. :)",
    },
    {
      property: 'twitter:image',
      content: '/og-image.png',
    },
  ];
  res.status(200).json(metadatas);
};
