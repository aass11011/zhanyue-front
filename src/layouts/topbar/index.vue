<template>
  <div class="wh-full flex flex-col">
    <header class="flex-shrink-0 flex items-center justify-between px-12 h-48 border-b border-light_border dark:border-dark_border">
      <div class="flex items-center h-full">
        <SideLogo class="mr-20" />
        <n-tabs
          :value="currentTab"
          type="bar"
          class="h-full"
          @update:value="handleTabChange"
        >
          <n-tab-pane name="/" tab="股票" />
          <n-tab-pane name="/personal-space" tab="个人空间" />
          <n-tab-pane name="/history" tab="历史" />
          <n-tab-pane name="/study-notes" tab="学习笔记" />
        </n-tabs>
      </div>

      <div class="flex items-center space-x-8">
        <ToggleTheme />
        <Fullscreen />
        <UserAvatar />
      </div>
    </header>

    <main class="flex-1 overflow-auto">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { ToggleTheme } from '@/components/index.js'
import { Fullscreen, SideLogo, UserAvatar } from '@/layouts/components/index.js'

const router = useRouter()
const route = useRoute()

const currentTab = computed(() => route.path)

function handleTabChange(value) {
  if (value !== route.path) {
    router.push(value)
  }
}
</script>
