import { request } from '@/utils'

// 前台文章列表（由后台管理系统发布，通过门户接口展示）
export const getArticleListApi = (params) => {
  return request.get('/scripture/list', { params })
}

// 前台文章详情
export const getArticleDetailApi = (params) => {
  return request.get('/scripture/findById', { params })
}
