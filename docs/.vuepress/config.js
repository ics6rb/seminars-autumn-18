module.exports = {
    title: 'ЯИП',
    themeConfig: {
        nav: [
            // {
            //     text: 'Материалы на сегодня',
            //     link: '/hot/',
            // },
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
                    ]
                }
            ],
        },
        search: true,
        searchMaxSuggestions: 15,
    }
};
