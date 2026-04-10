# 网站架构规范

## 核心原则：网站与核心内容分离

```
ZZZ-Simple-AI/
├── 📁 docs/                    # ✅ 唯一数据源（核心内容）
│   ├── 📁 extras/              #    扩展章节
│   ├── 01-*.md ~ 09-*.md       #    主线章节
│   └── ...                     #    纯 Markdown，无网站配置
│
├── 📁 indexes/                 # ✅ 术语表等索引文件
│   └── 术语表.md
│
├── 📁 site/                    # 🌐 网站项目（完全独立）
│   ├── 📁 .vitepress/          #    VitePress 配置和主题
│   ├── 📁 content/             #    构建时从 docs/ 同步（不提交 Git）
│   ├── 📁 public/              #    静态资源（logo, favicon 等）
│   ├── 📁 scripts/             #    构建脚本
│   ├── index.md                #    首页模板
│   └── package.json
│
└── ...
```

## 禁止事项

### ❌ 严禁将以下内容放入 docs/ 目录

| 禁止项 | 原因 | 正确位置 |
|:---|:---|:---|
| `index.md`（首页） | 污染根目录 | `site/index.md` → 同步到 `site/content/` |
| `public/` 目录 | 静态资源属于网站 | `site/public/` |
| `indexes/` 目录 | 索引属于网站结构 | `indexes/`（根目录）或 `site/content/indexes/`（同步后）|
| 任何 `.vitepress/` 配置 | 配置属于网站 | `site/.vitepress/` |
| 任何网站主题/样式文件 | 样式属于网站 | `site/.vitepress/theme/` |

### ❌ 严禁将以下内容放入 site/ 目录并提交 Git

| 禁止项 | 原因 | 处理方式 |
|:---|:---|:---|
| `site/content/` 内的 Markdown | 这是从 docs/ 同步的副本 | 已添加 `.gitignore` |
| `node_modules/` | 依赖自动生成 | 已添加 `.gitignore` |
| `.vitepress/dist/` | 构建产物 | 已添加 `.gitignore` |
| `.vitepress/cache/` | 缓存文件 | 已添加 `.gitignore` |

## 工作流程

### 开发模式

```bash
cd site/
pnpm run dev
```

流程：
1. `sync` 脚本将 `docs/` 内容同步到 `site/content/`
2. VitePress 从 `site/content/` 读取 Markdown
3. 开发服务器启动，支持热更新

### 构建模式

```bash
cd site/
pnpm run build
```

流程：
1. `sync` 脚本同步内容
2. VitePress 构建静态网站到 `site/.vitepress/dist/`

### 内容更新

只需编辑 `docs/` 目录下的 Markdown 文件，然后刷新浏览器即可（开发模式）或重新构建（生产模式）。

```bash
# 编辑内容
docs/01-什么是大模型.md

# 开发服务器自动热更新（如果已在运行）
# 或重新启动
pnpm run dev
```

## 数据源唯一性

**docs/ 目录是唯一的真相来源。**

- 所有内容编辑都在 `docs/` 进行
- `site/content/` 是自动生成的镜像，**永远不要手动编辑**
- 如果 `site/content/` 中的内容需要修改，回到 `docs/` 修改源文件

## 为什么这样设计？

1. **清晰分离**：内容创作者只需要关注 `docs/`，不需要了解网站技术
2. **避免污染**：网站配置不会混入内容，保持 Markdown 纯净
3. **灵活部署**：网站可以独立部署，不影响内容仓库
4. **版本控制**：内容变更和内容仓库的历史清晰分离
5. **团队协作**：内容作者和网站开发者可以独立工作

## 检查清单

在提交代码前，确认：

- [ ] `docs/` 目录下没有 `index.md`
- [ ] `docs/` 目录下没有 `public/` 目录
- [ ] `docs/` 目录下没有网站配置文件
- [ ] `site/content/` 没有被提交到 Git
- [ ] `site/node_modules/` 没有被提交到 Git
- [ ] `site/.vitepress/dist/` 没有被提交到 Git

---

*规范版本：1.0*
*最后更新：2026-04-10*
