import { Tag as AntdTag, TagProps as AntdTagProps } from 'antd'

interface TagProps extends AntdTagProps {
  contenttype: string
  className?: string
}

const COLOR_MAP: { [id in string]: string } = {
  관광지: 'processing',
  문화시설: '',
  축제공연행사: 'cyan',
  여행코스: 'magenta',
  레포츠: 'blue',
  쇼핑: 'purple',
  '음식점•카페': 'gold',
}

const Tag = ({ contenttype, className, ...rest }: TagProps) => {
  return (
    <AntdTag className={`w-max SUBTITLE-T8 ${className}`} color={COLOR_MAP[contenttype]} bordered={false} {...rest}>
      {contenttype}
    </AntdTag>
  )
}

Tag.defaultProps = {
  className: '',
}

export default Tag
