// sidebars-dayof.js
module.exports = {
    dayOfSidebar: [
        {
            type: 'category',
            label: 'HackUTD 2025: Lost in the Pages',
            link: {
                type: 'doc',
                id: 'index',
            },
            items: [
                // Primary Resources
                {
                    type: 'category',
                    label: 'Essential Resources',
                    items: ['general-hackerpack', 'devpost-guide'],
                },
                // Role-Specific Information
                {
                    type: 'category',
                    label: 'Other Information',
                    items: [
                        'volunteer-hackerpack',
                        'mentor-guide',
                        'judge-guide',
                        'travel-guide',
                    ],
                },
                // Event Information
                {
                    type: 'category',
                    label: 'Event Information',
                    items: [
                        'travel-reimbursement',
                        'venue-parking',
                        'guided-project',
                        'prizes-challenges',
                    ],
                },
            ],
        },
    ],
};
