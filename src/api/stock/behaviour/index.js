import { request } from '@/utils'

export const getBehaviourListAllApi = (params) => {
  return request.get('/stock/behaviour/listAll', { params })
}
