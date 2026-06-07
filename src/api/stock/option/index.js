import { request } from '@/utils'

export const getStockOptionListApi = (params) => {
  return request.get('/stock/option/listAll', { params })
}
