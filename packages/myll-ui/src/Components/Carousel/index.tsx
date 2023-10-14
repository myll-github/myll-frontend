/* eslint-disable react/no-array-index-key */
import { Carousel as AntdCarousel } from 'antd'
import { Children, Component, createRef, ReactNode } from 'react'

interface CarouselProps {
  children: ReactNode[]
  onChange: (currentNumber: number) => void
}

export default class Carousel extends Component<CarouselProps> {
  carousel: any
  images: ReactNode[]

  onChange: (currentNumber: number) => void

  constructor(props: CarouselProps) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.carousel = createRef()

    this.images = props.children

    this.onChange = props.onChange
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
          ref={(node) => {
            this.carousel = node
            return this.carousel
          }}
          afterChange={this.onChange}
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
