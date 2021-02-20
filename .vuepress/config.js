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
    ],
    locales: {
        '/': {
            lang: 'en',
            title: 'Kangaroo',
            description: 'SQL client and admin tool for popular databases. focus on great experience and complete modeling, query, analysis, deployment, report, and automation quickly.',
        },
        '/en/': {
            lang: 'en-US',
            title: 'Kangaroo',
            description: 'SQL client and admin tool for popular databases. focus on great experience and complete modeling, query, analysis, deployment, report, and automation quickly.',
        },
        '/zh/': {
            lang: 'zh-CN',
            title: '袋鼠数据库工具',
            description: '为热门数据库打造的SQL客户端和管理工具，专注于快捷高效的完成建模、查询、分析、部署、报表和自动化等工作'
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
                nav: require('./navigation/en'),
            },
            '/en/': {
                label: 'English',
                selectText: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                nav: require('./navigation/en'),
                sidebar: {
                    '/en/blog/': require('./markdown/blogs'),
                    '/en/document/': require('./markdown/docs'),
                    '/en/download/': require('./markdown/versions'),
                    '/en/license/': require('./markdown/license'),
                }
            },
            '/zh/': {
                label: '简体中文',
                selectText: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                nav: require('./navigation/zh'),
                sidebar: {
                    '/zh/blog/': require('./markdown/blogs'),
                    '/zh/document/': require('./markdown/docs'),
                    '/zh/download/': require('./markdown/versions'),
                    '/zh/license/': require('./markdown/license'),
                }
            },
        }
    },
    plugins: [
        ['@vuepress/back-to-top'],
        [ '@vuepress/google-analytics', {
            'ga': 'UA-149848419-1'
        }],
        ['@vuepress/last-updated', {
            transformer: timestamp => {
              return new Date(timestamp).toISOString()
            }
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
        ['sitemap', {
            hostname: 'https://www.datatable.online'
        }],
        ['vuepress-plugin-redirect', {
            locales: true,
        }],
        ['qrcode', {
            labelText: {
                '/': 'QRCode',
                '/en/': 'QRCode',
                '/zh/': '扫码阅读',
            },
            size: 'small',
            channel: true,
        }],
        ['flowchart'],
        ['vuepress-plugin-zooming'],
        ['vuepress-plugin-baidu-autopush'],
    ],
    extraWatchFiles: [
        '.vuepress/navigation/en.js',
        '.vuepress/navigation/zh.js'
    ]
}
