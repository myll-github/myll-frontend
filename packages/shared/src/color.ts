const WHITE = {
  WHITE: '#fff',
}
const PRIMARY = {
  PRIMARY_BLUE: 'var(--primary-blue, #007AFF)',
  SUB_BLUE_1: 'var(--sub-blue-1, #1890FF)',
  SUB_BLUE_2: 'var(--sub-blue-2, #E3EFFF)',
  SUB_BLUE_3: 'var(--sub-blue-3, #F0F5FF)',
  SUB_BLUE_4: 'var(--sub-blue-linear-1, linear-gradient(270deg, #007AFF 0%, #00BBE4 100%))',
}

const GRAY = {
  GRAY_100: 'var(--gray-gray-100, #202020)',
  GRAY_90: 'var(--gray-gray-90, #28333E)',
  GRAY_80: 'var(--gray-gray-80, #39434F)',
  GRAY_70: 'var(--gray-gray-70, #848E9B)',
  GRAY_60: 'var(--gray-gray-60, #A2ADB9)',
  GRAY_50: 'var(--gray-gray-50, #C9D0DE)',
  GRAY_40: 'var(--gray-gray-40, #CBD1D7)',
  GRAY_30: 'var(--gray-gray-30, #E7EAF1)',
  GRAY_20: 'var(--gray-gray-20, #F4F5F8)',
  WHITE: 'var(--gray-white, #FFF)',
  DISABLED: 'var(--disabled, #C9D6EB)',
}

const POINT = {
  ORANGE_1: 'var(--point-orange-1, #FF8B37)',
  ORANGE_2: 'var(--point-orange-2, #FFF3C5)',
  GREEN_1: 'var(--point-green-1, #009B06)',
  GREEN_2: 'var(--point-green-2, #DDFFE6)',
  PINK_1: 'var(--point-pink-1, #FF60AB)',
  PINK_2: 'var(--point-pink-2, #FFEEF6)',
  NAVY_1: 'var(--point-navy-2, #0F3E9D)',
  NAVY_2: 'var(--point-navy-2, #E4EFFF)',
}

const STATE = {
  ERROR: 'var(--state-error, #FF3141)',
  WARNING_1: 'var(--btn-warning-1, #FF395D)',
  WARNING_2: 'var(--btn-warning-2, #FFD3D9)',
}

const ALERT = {
  ALERT_WARNING_1: 'var(--alert-warning-1, #FFFBE6)',
  ALERT_WARNING_2: 'var(--alert-warning-2, #FAAD14)',
  ALERT_SUCCESS_1: 'var(--alert-success-1, #F6FFED)',
  ALERT_SUCCESS_2: 'var(--alert-success-2, #52C41A)',
  ALERT_ERROR_1: 'var(--alert-error-1, #FFF1F0)',
  ALERT_ERROR_2: 'var(--alert-error-2, #FF4D4F)',
  ALERT_INFO_1: 'var(--alert-info-1, #F0F5FF)',
  ALERT_INFO_2: 'var(--alert-info-2, #1890FF)',
}

function flattenObject(obj: any): any {
  return Object.entries(obj)
    .flatMap(([key, val]) => (typeof val === 'object' ? flattenObject(val) : { [key]: val }))
    .reduce((t, v) => ({ ...t, ...v }))
}

const COLOR = flattenObject([WHITE, GRAY, POINT, PRIMARY, STATE, ALERT])

export default COLOR
