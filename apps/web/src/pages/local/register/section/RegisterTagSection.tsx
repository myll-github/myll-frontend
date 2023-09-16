import { Tag } from 'myll-ui'

import { TAG_COLOR_MAP } from '@/common/constants'
import useLocalRegister from '@/stores/local/useLocalRegister'

import Separator from '../components/Separator'

const RegisterTagSection = () => {
  const { isThisTagSelected, handleTag } = useLocalRegister()

  return (
    <section className="flex flex-col w-full gap-5 px-20pxr pb-30pxr">
      <span className="INPUT-LABEL2">이 장소를 설명할 수 있는 태그는?</span>

      <ul className="flex flex-row flex-wrap w-full">
        {Object.keys(TAG_COLOR_MAP).map((contentId) => (
          <li key={`${contentId}`}>
            <Tag
              className={isThisTagSelected(contentId) ? '' : 'opacity-40'}
              contenttype={contentId}
              onClick={handleTag(contentId)}
            />
          </li>
        ))}
      </ul>
      <Separator />
    </section>
  )
}

export default RegisterTagSection
