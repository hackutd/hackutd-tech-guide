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
                                            id: 'guided-project',
                                            path: 'guided-project',
                                            routeBasePath: 'guided-project',
                                            sidebarPath: require.resolve('./sidebars-guided-project.js'),
                                            sidebarCollapsed: false,
                        },
                                ],
                ],
        /* Local search (build-time index, no Algolia account). See https://github.com/easyops-cn/docusaurus-search-local */
        themes: [
                    [
                                    require.resolve('@easyops-cn/docusaurus-search-local'),
                        {
                                            hashed: true,
                                            language: ['en'],
                                            highlightSearchTermsOnTargetPage: true,
                                            explicitSearchResultPath: true,
                                            /* Main docs use routeBasePath '/'; use '/' not '' (Joi rejects empty string). Plugin normalizes to root. */
                                            docsRouteBasePath: ['/', 'guided-project'],
                                            docsDir: ['docs', 'guided-project'],
                                            blogRouteBasePath: ['archive'],
                                            indexDocs: true,
                                            indexBlog: true,
                                            indexPages: false,
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
