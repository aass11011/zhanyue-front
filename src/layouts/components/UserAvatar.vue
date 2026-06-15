<!--------------------------------
 - @Author: Ronnie Zhang
 - @LastEditor: Ronnie Zhang
 - @LastEditTime: 2023/12/16 18:50:42
 - @Email: zclzone@outlook.com
 - Copyright 漏 2023 Ronnie Zhang(澶ц劯鎬? | https://isme.top
 --------------------------------->

<template>
  <n-button type="primary" @click="handleGoAdmin">
    <i class="i-mdi:login-variant mr-8" />
    登录后台
  </n-button>
</template>

<script setup>
function handleGoAdmin() {
  const adminUrl = import.meta.env.PROD 
    ? "https://zhanyueming.xyz/admin/" 
    : "http://localhost:4000/"
  window.open(adminUrl, "_blank")
}
</script>
