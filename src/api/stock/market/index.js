import { request } from '@/utils'

export const getStockMarketRecordApi = (params) => {
  return request.get('/stock/market/record/listAll', { params })
}
