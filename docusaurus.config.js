// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'HackUTD Tech Resources',
    tagline: 'Your one-stop shop for all content from HackUTD!',
    url: 'https://guide.hackutd.co',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'hackutd', // Usually your GitHub org/user name.
    projectName: 'hackutd-tech-guide', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
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
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: 'all',
                        copyright: `Copyright © ${new Date().getFullYear()} HackUTD`,
                    },
                    routeBasePath: 'archive',
                    blogTitle: 'Blog',
                    blogSidebarCount: 'ALL',
                    truncateMarker: /<!--\s*(truncate|more)\s*-->/,
                    blogSidebarTitle: 'All posts',
                    postsPerPage: 5,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'HackUTD Tech Guide',
                logo: {
                    alt: 'HackUTD Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'resources',
                        position: 'left',
                        label: 'Resources',
                    },
                    {
                        to: 'archive',
                        label: 'Blog',
                        position: 'left',
                    },
                    {
                        href: 'https://github.com/acmutd/hackutd-tech-guide',
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
                                label: 'Resources',
                                to: '/resources',
                            },
                            {
                                label: 'Blog',
                                to: '/archive',
                            },
                            {
                                label: 'Concepts',
                                to: '/conceptual-directory/concepts',
                            },
                            {
                                label: 'Guided Project',
                                to: '/guided%20project',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Main Organizer Site',
                                href: 'https://hackutd.co',
                            },
                            {
                                label: 'ACM Discord',
                                href: 'https://acmutd.co/discord',
                            },
                            {
                                label: 'Instagram',
                                href: 'https://instagram.com/hackutd',
                            },
                            {
                                label: 'YouTube',
                                href: 'https://www.youtube.com/channel/UCEM6btSfs7X7Yvv1dLMoyfA',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/acmutd/hackutd-tech-guide',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} ACM HackUTD. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
