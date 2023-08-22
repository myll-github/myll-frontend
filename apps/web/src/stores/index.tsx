import { enableMapSet } from 'immer'

import useCountStore from './example1'
import useRawRecommendPageStore from './useRecommendPageStore'

enableMapSet()

export { useCountStore, useRawRecommendPageStore as useRecommendPageStore }
