
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // Define the sidebar structure for Guided Project
    guidedProjectSidebar: [
        {
            type: 'category',
            label: 'Guided Project',
            link: {
                type: 'doc',
                id: 'index',
            },
            items: [
                'Installation_Guide',
                {
                    type: 'doc',
                    id: 'all_resources',
                    label: 'All Resources',
                },
                {
                    type: 'category',
                    label: 'Frontend',
                    items: [
                        {
                            type: 'doc',
                            id: 'Frontend/index',
                            label: 'Project Setup',
                        },
                        'Frontend/part2',
                        'Frontend/cards',
                        'Frontend/featured_items',
                        'Frontend/reusable',
                        'Frontend/routing',
                    ],
                },
                {
                    type: 'category',
                    label: 'Backend',
                    items: [
                        {
                            type: 'doc',
                            id: 'Backend/index',
                            label: 'Connecting a Backend (Firebase)',
                        },
                        'Backend/api',
                        'Backend/crud',
                        'Backend/user_auth',
                    ],
                },
                'Bonus',
            ],
        },
    ],
};

module.exports = sidebars;