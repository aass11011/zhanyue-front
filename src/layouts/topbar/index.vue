<template>
  <div class="wh-full flex flex-col">
    <header class="zh-header flex-shrink-0">
      <div class="zh-header-inner">
        <router-link to="/" class="zh-logo">占月明</router-link>

        <nav class="zh-nav">
          <router-link
            v-for="tab in navTabs"
            :key="tab.path"
            :to="tab.path"
            class="zh-nav-item"
            :class="{ 'zh-nav-item--active': isActive(tab.path) }"
          >
            {{ tab.title }}
          </router-link>
        </nav>

        <div class="zh-header-right">
          <ToggleTheme />
          <Fullscreen />
          <UserAvatar />
        </div>
      </div>
    </header>

    <main class="flex-1 overflow-auto">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { ToggleTheme } from '@/components/index.js'
import { Fullscreen, UserAvatar } from '@/layouts/components/index.js'

const route = useRoute()

const navTabs = [
  { path: '/', title: '首页' },
  { path: '/stock', title: '股票' },
  { path: '/history', title: '历史' },
  { path: '/study-notes', title: '学习笔记' },
  { path: '/personal-space', title: '个人空间' },
]

function isActive(path) {
  // 首页需要精确匹配，其余按前缀匹配
  if (path === '/')
    return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<style scoped>
.zh-header {
  background: #fff;
  border-bottom: 1px solid #f0f2f5;
}

.zh-header-inner {
  max-width: 1100px;
  margin: 0 auto;
  height: 52px;
  display: flex;
  align-items: center;
  padding: 0 16px;
}

.zh-logo {
  font-size: 20px;
  font-weight: 700;
  color: #0084ff;
  text-decoration: none;
  margin-right: 28px;
  flex-shrink: 0;
}

.zh-nav {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  min-width: 0;
}

.zh-nav-item {
  font-size: 15px;
  color: #444;
  text-decoration: none;
  padding: 6px 14px;
  border-radius: 6px;
  transition: all 0.2s;
  white-space: nowrap;
}

.zh-nav-item:hover {
  color: #0084ff;
  background: rgba(0, 132, 255, 0.06);
}

.zh-nav-item--active {
  color: #0084ff;
  font-weight: 600;
}

.zh-header-right {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  margin-left: 16px;
}

@media (max-width: 768px) {
  .zh-nav-item {
    padding: 6px 8px;
    font-size: 14px;
  }
}
</style>
