/**********************************
 * @Author: Ronnie Zhang
 * @LastEditor: Ronnie Zhang
 * @LastEditTime: 2023/12/05 21:25:07
 * @Email: zclzone@outlook.com
 * Copyright © 2023 Ronnie Zhang(大脸怪) | https://isme.top
 **********************************/

import { usePermissionStore, useUserStore } from '@/store'
import { getPermissions, getUserInfo } from '@/store/helper'

export function createPermissionGuard(router) {
  router.beforeEach(async (to) => {
    // 直接访问，跳过登录验证
    const userStore = useUserStore()
    const permissionStore = usePermissionStore()

    // 如果用户信息未初始化，模拟获取用户信息
    if (!userStore.userInfo) {
      try {
        const [user, permissions] = await Promise.all([getUserInfo(), getPermissions()])
        userStore.setUser(user)
        permissionStore.setPermissions(permissions)
        const routeComponents = import.meta.glob('@/views/**/*.vue')
        permissionStore.accessRoutes.forEach((route) => {
          route.component = routeComponents[route.component] || undefined
          !router.hasRoute(route.name) && router.addRoute(route)
        })
        return { ...to, replace: true }
      }
      catch (error) {
        // 如果获取用户信息失败，直接放行（无后端场景）
        return true
      }
    }

    const routes = router.getRoutes()
    if (routes.find(route => route.name === to.name))
      return true

    return { name: '404', query: { path: to.fullPath } }
  })
}
