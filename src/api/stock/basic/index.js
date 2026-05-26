import { request } from '@/utils'

export const getStockListApi = (params) => {
  return request.get('/stock/basic/list', { params })
}

export const getStockListAllApi = (params) => {
  return request.get('/stock/basic/listAll', { params })
}
