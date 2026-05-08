<template>
  <div class="wh-full flex flex-col">
    <header class="flex-shrink-0">
      <TopHeader />
    </header>

    <main class="flex-1 overflow-auto">
      <slot />
    </main>
  </div>
</template>

<script setup>
import TopHeader from './header/index.vue'
</script>
