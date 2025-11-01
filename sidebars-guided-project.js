
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
                    type: 'category',
                    label: 'All Resources',
                    link: {
                        type: 'doc',
                        id: 'All Resources/index',
                    },
                    items: [
                        'All Resources/shortcuts',
                        'All Resources/tailwind',
                    ],
                },
                {
                    type: 'category',
                    label: 'Frontend',
                    link: {
                        type: 'doc',
                        id: 'Frontend/index',
                    },
                    items: [
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
                    link: {
                        type: 'doc',
                        id: 'Backend/index',
                    },
                    items: [
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