// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OPTIMIST',
  tagline: 'Open Tools, Interfaces and Metrics for Implementation Security Testing',
  favicon: 'img/optimist_logo.ico',

  // Set the production url of your site here
  url: 'https://optimist-ose.org/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'optimist-workshop', // Usually your GitHub org/user name.
  projectName: 'optimist-ose', // Usually your repo name.
  trailingSlash: false,
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Add the plugin for client redirects here:
  plugins: [
    [
      require.resolve('@docusaurus/plugin-client-redirects'),
      {
        redirects: [
          {
            from: '/docs/file-format',  // When someone visits /docs/file-format
            to: '/docs/file-format/intro', // redirect them to /docs/file-format/intro
          },
          {
            from: '/docs/capture-interface',  // When someone visits /docs/capture-interface
            to: '/docs/capture-interface/intro', // redirect them to /docs/capture-interface/intro
          },
          {
            from: '/docs/pqc',  // When someone visits /docs/pqc
            to: '/docs/pqc/intro', // redirect them to /docs/pqc/intro
          },
          {
            from: '/docs/ai',  // When someone visits /docs/ai
            to: '/docs/ai/intro', // redirect them to /docs/ai/intro
          },

        ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/optimist-workshop/optimist-ose/tree/dev/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/optimist-workshop/optimist-ose/tree/dev/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-4M5R7RKYZF',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.jpeg',
      navbar: {
        title: '',
        logo: {
          alt: 'OPTIMIST Logo',
          src: 'img/logo.jpeg',
        },
        items: [
          // {
          //   to: "/",
          //   label: "Home",
          //   position: "right",
          // },
          {
            label: "About", // The main menu item
            position: "right",   // Adjust position in the navbar
            items: [
              { label: "Why OPTIMIST?", to: "/blog/open-source" },  // Page 1
              { label: "Organization", to: "/organization" },  // Page 2
              { label: "Timeline", to: "/timeline" },  // Page 3
              { label: "Contact", to: "/contact" },  // Page 4
            ],
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
          {
            label: "Workshops", // The main menu item
            position: "right",   // Adjust position in the navbar
            items: [
              { label: "CHES 2025", to: "/ches25" },  // Page 1
              { label: "CHES 2024", to: "/ches24" },  // Page 2
            ],
          },
          {
            to: "https://discourse.optimist-ose.org/",
            label: "Join",
            position: "right",
            className: "navbar-button", // Apply custom class
            target: "_self", // Ensures it opens in the same tab
          },
          // {
          //   href: 'https://github.com/optimist-workshop',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discourse',
                href: 'https://discourse.optimist-ose.org/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/optimist-workshop/optimist-ose',
              },
              {
                label: 'Contact Us',
                to: '/contact',
              },
            ],
          },
        ],
        copyright: `<img src="/img/nsf_logo.svg" alt="NSF Logo" style="height: 50px; vertical-align: middle; margin-left: 5px;"> Supported in part by NSF POSE <a class="award-link" href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2346138&HistoricalAwards=false" target="_blank" rel="noopener noreferrer">Award 2346138</a>. <br> Copyright © ${new Date().getFullYear()} OPTIMIST. `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'LZENGH3F53',
  
        // Public API key: it is safe to commit it
        apiKey: '9a7f67eb767b865667e878fcab2e081c',
  
        indexName: 'optimist-ose',
  
        // // Optional: see doc section below
        // contextualSearch: true,
  
        // // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',
  
        // // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: true,
  
        //... other Algolia params
      },
    }),
};

export default config;
