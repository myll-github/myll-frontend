interface DetailPlan {
  itemIndex: number
  date: number // timestamp
  contentId: number
  title: string
  subtitle: string
}

interface Memo {
  itemIndex: number
  date: number
  memo: string
}

export interface Plan {
  id?: number // plan id
  title: string // plan title
  startDate: number // timestamp
  endDate: number // timestamp
  planDetails: DetailPlan[] // plans
  memos: Memo[] // memos
}
