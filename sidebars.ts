import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro', // What is Choro
    
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/overview',
        'getting-started/account-signup',
        'getting-started/image-generation',
      ],
    },  
    {
      type: 'category',
      label: 'Plans and Pricing',
      collapsed: false,
      items: [
        'plans/available-plans',
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
    {
      type: 'category',
      label: 'Legal and Support',
      collapsed: false,
      items: [
        'legal/privacy-policy',
        'legal/terms-of-service',
      ],
    },
    
    {
      type: 'category',
      label: 'About Choro',
      collapsed: false,
      items: [
        'about/company',
        'about/website',
      ],
    },
  ],
};

export default sidebars;