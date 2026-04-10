import { h, nextTick } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './styles/custom.css'
import './styles/recording.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 可以在这里添加自定义布局插槽
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 客户端逻辑
    if (typeof window !== 'undefined') {
      // 添加录屏模式的键盘快捷键
      window.addEventListener('keydown', (e) => {
        // F 键切换专注模式
        if (e.key === 'f' && !e.ctrlKey && !e.metaKey && !e.altKey) {
          document.body.classList.toggle('recording-mode')
        }
        // ESC 退出专注模式
        if (e.key === 'Escape') {
          document.body.classList.remove('recording-mode')
        }
      })

      // 路由切换后添加进度条、提示和切换按钮
      router.onAfterRouteChanged = () => {
        nextTick(() => {
          // 添加阅读进度条
          if (!document.querySelector('.reading-progress')) {
            const progressBar = document.createElement('div')
            progressBar.className = 'reading-progress'
            document.body.appendChild(progressBar)
            
            window.addEventListener('scroll', () => {
              const scrollTop = window.scrollY
              const docHeight = document.documentElement.scrollHeight - window.innerHeight
              const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
              progressBar.style.width = scrollPercent + '%'
            })
          }
          
          // 添加录屏提示
          if (!document.querySelector('.recording-hint')) {
            const hint = document.createElement('div')
            hint.className = 'recording-hint'
            hint.innerHTML = '按 <kbd>F</kbd> 进入专注模式，<kbd>ESC</kbd> 退出'
            document.body.appendChild(hint)
          }

          // 添加侧边栏和大纲切换按钮
          if (!document.querySelector('.layout-toggle-buttons')) {
            const toggleContainer = document.createElement('div')
            toggleContainer.className = 'layout-toggle-buttons'
            
            // 侧边栏切换按钮
            const sidebarBtn = document.createElement('button')
            sidebarBtn.className = 'layout-toggle-btn active'
            sidebarBtn.innerHTML = '☰'
            sidebarBtn.title = '切换侧边栏'
            sidebarBtn.onclick = () => {
              document.body.classList.toggle('sidebar-collapsed')
              sidebarBtn.classList.toggle('active')
            }
            
            // 大纲切换按钮
            const outlineBtn = document.createElement('button')
            outlineBtn.className = 'layout-toggle-btn active'
            outlineBtn.innerHTML = '≡'
            outlineBtn.title = '切换大纲'
            outlineBtn.onclick = () => {
              document.body.classList.toggle('outline-collapsed')
              outlineBtn.classList.toggle('active')
            }
            
            toggleContainer.appendChild(sidebarBtn)
            toggleContainer.appendChild(outlineBtn)
            document.body.appendChild(toggleContainer)
          }
        })
      }
    }
  }
} satisfies Theme
