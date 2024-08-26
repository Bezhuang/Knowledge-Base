import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bezhuang's Docs (Preview)",
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ],
  // description: "（^……^）",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    //logo: '/logo.svg',
    nav: [
      { text: '主页', link: '/' },
      { text: '算法手册', link: '/算法/' },
      {
        text: '读书笔记',
        items: [
          { text: '算法之美', link: 'https://www.yuque.com/bezhuang/innoviscience/bmggg9p89flaf6el?singleDoc# 《愚蠢的决定》' },
          { text: '黑客与画家', link: 'https://www.yuque.com/bezhuang/innoviscience/tq677szcgtr8vdva?singleDoc# 《一个虚构的故事》' }
        ]
      }
    ],

    sidebar: {
      '/算法/': [
        {
          text: '语法基础',
          items: [
            {
              text: 'C++ 语法基础', link: '/算法/C++/',
              collapsed: true,
              items: [
                { text: '变量、表达式和语句', link: '/算法/C++/变量、表达式和语句' },
                { text: '数组、字符串和函数', link: '/算法/C++/数组、字符串和函数' },
                { text: '类、结构体、指针和引用', link: '/算法/C++/类、结构体、指针和引用' },
                { text: 'STL、位运算和常用库函数', link: '/算法/C++/STL、位运算和常用库函数' }
              ]
            }
          ]
        },
        {
          text: '算法入门',
          items: [
            {
              text: 'TODO'
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Bezhuang' }
    ],

    search: {
      provider: 'local',
      options: {
        miniSearch: {
          /**
           * @type {Pick<import('minisearch').Options, 'extractField' | 'tokenize' | 'processTerm'>}
           */
          options: {
            /* ... */
          },
          /**
           * @type {import('minisearch').SearchOptions}
           * @default
           * { fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } }
           */
          searchOptions: {
            /* ... */
          }
        }
      }
    },

    footer: {
      // message: 'Released under the MIT License.',
      copyright: '©2024 Bezhuang'
    }
  },

  markdown: {
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    },
    math: true
  }
})
