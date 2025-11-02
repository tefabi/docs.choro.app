import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Choro',
  tagline: 'Modern Communication Platform',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.choro.app',
  baseUrl: '/',
  organizationName: 'tefabi',
  projectName: 'docs.choro.app',

  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/tefabi/docs.choro.app/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/choro-social-card.jpg',
    navbar: {
      title: 'Choro',
      logo: {
        alt: 'Choro Logo',
        src: 'img/logo-light-theme.webp',
        srcDark: 'img/logo-dark-theme.webp',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://choro.app/',
          label: 'App Website',
          position: 'left',
        },
        {
          href: 'https://github.com/tefabi/docs.choro.app',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'Privacy Policy',
              to: '/docs/legal/privacy-policy',
            },
            {
              label: 'Terms of Service',
              to: '/docs/legal/terms-of-service',
            },
          ],
        },
        {
          title: 'Choro App',
          items: [
            {
              label: 'Main Website',
              href: 'https://choro.app/',
            },
            {
              label: 'Contact Support',
              href: 'mailto:info@choro.app',
            },
            {
              label: 'Privacy Policy',
              href: 'https://docs.choro.app/docs/legal/privacy-policy',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/tefabi/docs.choro.app',
            },
            {
              label: 'Report Issues',
              href: 'https://github.com/tefabi/docs.choro.app/issues',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Choro App.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
