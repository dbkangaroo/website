const extendsNetworks = {
    pinterest: {
      sharer: 'https://pinterest.com/pin/create/button/?url=@url&media=@media&description=@title',
      type: 'popup',
      icon: '/images/pinterest.png',
    },
    linkedin: {
      sharer: 'https://www.linkedin.com/shareArticle?mini=true&url=@url&title=@title&summary=@description',
      type: 'popup',
      color: '#1786b1',
      icon: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M910.336 0H113.664A114.005333 114.005333 0 0 0 0 113.664v796.672A114.005333 114.005333 0 0 0 113.664 1024h796.672A114.005333 114.005333 0 0 0 1024 910.336V113.664A114.005333 114.005333 0 0 0 910.336 0zM352.256 796.330667H207.189333V375.466667h145.066667z m-72.021333-477.866667a77.824 77.824 0 0 1-81.237334-74.069333A77.824 77.824 0 0 1 280.234667 170.666667a77.824 77.824 0 0 1 81.237333 73.728 77.824 77.824 0 0 1-81.237333 73.386666z m582.314666 477.866667H716.8v-227.669334c0-46.762667-18.432-93.525333-73.045333-93.525333a84.992 84.992 0 0 0-81.237334 94.549333v226.304h-140.629333V375.466667h141.653333v60.757333a155.989333 155.989333 0 0 1 136.533334-71.338667c60.416 0 163.498667 30.378667 163.498666 194.901334z" /></svg>',
    },
}

module.exports = {
    base: '/',
    head: [
        ['link', { rel: 'icon', href: '/images/kangaroo.svg' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'keywords', content: 'database,sql,dangaroo,kangaroodb,dbkangaroo,mysql,mariadb,sqlite,postgresql,redis,袋鼠,蓝色袋鼠,袋鼠数据库,数据库袋鼠,袋鼠数据库管理工具,袋鼠数据库工具,袋鼠数据库客户端' }],
        ['script', { 'data-ad-client': 'ca-pub-3975819313740938', async: true, src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' }],
    ],
    locales: {
        '/': {
            lang: 'en',
            title: 'Kangaroo',
            description: 'SQL client and admin tool for popular databases',
        },
        '/en/': {
            lang: 'en-US',
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
        logo: '/images/kangaroo.svg',
        // repo: 'dbkangaroo/kangaroo',
        docsRepo: 'dbkangaroo/dbkangaroo.github.io',
        docsBranch: 'dev',
        editLinks: true,
        search: true,
        searchMaxSuggestions: 10,
        locales: {
            '/': {
                label: 'Default',
                selectText: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                nav: require('./nav/en'),
            },
            '/en/': {
                label: 'English',
                selectText: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                nav: require('./nav/en'),
                sidebar: {
                    '/en/blog/': get_sidebar_blogs(),
                    '/en/document/': get_sidebar_documents(),
                    '/en/download/': get_sidebar_versions(),
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
    plugins: [
        [ '@vuepress/google-analytics', {
            'ga': 'UA-149848419-1'
        }],
        ['@vssue/vuepress-plugin-vssue', {
            platform: 'github',
            owner: 'dbkangaroo',
            repo: 'comments',
            admins: ['taozuhong'],
            clientId: 'f5f19bd32a82283b7570',
            clientSecret: '2c3a55d0763abd0abde569e17ba5c40b2134b5de',
        }],
        ['social-share', {
            networks: ['facebook', 'qq', 'twitter', 'line', 'reddit', 'skype', 'douban', 'whatsapp', 'telegram', 'weibo', 'linkedin', 'pinterest'],
            email: 'dbkangaroo@hotmail.com',
            twitterUser: 'DBKangaroo',
            fallbackImage: '/social-share.png',
            autoQuote: true,
            isPlain: false,
            noGlobalSocialShare: true,
            extendsNetworks,
        }],
        [
            'vuepress-plugin-copyright',
            {
                disabled: true,
                authorName: {
                    'zh-CN': ' 陶祖洪 ',
                    'en-US': 'TAOZUHONG',
                },
            },
        ],
        ['@vuepress/last-updated', {
            transformer: timestamp => {
              return new Date(timestamp).toISOString()
            }
        }],
        ['sitemap', {
            hostname: 'https://www.datatable.online'
        }],
        ['vuepress-plugin-redirect', {
            locales: true,
        }],
        ['flowchart'],
        ['vuepress-plugin-zooming'],
        ['vuepress-plugin-baidu-autopush'],
    ],
    extraWatchFiles: [
        '.vuepress/nav/en.js',
        '.vuepress/nav/zh.js'
    ]
}

function get_sidebar_versions()
{
    return [
        '',
        'v1.0.6.201109',
        'v1.3.1.201102',
        'v1.0.5.201019',
        'v0.99.3.200921',
        'v0.99.2.200907',
        'v0.99.1.200824',
        'v0.33.1.200817',
        'v0.32.1.200810',
        'v0.31.1.200803',
        'v0.30.1.200727',
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
        '004-how-to-deploy-gtk-app-on-mac',
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
        'feature-matrix',
        'changelog',
        'faq',
        'connection',
        'schema',
        'datagrid',
        'editor',
        'install-windows',
        'install-linux',
        'install-macos',
    ]
}
