import { Plan } from '@/common/interfaces'

import { authAPI, getCookieHeader } from '..'

export const createPlan = async (plans: Plan) => {
  const headers = getCookieHeader()
  const data = await authAPI.post(`/plan`, { ...plans }, { headers })
  return data.data
}
