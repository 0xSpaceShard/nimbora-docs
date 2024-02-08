// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nimbora Yield Dex',
  tagline: 'Yield Dexing on Starknet',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.nimbora.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '0xSpaceShard', // Usually your GitHub org/user name.
  projectName: 'nimbora', // Usually your repo name.

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
            'https://github.com/0xSpaceShard/nimbora_yields_l2',
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
      image: 'img/Social media icon.png',
      navbar: {
        title: 'Nimbora Docs',
        logo: {
          alt: 'Nimbora Logo',
          src: 'img/icon 2.svg',
          srcDark: 'img/icon 1.svg',

        },
        items: [
          {
            to: 'docs/contracts/architecture/overview',
            position: 'left',
            label: 'Contracts',
            className: 'V3_active'
          },
          {
            to: 'docs/sdks/sdk/overview',
            position: 'left',
            label: 'SDK',
            className: 'V3_active'
          },
          {
            to: 'docs/strategies/overview',
            position: 'left',
            label: 'Strategies',
            className: 'V3_active'
          },
          {
            href: 'https://github.com/0xSpaceShard/nimbora_yields_l2',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                to: 'docs/contracts/architecture/overview',
                label: 'Contracts',
              },
              {
                to: 'docs/sdks/sdk/overview',
                label: 'SDK',
              },
              {
                to: 'docs/strategies/overview',
                label: 'Strategies',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/AaUszuNc',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Nimbora_',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/0xSpaceShard',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nimbora, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
