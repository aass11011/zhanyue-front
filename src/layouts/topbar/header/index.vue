<template>
  <header class="flex items-center justify-between px-12 h-144 border-b border-light_border dark:border-dark_border">
    <div class="flex items-center">
      <SideLogo class="mr-20" />
      <div class="flex items-center space-x-4">
        <n-button
          v-for="item in navItems"
          :key="item.code"
          :type="route.name === item.code ? 'primary' : 'default'"
          ghost
          @click="handleNavClick(item)"
        >
          <i :class="item.icon" class="mr-8" />
          {{ item.name }}
        </n-button>
      </div>
    </div>

    <div class="flex items-center space-x-8">
      <BeginnerGuide />
      <ToggleTheme />
      <Fullscreen />
      <UserAvatar />
    </div>
  </header>
</template>

<script setup>
import { ToggleTheme } from '@/components/index.js'
import { BeginnerGuide, Fullscreen, SideLogo, UserAvatar } from '@/layouts/components/index.js'
import { usePermissionStore } from '@/store/index.js'

const router = useRouter()
const route = useRoute()
const permissionStore = usePermissionStore()

const navItems = computed(() => {
  return permissionStore.menus.filter(item => item.show && item.path)
})

function handleNavClick(item) {
  if (item.path && item.code !== route.name) {
    router.push(item.path)
  }
}
</script>
