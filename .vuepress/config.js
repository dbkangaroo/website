module.exports = {
    base: '/',
    head: [
        ['link', { rel: 'icon', href: '/kangaroo_small.png' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'keywords', content: 'KangarooDB,DBKangaroo,MySQL,MariaDB,SQLite,PostgreSQL,Redis,袋鼠数据库,数据库袋鼠,袋鼠数据库管理工具,袋鼠数据库工具,袋鼠数据库系统,袋鼠数据库客户端' }]
    ],
    locales: {
        '/': {
            lang: 'English',
            title: 'Kangaroo',
            description: 'SQL client and admin tool for popular databases',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: '袋鼠数据库工具',
            description: '为热门数据库系统打造的 SQL 客户端和管理工具'
          }
    },
    themeConfig: {
        logo: '/kangaroo_small.png',
        // repo: 'dbkangaroo/kangaroo',
        docsRepo: 'dbkangaroo/dbkangaroo.github.io',
        docsBranch: 'dev',
        editLinks: true,
        search: true,
        searchMaxSuggestions: 10,
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                nav: require('./nav/en'),
                sidebar: {
                    '/blog/': get_sidebar_blogs(),
                    '/document/': get_sidebar_documents(),
                    '/download/': get_sidebar_versions(),
                }
            },
            '/zh/': {
                label: '简体中文',
                selectText: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                nav: require('./nav/zh'),
                sidebar: {
                    '/zh/blog/': get_sidebar_blogs(),
                    '/zh/document/': get_sidebar_documents(),
                    '/zh/download/': get_sidebar_versions(),
                }
            },
        }
    },
    plugins: {
        '@vuepress/google-analytics': {
            'ga': 'UA-149848419-1'
        },
        '@vssue/vuepress-plugin-vssue': {
            platform: 'github',
            owner: 'dbkangaroo',
            repo: 'comments',
            admins: ['taozuhong'],
            clientId: 'f5f19bd32a82283b7570',
            clientSecret: '2c3a55d0763abd0abde569e17ba5c40b2134b5de',
        },
    }
}

function get_sidebar_versions()
{
    return [
        '',
        'v0.29.1.200713',
        'v0.28.1.200629',
        'v0.27.1.200622',
        'v0.26.1.200615',
        'v0.25.1.200601',
        'v0.24.1.200525',
        'v0.23.1.200518',
        'v0.22.1.200511',
        'v0.21.1.200504',
        'v0.20.1.200420',
        'v0.19.1.200413',
        'v0.18.1.200406',
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
    ]
}

function get_sidebar_blogs()
{
    return [
        '',
        '003-serialize-glib-object',
        '002-how-to-deploy-gtk-app-on-windows',
        '001-why-choose-vala',
    ]
}

function get_sidebar_documents()
{
    return [
        '',
        'license',
        'changelog',
        'faq',
        'connection',
        'schema',
        'datagrid',
        'install_windows',
        'install_linux',
        'install_macos',
    ]
}