import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Legal',
      collapsed: false,
      items: [
        'legal/privacy-policy',
        'legal/terms-of-service',
      ],
    },
    // Add more sections as you create content:
    // {
    //   type: 'category', 
    //   label: 'Getting Started',
    //   items: ['getting-started/installation']
    // },
  ],
};

export default sidebars;
