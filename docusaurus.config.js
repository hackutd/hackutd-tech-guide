// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'HackUTD Tech Guide',
    tagline:
        'The HackUTD tech platform. Where you can find guides, resources, and information for HackUTD!',
    url: 'https://guide.hackutd.co',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // meta data for SEO:

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
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                    ignorePatterns: ['/tags/**'],
                    filename: 'sitemap.xml',
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            metadata: [
                {
                    name: 'keywords',
                    content:
                        'HackUTD, HackUTD 2025, hackathon, UT Dallas, UTD, programming, coding competition, student hackathon, Dallas, Texas, Lost in the Pages',
                },
                {
                    name: 'description',
                    content:
                        'Complete guide and resources for HackUTD 2025: Lost in the Pages hackathon at University of Texas at Dallas. Find day-of guides, technical resources, and everything you need for the event.',
                },
                {
                    property: 'og:image',
                    content: 'https://guide.hackutd.co/img/hackutd-2025-og.png',
                },
                { property: 'og:type', content: 'website' },
                { property: 'og:site_name', content: 'HackUTD Tech Guide' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:site', content: '@HackUTD' },
                { name: 'author', content: 'HackUTD Team' },
                { name: 'robots', content: 'index, follow' },
            ],
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
