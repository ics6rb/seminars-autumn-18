module.exports = {
    themeConfig: {
        nav: [
            { 
                text: 'Главная', 
                link: '/',
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
                    ]
                }
            ],
        },
        search: true,
        searchMaxSuggestions: 15,
    }
};