import { request } from '@/utils'

export const getOrderAnalysisApi = (params) => {
  return request.get('/stock/order/analysis/list/two/week', { params })
}

export const getOrderAnalysisDetailApi = (params) => {
  return request.get('/stock/order/analysis/detail', { params })
}
