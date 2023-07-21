const WHITE = {
  WHITE: '#fff',
}
const PRIMARY = {
  PRIMARY_BLUE: 'var(--primary-blue, #007AFF);',
  SUB_BLUE_1: 'var(--sub-blue-1, #1890FF);',
  SUB_BLUE_2: 'var(--sub-blue-2, #E3EFFF);',
  SUB_BLUE_3: 'var(--sub-blue-3, #F0F5FF);',
  SUB_BLUE_4: 'var(--sub-blue-linear-1, linear-gradient(270deg, #007AFF 0%, #00BBE4 100%));',
}

const GRAY = {
  GRAY_100: 'var(--gray-gray-100, #202020);',
  GRAY_90: 'var(--gray-gray-90, #28333E);',
  GRAY_80: 'var(--gray-gray-80, #39434F);',
  GRAY_70: 'var(--gray-gray-70, #848E9B);',
  GRAY_60: 'var(--gray-gray-60, #A2ADB9);',
  GRAY_50: 'var(--gray-gray-50, #C9D0DE);',
  GRAY_40: 'var(--gray-gray-40, #CBD1D7);',
  GRAY_30: 'var(--gray-gray-30, #E7EAF1);',
  GRAY_20: 'var(--gray-gray-20, #F4F5F8);',
  WHITE: 'var(--gray-white, #FFF)',
}

const POINT = {
  ORANGE1: 'var(--point-orange-1, #FF8B37);',
  ORANGE2: 'var(--point-orange-2, #FFF3C5);',
  GREEN1: 'var(--point-green-1, #009B06);',
  GREEN2: 'var(--point-green-2, #DDFFE6);',
  PINK1: 'var(--point-pink-1, #FF60AB);',
  PINK2: 'var(--point-pink-2, #FFEEF6);',
  NAVY1: 'var(--point-navy-2, #0F3E9D);',
  NAVY2: 'var(--point-navy-2, #E4EFFF);',
}

const STATE = {
  ERROR: 'var(--state-error, #FF3141)',
}

function flattenObject(obj: any): any {
  return Object.entries(obj)
    .flatMap(([key, val]) => (typeof val === 'object' ? flattenObject(val) : { [key]: val }))
    .reduce((t, v) => ({ ...t, ...v }))
}

const COLOR = flattenObject([WHITE, GRAY, POINT, PRIMARY, STATE])

export default COLOR
