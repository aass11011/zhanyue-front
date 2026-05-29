import { request } from '@/utils'

export const getStockSseFundsApi = (params) => {
  return request.get('/stock/sse/funds/listAll', { params })
}
