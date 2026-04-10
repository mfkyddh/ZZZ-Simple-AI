import { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Sidebar = {
  // 主线章节侧边栏 - 默认展开
  '/01-': [
    {
      text: '📚 主线章节',
      collapsed: false,  // 默认展开
      collapsible: true, // 允许折叠
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
      collapsed: false,  // 默认展开
      collapsible: true, // 允许折叠
      items: [
        { text: 'Ext-01：上下文工程', link: '/extras/01-上下文工程' },
        { text: 'Ext-02：AI 时代的编程语言选择', link: '/extras/02-AI时代的编程语言选择' },
        { text: 'Ext-03：多个 AI 一起工作', link: '/extras/03-为什么需要多个AI一起工作' },
        { text: 'Ext-04：构建好的 AI Agent', link: '/extras/04-构建好的AI Agent——从能用到好用的共识' },
        { text: 'Ext-05：当软件不再给人用', link: '/extras/05-当软件不再给人用' },
      ]
    }
  ],
  
  // 扩展章节侧边栏 - 默认展开
  '/extras/': [
    {
      text: '📚 主线章节',
      collapsed: false,  // 默认展开
      collapsible: true, // 允许折叠
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
      collapsed: false,  // 默认展开
      collapsible: true, // 允许折叠
      items: [
        { text: 'Ext-01：上下文工程', link: '/extras/01-上下文工程' },
        { text: 'Ext-02：AI 时代的编程语言选择', link: '/extras/02-AI时代的编程语言选择' },
        { text: 'Ext-03：多个 AI 一起工作', link: '/extras/03-为什么需要多个AI一起工作' },
        { text: 'Ext-04：构建好的 AI Agent', link: '/extras/04-构建好的AI Agent——从能用到好用的共识' },
        { text: 'Ext-05：当软件不再给人用', link: '/extras/05-当软件不再给人用' },
      ]
    }
  ],
  
  // 索引页侧边栏 - 默认展开
  '/indexes/': [
    {
      text: '📖 索引',
      collapsed: false,
      collapsible: true,
      items: [
        { text: '术语表', link: '/indexes/术语表' },
      ]
    },
    {
      text: '📚 主线章节',
      collapsed: false,  // 默认展开
      collapsible: true, // 允许折叠
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
      collapsed: false,  // 默认展开
      collapsible: true, // 允许折叠
      items: [
        { text: 'Ext-01：上下文工程', link: '/extras/01-上下文工程' },
        { text: 'Ext-02：AI 时代的编程语言选择', link: '/extras/02-AI时代的编程语言选择' },
        { text: 'Ext-03：多个 AI 一起工作', link: '/extras/03-为什么需要多个AI一起工作' },
        { text: 'Ext-04：构建好的 AI Agent', link: '/extras/04-构建好的AI Agent——从能用到好用的共识' },
        { text: 'Ext-05：当软件不再给人用', link: '/extras/05-当软件不再给人用' },
      ]
    }
  ],
  
  // 其他页面默认侧边栏
  '/': [
    {
      text: '📚 主线章节',
      collapsed: false,  // 默认展开
      collapsible: true, // 允许折叠
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
      collapsed: false,  // 默认展开
      collapsible: true, // 允许折叠
      items: [
        { text: 'Ext-01：上下文工程', link: '/extras/01-上下文工程' },
        { text: 'Ext-02：AI 时代的编程语言选择', link: '/extras/02-AI时代的编程语言选择' },
        { text: 'Ext-03：多个 AI 一起工作', link: '/extras/03-为什么需要多个AI一起工作' },
        { text: 'Ext-04：构建好的 AI Agent', link: '/extras/04-构建好的AI Agent——从能用到好用的共识' },
        { text: 'Ext-05：当软件不再给人用', link: '/extras/05-当软件不再给人用' },
      ]
    },
    {
      text: '📖 索引',
      collapsed: false,
      collapsible: true,
      items: [
        { text: '术语表', link: '/indexes/术语表' },
      ]
    }
  ]
}
