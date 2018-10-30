module.exports = {
    title: 'ЯИП',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        nav: [
            {
                text: 'Материалы на сегодня',
                link: '/hot/',
            },
            { 
                text: 'Семинары',
                link: '/seminars/',
            },
            { 
                text: 'Дополнительные материалы',
                link: '/external/',
            },
        ],
        sidebar: {
            '/seminars/': [
                {
                    title: 'Семинары',
                    collapsable: false,
                    children: [
                        '',
                        'seminar-1',
                        'seminar-2',
                        'seminar-3',
                        'seminar-4',
                        'seminar-5',
                    ]
                }
            ],
            '/external/': [
                {
                    title: 'Дополнительные материалы',
                    collapsable: false,
                    children: [
                        '',
                        'seminar-1',
                        'seminar-2',
                        'seminar-5',
                    ]
                }
            ],
        },
        search: true,
        searchMaxSuggestions: 15,
    }
};
