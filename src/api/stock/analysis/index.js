import { request } from '@/utils'

export const getOrderAnalysisApi = (params) => {
  return request.get('/stock/order/analysis/listAll', { params })
}
