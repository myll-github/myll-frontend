import { Tag as AntdTag } from 'antd'

interface TagProps {
  contenttype: string
}

const COLOR_MAP: { [id in string]: string } = {
  관광지: 'processing',
  문화시설: '',
  축제공연행사: 'cyan',
  여행코스: 'magenta',
  레포츠: 'blue',
  쇼핑: 'purple',
  음식점: 'gold',
  카페: 'green',
}

const Tag = ({ contenttype }: TagProps) => {
  return (
    <AntdTag className="w-max SUBTITLE-T8" color={COLOR_MAP[contenttype]} bordered={false}>
      {contenttype}
    </AntdTag>
  )
}

export default Tag
