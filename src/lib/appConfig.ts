export type NavItem = {
  label: string;
  link: string;
};

export const appConfig = {
  meta: {
    name: 'MyAwesomeApp',
    description: 'A Next.js Starter Kit',
    url: 'https://myawesomeapp.com',
    logo: 'path/to/logo.png',
  },
  navigation: [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'Features',
      link: '/features',
    },
    {
      label: 'Pricing',
      link: '/pricing',
    },
    {
      label: 'About Us',
      link: '/about',
    },
    {
      label: 'Blog',
      link: '/blog',
    },
  ],
};
export const appMeta = appConfig.meta;
export const navItems: NavItem[] = appConfig.navigation;
