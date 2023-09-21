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

interface Memo {
  id: number
  planId: number
  itemIndex: number
  memo: string
}

export interface Plan {
  id: number // plan id
  userEmail: string // email
  title: string // plan title
  startDate: number // timestamp
  endDate: number // timestamp
  planDetails: DetailPlan[] // plans
  memos: Memo[] // memos
}
