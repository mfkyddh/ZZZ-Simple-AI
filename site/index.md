---
layout: home

hero:
  name: "ZZZ 白话讲 AI"
  text: ""
  tagline: 用大白话讲清楚 AI 的基本逻辑，让零基础的人也能看懂、能复述
  actions:
    - theme: brand
      text: 开始阅读
      link: /01-什么是大模型
    - theme: alt
      text: 查看术语表
      link: /indexes/术语表

features:
  - icon: 🎯
    title: 两个本质
    details: 大模型不是"思考"，只是"接话"；上下文管理是所有技术的核心
  - icon: 🧠
    title: 八部件框架
    details: 用一套统一的框架理解所有 AI 产品：大脑、目标、上下文、记忆、工具、边界、观测、循环
  - icon: 🛠️
    title: 实践指南
    details: 从"懂"到"用"，掌握 AI 提效的具体方法和工作流
  - icon: 📚
    title: 扩展深化
    details: 5 个扩展章节，深入探讨上下文工程、Multi-Agent、编程语言选择等话题
---

## 📚 内容速览

### 主线章节（建议按顺序阅读）

| 章节 | 标题 | 一句话说明 |
|:---:|:---|:---|
| **01** | [两个本质搞懂大模型](./01-什么是大模型.md) | 它不是在"思考"，只是在"接话" |
| **02** | [从 ChatGPT 到智能体](./02-从ChatGPT到智能体.md) | AI 是怎么从"只能聊"进化到"能做事"的 |
| **03** | [大模型派与驾驭工程派](./03-大模型派与驾驭工程派.md) | 一体两面的双螺旋，不是对立是协作 |
| **04** | [智能体是怎么"干活"的](./04-智能体怎么工作.md) | 拆解八个核心部件，Agent 不是魔法 |
| **05** | [拆开产品看本质](./05-万变不离其宗——拆开OpenClaw和ClaudeCode看本质.md) | OpenClaw 和 Claude Code 底层是同一套东西 |
| **06** | [从懂到用——AI提效实践指南](./06-从懂到用——AI提效的实践指南.md) | 用八部件框架指导你的 AI 实践 |
| **07** | [AI的"手艺"与"工具箱"](./07-AI的手艺与工具箱.md) | Skills、MCP、CLI，生态正在发生什么变化 |
| **08** | [AI编程工作流](./08-AI编程工作流——当模型遇上工程纪律.md) | 当模型遇上工程纪律，告别"改着改着就乱了" |
| **09** | [AI是你的老师，也是你的镜子](./09-AI是你的老师，也是你的镜子.md) | 用 AI 加速成长，成为"会思考的人" |

### 扩展章节（可跳跃阅读）

| 章节 | 标题 | 关联主线 |
|:---:|:---|:---:|
| **Ext-01** | [上下文工程](./extras/01-上下文工程.md) | 第1-4章深化 |
| **Ext-02** | [AI时代的编程语言选择](./extras/02-AI时代的编程语言选择.md) | 第7-8章延伸 |
| **Ext-03** | [为什么需要多个AI一起工作](./extras/03-为什么需要多个AI一起工作.md) | 第4-5章延伸 |
| **Ext-04** | [构建好的AI Agent——从能用到好用的共识](./extras/04-构建好的AI%20Agent——从能用到好用的共识.md) | 第4-5章深化 |
| **Ext-05** | [当软件不再"给人用"](./extras/05-当软件不再给人用.md) | 第3章深化 |

---

## 🤔 这个项目是干嘛的？

看了太多 AI 教程，还是一头雾水？

术语一个接着一个，看完不知道自己学到了什么。讲原理的太底层，讲工具的太零散。

我们想做的，是用 **更少的术语、更清楚的结构**，帮你先建立一套 **能看懂、能复述** 的 AI 认知框架。

### 👥 适合这样的你

- 💼 **职场新人** — 想用 AI 提效但不知道从何下手
- 🎓 **大学生** — 想搞懂 AI 到底是什么，而不是只会用 ChatGPT
- 🏢 **产品经理/运营/设计师** — 需要理解 AI 能力边界，才能做好产品决策
- 👨‍💻 **程序员** — 想系统了解 AI 应用架构，而不只是调 API
- 🔄 **AI 进阶用户** — 已经会用工具，但想建立系统的认知框架
- 🌱 **零基础初学者** — 完全从零开始，想先建立整体图景

---

## 🧭 四个锚点，帮你抓住主线

| 锚点 | 一句话理解 |
|:---|:---|
| 🎯 **本质一** | 大模型本质上是个"接话高手" —— 根据前文预测下一个最可能出现的词 |
| 📋 **本质二** | 后面各种技术，核心都是在 **补充和管理模型上下文（Context）** |
| 🧠 **主线一：大模型派** | 关心模型本身能不能继续变强 |
| 🛠️ **主线二：驾驭工程派** | 关心怎么用好模型的能力，让它在真实场景里靠谱地跑起来 |

---

## ✨ 三大学习心法

### 🎯 费曼学习法
用更简单的话重讲，逼自己确认是否真的理解。

### ❓ 苏格拉底式提问
用问题引导思考，而不是直接给答案。

### 🔬 第一性原理
回到最原始的问题和约束，不从现成说法出发。

---

<p align="center">
  🚧 <em>还在建设中，内容持续更新...</em> 🚧
</p>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 添加阅读进度条
  const progressBar = document.createElement('div')
  progressBar.className = 'reading-progress'
  document.body.appendChild(progressBar)
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercent = (scrollTop / docHeight) * 100
    progressBar.style.width = scrollPercent + '%'
  })
  
  // 添加录屏提示
  const hint = document.createElement('div')
  hint.className = 'recording-hint'
  hint.innerHTML = '按 <kbd>F</kbd> 进入专注模式，<kbd>ESC</kbd> 退出'
  document.body.appendChild(hint)
})
</script>
