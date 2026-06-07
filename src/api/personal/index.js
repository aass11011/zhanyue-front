import { request } from '@/utils'

export const getPersonalPicApi = (params) => {
  return request.get('/personal/pic', { params })
}
