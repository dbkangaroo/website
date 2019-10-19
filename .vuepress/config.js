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
    locales: {
        '/': {
            lang: 'English',
            title: 'Kangaroo',
            description: 'a database management tool for everyone',
        },
    },
    head: [
        ['link', { rel: 'icon', href: '/kangaroo_small.png' }]
    ],
    themeConfig: {
        repo: 'dbkangaroo/kangaroo',
        editLinks: true,
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                nav: [{
                        text: 'Blog',
                        link: '/document/'
                    },
                    {
                        text: 'Guide',
                        link: '/guide/'
                    },
                    {
                        text: 'Download',
                        link: '/download/'
                    },
                    {
                        text: 'New Feature',
                        link: 'https://github.com/dbkangaroo/kangaroo/issues/new'
                    },
                ],
                sidebar: {
                    '/document/': [
                        '',
                        '003-serialize-glib-object',
                        '002-how-to-deploy-gtk-app-on-windows',
                        '001-why-choose-vala',
                    ],
                    '/guide/': [
                        '',
                        'install_windows',
                        'install_macos',
                        'install_linux',
                    ],
                    '/download/': [
                        '',
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