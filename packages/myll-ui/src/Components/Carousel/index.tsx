import Icon from '@ant-design/icons'
import { Carousel as AntdCarousel } from 'antd'
import { Component, createRef, CSSProperties, ReactNode } from 'react'

const contentStyle: CSSProperties = {
  margin: 0,
  width: '100%',
  height: '160px',
  color: '#e11313',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'black',
}

interface CaroselProps {
  children: ReactNode[]
}

export default class Carousel extends Component {
  carousel: any
  constructor(props: CaroselProps) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.carousel = createRef()
  }
  next() {
    this.carousel.next()
  }
  previous() {
    this.carousel.prev()
  }

  render() {
    const props = {
      dots: { className: 'bg-red' },
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    return (
      <div>
        <button type="button" onClick={this.previous}>
          {'<'}
        </button>
        <AntdCarousel
          style={contentStyle}
          ref={(node) => {
            this.carousel = node
            return this.carousel
          }}
          {...props}
        >
          <div>
            <h3>111</h3>
          </div>
          <div>
            <h3>222</h3>
          </div>
          <div>
            <h3>333</h3>
          </div>
          <div>
            <h3>444</h3>
          </div>
        </AntdCarousel>
        <button type="button" onClick={this.next}>
          {'>'}
        </button>
      </div>
    )
  }
}
