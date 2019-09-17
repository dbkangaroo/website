module.exports = {
    plugins: {
        'sitemap': {
            hostname: 'https://dbkangaroo.github.io/'
        }
    },
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
    theme: '@vuepress/vue',
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
                    '/guide/': [
                        '',
                        'install_linux',
                        'install_windows',
                        'install_macos',
                    ],
                    '/download/': [
                        '',
                        'v0.7.2.190916',
                    ],
                }
            },
        }
    }
}