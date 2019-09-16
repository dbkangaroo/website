module.exports = {
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
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          },
          {
            text: 'Download',
            link: '/download.html'
          },
          {
            text: 'New Feature',
            link: 'https://github.com/dbkangaroo/kangaroo/issues/new'
          },
        ],
        sidebar: {
          '/guide/': getGuideSidebar('Guide'),
        }
      },
    }
  }
}

function getGuideSidebar (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'install_linux',
        'install_windows',
        'install_macos',
      ]
    }
  ]
}