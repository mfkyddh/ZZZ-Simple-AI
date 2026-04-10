import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'

/**
 * ZZZ 白话讲 AI - VitePress 配置
 * 
 * 架构原则：网站与核心内容分离
 * - docs/ 目录：唯一数据源（Markdown 内容）
 * - site/ 目录：网站配置、主题、静态资源
 * - 构建时通过符号链接关联，避免污染 docs/
 */

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 站点元信息
  title: 'ZZZ 白话讲 AI',
  description: '用大白话讲清楚 AI 的基本逻辑，让零基础的人也能看懂、能复述',
  lang: 'zh-CN',
  
  // 不设置 srcDir，默认从 site/ 目录读取
  // 内容通过符号链接从 docs/ 映射到 site/content/
  srcDir: './content',
  outDir: './.vitepress/dist',
  
  // 基础路径
  base: '/',
  
  // 清理 URL（不带 .html 后缀）
  cleanUrls: true,
  
  // 最后更新时间
  lastUpdated: true,
  
  // 站点地图
  sitemap: {
    hostname: 'https://zzz-simple-ai.vercel.app'
  },
  
  // 头部配置
  head: [
    ['link', { rel: 'icon', href: '/favicon.png', type: 'image/png' }],
    ['meta', { name: 'theme-color', content: '#0f0f0f' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'ZZZ 白话讲 AI' }],
    ['meta', { name: 'og:description', content: '用大白话讲清楚 AI 的基本逻辑，让零基础的人也能看懂、能复述' }],
    // 强制深色模式作为默认
    ['script', {}, `
      (function() {
        const saved = localStorage.getItem('vitepress-theme-appearance')
        if (!saved || saved === 'auto') {
          localStorage.setItem('vitepress-theme-appearance', 'dark')
        }
      })()
    `]
  ],
  
  // 主题配置
  themeConfig: {
    // Logo
    logo: { src: '/logo.png', alt: 'ZZZ' },
    
    // 导航栏
    nav: [
      { text: '🏠 首页', link: '/' },
      { 
        text: '📚 主线章节', 
        items: [
          { text: '第1章：两个本质搞懂大模型', link: '/01-什么是大模型' },
          { text: '第2章：从 ChatGPT 到智能体', link: '/02-从ChatGPT到智能体' },
          { text: '第3章：大模型派与驾驭工程派', link: '/03-大模型派与驾驭工程派' },
          { text: '第4章：智能体怎么工作', link: '/04-智能体怎么工作' },
          { text: '第5章：拆开产品看本质', link: '/05-万变不离其宗——拆开OpenClaw和ClaudeCode看本质' },
          { text: '第6章：AI 提效实践指南', link: '/06-从懂到用——AI提效的实践指南' },
          { text: '第7章：AI 的手艺与工具箱', link: '/07-AI的手艺与工具箱' },
          { text: '第8章：AI 编程工作流', link: '/08-AI编程工作流——当模型遇上工程纪律' },
          { text: '第9章：AI 是你的老师', link: '/09-AI是你的老师，也是你的镜子' },
        ]
      },
      { 
        text: '🔧 扩展章节', 
        items: [
          { text: 'Ext-01：上下文工程', link: '/extras/01-上下文工程' },
          { text: 'Ext-02：AI 时代的编程语言选择', link: '/extras/02-AI时代的编程语言选择' },
          { text: 'Ext-03：为什么需要多个 AI 一起工作', link: '/extras/03-为什么需要多个AI一起工作' },
          { text: 'Ext-04：构建好的 AI Agent', link: '/extras/04-构建好的AI Agent——从能用到好用的共识' },
          { text: 'Ext-05：当软件不再给人用', link: '/extras/05-当软件不再给人用' },
        ]
      },
      { text: '📖 术语表', link: '/indexes/术语表' },
    ],
    
    // 侧边栏
    sidebar: sidebar,
    
    // 本地搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '未找到相关结果',
            resetButtonTitle: '清除查询',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    
    // 编辑链接
    editLink: {
      pattern: 'https://github.com/your-username/ZZZ-Simple-AI/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    
    // 页脚
    footer: {
      message: '用大白话讲清楚 AI，让零基础的人也能看懂',
      copyright: 'Copyright © 2026 ZZZ 白话讲 AI'
    },
    
    // 文档页脚
    docFooter: {
      prev: '上一章',
      next: '下一章'
    },
    
    // 大纲标题 - 默认展开
    outline: {
      label: '本页目录',
      level: [2, 3],
    },
    
    // 大纲显示开关
    aside: true,
    
    // 大纲深度
    outlineBadges: false,
    
    // 返回顶部
    returnToTopLabel: '返回顶部',
    
    // 菜单
    sidebarMenuLabel: '目录',
    
    // 暗色模式
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
  
  // 外观配置 - 默认深色，但允许用户切换
  appearance: 'force-dark',
  
  // Markdown 配置
  markdown: {
    lineNumbers: true,
    anchor: {
      permalink: false
    },
    image: {
      lazyLoading: true
    }
  },
  
  // Vite 配置
  vite: {
    // 静态资源目录（Vite root 是 srcDir 即 content/，所以 public/ 要用相对路径 ../public）
    publicDir: '../public',
    resolve: {
      alias: {
        '@': '/.vitepress/theme'
      }
    },
    optimizeDeps: {
      include: ['vue']
    }
  }
})
