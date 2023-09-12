interface DetailPlan {
  id: number
  itemIndex: number
  planId: number
  contentId: number
  contentTypeId: number
  title: string
  contentType: string
  address: string
  date: number // timestamp
}

export interface Plan {
  id: number // plan id
  userEmail: string // email
  title: string // plan title
  startDate: number // timestamp
  endDate: number // timestamp
  planDetails: DetailPlan[] // plans
}
