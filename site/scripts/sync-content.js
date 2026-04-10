#!/usr/bin/env node

/**
 * 内容同步脚本
 * 
 * 原则：网站与核心内容分离
 * - docs/ 目录：唯一数据源（Markdown 内容）
 * - site/content/ 目录：构建时的内容镜像（不提交到 Git）
 * 
 * 这个脚本将 docs/ 的内容同步到 site/content/，同时保持目录结构
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const DOCS_DIR = path.resolve(__dirname, '../../docs')
const CONTENT_DIR = path.resolve(__dirname, '../content')
const INDEXES_DIR = path.resolve(__dirname, '../../indexes')

// 需要同步的目录和文件
const SYNC_ITEMS = [
  { source: DOCS_DIR, dest: CONTENT_DIR },
]

// 清空目标目录
function cleanDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true })
  }
  fs.mkdirSync(dir, { recursive: true })
}

// 复制文件或目录
function copyRecursive(src, dest) {
  const stats = fs.statSync(src)
  
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true })
    }
    
    const items = fs.readdirSync(src)
    for (const item of items) {
      copyRecursive(path.join(src, item), path.join(dest, item))
    }
  } else {
    fs.copyFileSync(src, dest)
  }
}

// 主函数
function sync() {
  console.log('🔄 同步内容到 site/content/...')
  
  // 清理并重建 content 目录
  cleanDir(CONTENT_DIR)
  
  // 同步 docs/ 下的 Markdown 文件
  const items = fs.readdirSync(DOCS_DIR)
  for (const item of items) {
    const srcPath = path.join(DOCS_DIR, item)
    const destPath = path.join(CONTENT_DIR, item)
    copyRecursive(srcPath, destPath)
    console.log(`  ✓ ${item}`)
  }
  
  // 同步 indexes/ 目录
  if (fs.existsSync(INDEXES_DIR)) {
    const indexesDest = path.join(CONTENT_DIR, 'indexes')
    copyRecursive(INDEXES_DIR, indexesDest)
    console.log(`  ✓ indexes/`)
  }
  
  // 创建首页（从 site/index.md 复制）
  const siteIndex = path.resolve(__dirname, '../index.md')
  const contentIndex = path.join(CONTENT_DIR, 'index.md')
  if (fs.existsSync(siteIndex)) {
    fs.copyFileSync(siteIndex, contentIndex)
    console.log(`  ✓ index.md (首页)`)
  }
  
  console.log('✅ 内容同步完成')
}

sync()
