// sidebars-dayof.js - Updated with clean titles

module.exports = {
    dayOfSidebar: [
        {
            type: 'category',
            label: 'Hackerpack 2026',
            link: {
                type: 'doc',
                id: 'index',
            },

            items: [
                {
                    type: 'category',
                    label: 'Essential Resources',
                    link: {
                        type: 'doc',
                        id: 'newMDS/essential-resources/index'
                    },
                    items: [
                        {
                            type: 'doc',
                            id: 'newMDS/essential-resources/check-in-guide',
                            label: 'Check-in Guide',
                        },
                        {
                            type: 'doc',
                            id: 'newMDS/essential-resources/schedule2026',
                            label: 'Schedule',
                        },
                        {
                            type: 'doc',
                            id: 'newMDS/essential-resources/discord-wifi',
                            label: 'Discord & WiFi',
                        },
                        {
                            type: 'doc',
                            id: 'newMDS/essential-resources/mentors',
                            label: 'Mentors',
                        },
                        {
                            type: 'doc',
                            id: 'newMDS/essential-resources/food',
                            label: 'Food',
                        },
                        {
                            type: 'doc',
                            id: 'newMDS/essential-resources/maps-hacker-spaces',
                            label: 'Maps & Hacker Spaces',
                        },
                        {
                            type: 'doc',
                            id: 'newMDS/essential-resources/help',
                            label: 'Help',
                        },
                    ],
                },
                {
                    type: 'category',
                    label: 'Workshops & Fun Events',
                    link: {
                        type: 'doc',
                        id: 'newMDS/workshop-fun-events/index'
                    },
                    items: [
                        {
                            type: 'doc',
                            id: 'newMDS/workshop-fun-events/workshops',
                            label: 'Workshops',
                        },
                        {
                            type: 'doc',
                            id: 'newMDS/workshop-fun-events/fun-events',
                            label: 'Fun Events',
                        },
                        {
                            type: 'doc',
                            id: 'newMDS/workshop-fun-events/points-guide',
                            label: 'Points Guide',
                        }
                    ],
                },

                // sponsor tracks
                {
                    type: 'category',
                    label: 'Sponsor Tracks and Prizes',
                    link:{
                        type: 'doc',
                        id: 'newMDS/sponsor-tracks',
                    },
                    items:[],
                    /*
                    items: [
                        {
                            type: 'doc',
                            id: 'venue-parking',
                            label: 'Venue & Parking',
                        },
                        {
                            type: 'doc',
                            id: 'prizes-challenges',
                            label: 'Prizes & Challenges',
                        },
                    ],
                    */
                },

                // Submission and judging
                {
                    type: 'category',
                    label: 'Submission & Judging',
                    link: {
                        type: 'doc',
                        id: 'newMDS/submission-judging/index'
                    },
                    items: [
                        {
                            type: 'doc',
                            id: 'newMDS/submission-judging/devpost',
                            label: 'Devpost Guide',
                        },
                        {
                            type: 'doc',
                            id: 'newMDS/submission-judging/devpost-markdown',
                            label: 'Devpost Guide (Markdown)',
                        },
                        {
                            type: 'doc',
                            id: 'newMDS/submission-judging/teams',
                            label: 'Teams',
                        },
                        {
                            type: 'doc',
                            id: 'newMDS/submission-judging/judging',
                            label: 'Judging',
                        },
                        {
                            type: 'doc',
                            id: 'newMDS/submission-judging/pitching',
                            label: 'Pitching',
                        },
                    
                    ],
                },


                // event logistics
                {
                    type: 'category',
                    label: 'Event Logistics',
                    link: {
                        type: 'doc',
                        id: 'newMDS/event-logistics/index'
                    },
                    items: [
                        {
                            type: 'doc',
                            id: 'newMDS/event-logistics/venue-parking',
                            label: 'Venue & Parking',
                        },
                        {
                            type: 'doc',
                            id: 'newMDS/event-logistics/travel-guide',
                            label: 'Travel Guide',
                        },
                        {
                            type: 'doc',
                            id: 'newMDS/event-logistics/reimbursement',
                            label: 'Reimbursement',
                        },
                    
                    ],
                },


            ],
        },
    ],
};
