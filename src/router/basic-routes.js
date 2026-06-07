export const basicRoutes = [
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录页',
      layout: 'empty',
    },
  },

  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '股票',
      layout: 'topbar',
    },
  },

  {
    name: 'PersonalSpace',
    path: '/personal-space',
    component: () => import('@/views/personal-space/index.vue'),
    meta: {
      title: '个人空间',
      layout: 'topbar',
    },
  },

  {
    name: 'History',
    path: '/history',
    component: () => import('@/views/history/index.vue'),
    meta: {
      title: '历史',
      layout: 'topbar',
    },
  },

  {
    name: 'StudyNotes',
    path: '/study-notes',
    component: () => import('@/views/study-notes/index.vue'),
    meta: {
      title: '学习笔记',
      layout: 'topbar',
    },
  },

  {
    name: '404',
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    meta: {
      title: '页面飞走了',
      layout: 'empty',
    },
  },

  {
    name: '403',
    path: '/403',
    component: () => import('@/views/error-page/403.vue'),
    meta: {
      title: '没有权限',
      layout: 'empty',
    },
  },
]
