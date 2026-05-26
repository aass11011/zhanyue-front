/**********************************
 * @Author: Ronnie Zhang
 * @LastEditor: Ronnie Zhang
 * @LastEditTime: 2023/12/05 21:25:07
 * @Email: zclzone@outlook.com
 * Copyright © 2023 Ronnie Zhang(大脸怪) | https://isme.top
 **********************************/

export function createPermissionGuard(router) {
  router.beforeEach(async (to) => {
    // 直接访问，跳过登录验证和权限检查

    const routes = router.getRoutes()
    if (routes.find(route => route.name === to.name))
      return true

    return { name: '404', query: { path: to.fullPath } }
  })
}
