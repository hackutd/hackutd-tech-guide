// sidebars-dayof.js - Updated with clean titles

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
                {
                    type: 'category',
                    label: 'Essential Resources',
                    items: [
                        {
                            type: 'doc',
                            id: 'general-hackerpack',
                            label: 'Hackerpack',
                        },
                        {
                            type: 'doc',
                            id: 'devpost-guide',
                            label: 'Devpost Guide',
                        },
                    ],
                },
                // Team Resources (renamed from "Other Information")
                {
                    type: 'category',
                    label: 'Other Resources',
                    items: [
                        {
                            type: 'doc',
                            id: 'travel-guide',
                            label: 'Travel Guide',
                        },
                        {
                            type: 'doc',
                            id: 'mentor-guide',
                            label: 'Need a Mentor?',
                        },
                        {
                            type: 'doc',
                            id: 'judge-guide',
                            label: 'Submission & Judging Guide',
                        },
                        {
                            type: 'doc',
                            id: 'travel-reimbursement',
                            label: 'Travel Reimbursement',
                        }
                    ],
                },
                // Event Information
                {
                    type: 'category',
                    label: 'Event Logistics',
                    items: [
                        {
                            type: 'doc',
                            id: 'venue-parking',
                            label: 'Venue & Parking',
                        },
                        {
                            type: 'doc',
                            id: 'guided-project',
                            label: 'Guided Project',
                        },
                        {
                            type: 'doc',
                            id: 'prizes-challenges',
                            label: 'Prizes & Challenges',
                        },
                    ],
                },
            ],
        },
    ],
};
