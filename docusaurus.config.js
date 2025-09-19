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
    organizationName: 'hackutd',
    projectName: 'hackutd-tech-guide',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'dayof',
                path: 'dayof',
                routeBasePath: 'dayof',
                sidebarPath: require.resolve('./sidebars-dayof.js'), // Fixed: point to correct sidebar
            },
        ],
    ],
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
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
                        // Fixed: remove docId and use proper link format
                        to: '/dayof/',
                        position: 'left',
                        label: 'HackUTD 2025: Lost in the Pages',
                    },
                    {
                        href: 'https://github.com/acmutd/hackutd-tech-guide',
                        label: 'GitHub',
                        position: 'right',
                    },
                    {
                        href: 'https://www.instagram.com/hackutd/',
                        label: 'Instagram',
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
                                label: 'Day of Event', // Added dayof to footer
                                to: '/dayof/',
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
