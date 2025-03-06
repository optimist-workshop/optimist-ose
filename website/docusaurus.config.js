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

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/optimist-workshop/optimist-ose/tree/main/website/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.jpeg',
        },
        items: [
          {
            to: "/",
            label: "Home",
            position: "right",
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Documentation',
          },
          // {to: '/blog', label: 'Blog', position: 'right'},
          {
            label: "Workshops", // The main menu item
            position: "right",   // Adjust position in the navbar
            items: [
              { label: "CHES 2024", to: "/ches24" },  // Page 1
            ],
          },
          {
            to: "https://discourse.optimist-ose.org/",
            label: "Join",
            position: "right",
            className: "navbar-button", // Apply custom class
          },
          
          {
            href: 'https://github.com/optimist-workshop',
            label: 'GitHub',
            position: 'right',
          },
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
            ],
          },
        ],
        copyright: `<img src="/img/nsf_logo.svg" alt="NSF Logo" style="height: 50px; vertical-align: middle; margin-left: 5px;"> Supported in part by NSF POSE <a class="award-link" href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2346138&HistoricalAwards=false" target="_blank" rel="noopener noreferrer">Award 2346138</a>. <br> Copyright © ${new Date().getFullYear()} OPTIMIST. `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
