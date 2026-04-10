# ZZZ 白话讲 AI - 网站项目

基于 VitePress 构建的静态文档网站。

## 技术栈

- **框架**: VitePress (Vue 3 + TypeScript)
- **包管理**: pnpm
- **设计**: 基于 ui-ux-pro-max 设计系统
- **图标**: Lucide Icons

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev

# 构建生产版本
pnpm run build

# 预览生产版本
pnpm run preview
```

## 录屏专用功能

- **专注模式**: 按 `F` 键进入，隐藏导航栏和侧边栏
- **退出专注模式**: 按 `ESC` 键
- **阅读进度条**: 页面顶部显示阅读进度
- **大字号设计**: 正文 18px，标题层级清晰

## 项目结构

```
site/
├── .vitepress/
│   ├── theme/          # 自定义主题
│   │   ├── components/ # Vue 组件
│   │   ├── styles/     # 自定义样式
│   │   └── index.ts    # 主题入口
│   ├── config.ts       # 站点配置
│   └── sidebar.ts      # 侧边栏配置
├── public/             # 静态资源
├── index.md            # 首页
└── package.json
```

## 数据源

网站内容源文件位于 `../docs/` 目录，保持 Markdown 为唯一数据源。

修改 `docs/` 下的文件后，开发服务器会自动热更新。
