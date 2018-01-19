import enso from 'cultureamp-style-guide/icons/ca-monogram.svg';

const sitemap = {
  title: 'Kaizen',
  href: '/',
  icon: enso,
  children: [
    {
      title: 'Product',
      href: '/',
      icon: enso,
      children: [
        {
          title: 'Components',
          href: '/atoms',
          children: [
            { title: 'Button', href: '/atoms/button' },
            { title: 'Icon', href: '/atoms/icon' },
          ],
        },
        {
          title: 'Language',
          href: '/language',
          children: [
            { title: 'Product Language Style Guide', href: '/language' },
            { title: 'Product Writing Checklist', href: '/language/checklist' },
          ],
        },
        {
          title: 'Visual Styles',
          href: '/visuals',
          children: [
            { title: 'Typography', href: '/visuals/typography' },
            { title: 'Colors', href: '/visuals/colors' },
            { title: 'Icons', href: '/visuals/icons' },
          ],
        },
      ],
    },
  ],
};

export default sitemap;
