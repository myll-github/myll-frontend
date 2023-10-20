import { useQuery } from '@tanstack/react-query'

import { Plan } from '@/common/interfaces'

import { authAPI, getCookieHeader, InitHeaders } from '..'

export const createPlan = async (plans: Plan) => {
  const headers = getCookieHeader()
  const data = await authAPI.post(`/plan`, { ...plans }, { headers })
  return data.data
}

export const getPlan = async ({ initHeaders }: InitHeaders) => {
  const headers = initHeaders ?? getCookieHeader()
  const data = await authAPI.get(`/plan-list`, { headers })
  return data.data
}

export const getPlanQuery = () => ['getPlan']
export const getPlanFn =
  ({ initHeaders }: InitHeaders) =>
  () =>
    getPlan({ initHeaders })

export const usePlan = () => {
  return useQuery({
    queryKey: getPlanQuery(),
    queryFn: getPlanFn({}),
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnMount: true,
  })
}
