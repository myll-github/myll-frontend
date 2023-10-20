import * as React from 'react'

const ICON_KAKAOMAP = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M14.9989 4.00077C10.5779 3.99772 7.00658 7.56266 7.00001 11.9736C6.99697 13.9734 7.81625 15.6819 9.05108 17.1387C11.3031 19.7956 13.2733 22.5932 14.3491 25.951C14.4462 26.2542 14.5909 26.5985 15.0066 26.588C15.4588 26.5766 15.5803 26.1907 15.6876 25.8641C16.6972 22.7917 18.3837 20.1373 20.515 17.7268C21.7819 16.2938 22.7978 14.6427 22.9683 12.7033C23.3839 7.97697 19.6585 3.93611 14.9989 4.00077ZM17.7179 12.0492C17.7072 13.5085 16.4263 14.785 14.986 14.7718C13.5335 14.7586 12.2717 13.4779 12.2773 12.0227C12.2829 10.5692 13.5639 9.29433 15.0124 9.30104C16.4581 9.30763 17.7285 10.5983 17.7179 12.0492Z"
        fill="#007DFD"
      />
    </svg>
  )
}

export default ICON_KAKAOMAP
