/* eslint-disable react/no-array-index-key */
import { Carousel as AntdCarousel } from 'antd'
import { Children, Component, createRef, CSSProperties, ReactNode } from 'react'

const defaultContentStyle: CSSProperties = {
  margin: 0,
  width: '100%',
  height: '460px',

  lineHeight: '160px',
  textAlign: 'center',
  // background: 'inherit',
  background: 'black',
}

interface CarouselProps {
  children: ReactNode[]
  contentStyle: CSSProperties
}

export default class Carousel extends Component<CarouselProps> {
  carousel: any
  images: ReactNode[]
  contentStyle: CSSProperties

  constructor(props: CarouselProps) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.carousel = createRef()

    this.images = props.children
    this.contentStyle = props.contentStyle ?? defaultContentStyle
  }
  next() {
    this.carousel.next()
  }
  previous() {
    this.carousel.prev()
  }

  render() {
    const props = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    return (
      <div>
        <AntdCarousel
          style={{ ...defaultContentStyle, ...this.contentStyle }}
          ref={(node) => {
            this.carousel = node
            return this.carousel
          }}
          swipeToSlide
          draggable
          {...props}
        >
          {Children.map(this.images, (child, index) => (
            <div className="w-full h-full" key={index}>
              {child}
            </div>
          ))}
        </AntdCarousel>
      </div>
    )
  }
}
