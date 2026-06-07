import { request } from '@/utils'

export const getStockCaseListApi = (params) => {
  return request.get('/stock/case/listAll', { params })
}
