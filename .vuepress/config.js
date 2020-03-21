module.exports = {
    plugins: [
        [
            'sitemap',
            {
                hostname: 'https://dbkangaroo.github.io/'
            }
        ],
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-149848419-1'
            }
        ]
    ],
    base: '/',
    head: [
        ['link', { rel: 'icon', href: '/kangaroo_small.png' }],
        ['meta', { name: 'keywords', content: 'Kangaroo,DBKangaroo,Kangaroo,MySQL,MariaDB,SQLite,PostgreSQL,Redis,袋鼠数据库,数据库袋鼠,袋鼠数据库管理工具,袋鼠数据库工具,袋鼠数据库系统,袋鼠数据库客户端' }]
    ],
    locales: {
        '/': {
            lang: 'English',
            title: 'Kangaroo',
            description: 'a database management tool for everyone',
        },
    },
    themeConfig: {
        logo: '/kangaroo_small.png',
        repo: 'dbkangaroo/kangaroo',
        editLinks: false,
        search: true,
        searchMaxSuggestions: 10,
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                nav: [{
                        text: 'Download',
                        link: '/download/'
                    },
                    {
                        text: 'License',
                        link: '/document/license'
                    }, {
                        text: 'News',
                        link: '/document/news'
                    },
                    {
                        text: 'Documents',
                        link: '/document/'
                    },
                    {
                        text: 'Blog',
                        link: '/blog/'
                    },
                    {
                        text: 'New Feature',
                        link: 'https://github.com/dbkangaroo/kangaroo/issues/new'
                    },
                ],
                sidebar: {
                    '/blog/': [
                        '',
                        '003-serialize-glib-object',
                        '002-how-to-deploy-gtk-app-on-windows',
                        '001-why-choose-vala',
                    ],
                    '/document/': [
                        '',
                        'license',
                        'faq',
                        'news',
                        'install_windows',
                        'install_macos',
                        'install_linux',
                    ],
                    '/download/': [
                        '',
                        'v0.17.0.200323',
                        'v0.16.0.200316',
                        'v0.15.0.200302',
                        'v0.14.0.200217',
                        'v0.13.0.200210',
                        'v0.12.1.200120',
                        'v0.11.1.200113',
                        'v0.11.0.200106',
                        'v0.10.0.191223',
                        'v0.9.5.191216',
                        'v0.9.4.191209',
                        'v0.9.3.191202',
                        'v0.9.2.191125',
                        'v0.9.1.191118',
                        'v0.9.0.191111',
                        'v0.8.5.191104',
                        'v0.8.4.191028',
                        'v0.8.3.191021',
                        'v0.8.2.191014',
                        'v0.8.1.190930',
                        'v0.8.0.190923',
                        'v0.7.2.190916',
                    ],
                }
            },
        }
    }
}