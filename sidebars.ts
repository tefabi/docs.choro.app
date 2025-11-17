import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/getting-started',
      ],
    },
    {
      type: 'category',
      label: 'Payment Plans',
      collapsed: false,
      items: [
        'payment/payment',
      ],
    },
    {
      type: 'category',
      label: 'Legal',
      collapsed: false,
      items: [
        'legal/privacy-policy',
        'legal/terms-of-service',
      ],
    },
    {
      type: 'category',
      label: 'About',
      collapsed: false,
      items: [
        'about/about',
      ],
    },
     {
      type: 'category',
      label: 'User Guide',
      collapsed: false,
      items: [
        'user-guide/account',
      ],
    },
  ],
};

export default sidebars;