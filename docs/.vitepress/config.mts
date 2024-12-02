import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bezhuang's Docs (Preview)",
  lang: 'zh-CN',
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
      { text: 'Spring 全家桶', link: '/Spring/' },
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
              collapsed: false,
              items: [
                { text: '变量、表达式和语句', link: '/算法/C++/变量、表达式和语句' },
                { text: '数组、字符串和函数', link: '/算法/C++/数组、字符串和函数' },
                { text: '类、结构体、指针和引用', link: '/算法/C++/类、结构体、指针和引用' },
                { text: 'STL、位运算和常用库函数', link: '/算法/C++/STL、位运算和常用库函数' }
              ]
            },
            { text: 'C 语法基础', link: 'https://s.54benniao.com/ttib02b' },
            { text: 'Java 语法基础', link: 'https://s.54benniao.com/ttf3itv20' }
          ]
        },
        {
          text: '算法入门',
          items: [
            {
              text: '未完待续'
            }
          ]
        }
      ],
      '/Spring/': [
        {
          text: 'Java 进阶',
          items: [
            {
              text: '未完待续'
            }
          ]
        },
        {
          text: '常用开发库',
          collapsed: false,
          items: [
            { text: 'Lombok 工具库', link: '/Spring/Lombok' },
            { text: '未完待续' }
          ]
        },
        {
          text: 'Spring 基础教程',
          collapsed: true,
          items: [
            { text: 'Spring 框架教程', link: 'https://s.54benniao.com/t0yzitb8v' },
            { text: 'Thymeleaf 教程', link: 'https://s.54benniao.com/tbaqitt8b' },
            { text: 'MyBatis 框架教程', link: 'https://s.54benniao.com/tbgaiv08b' },
            { text: 'Spring MVC 教程', link: 'https://s.54benniao.com/tvglivvgt' },
            { text: 'Spring Boot 教程', link: 'https://s.54benniao.com/t02fi0vgb' },
            { text: 'Spring Cloud 教程', link: 'https://s.54benniao.com/t08divtgt' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Bezhuang' }
    ],

    search: {
      provider: 'local',
    },

    footer: {
      // message: 'Released under the MIT License.',
      copyright: '©2024 Bezhuang'
    },
    i18nRouting: false,
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    outline: {
      level: "deep", label: "目录"
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
