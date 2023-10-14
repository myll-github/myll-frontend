import { Button, Carousel, CustomImage } from 'myll-ui'
import { useEffect, useState } from 'react'

import DefaultLayout from '@/common/components/Layout/DefaultLayout'

const IMAGES = [
  {
    title: '안녕하세요. 초보 여행자님!',
    paragraphs: `마일을 시작하기 전, 나만의 여행 취향을 선택하고
  초보 여행자님을 위해 구성된 홈 피드를 탐색해보세요.`,
    url: '/pictures/Illust_Intro1.png',
  },
  {
    title: '로컬이 추천하는 플레이스',
    paragraphs: `로컬 주민이 직접 추천하는 장소를 탐색하고 로컬들과 직접 실시간으로 소통해보세요!`,
    url: '/pictures/Illust_Intro2.png',
  },
  {
    title: '여행계획 세우기',
    paragraphs: `어디로 떠나고 싶으세요? <br>
    마일을 통해 여행 일정과 방문할 관광지를 등록하세요.`,
    url: '/pictures/Illust_Intro3.svg',
  },
]

export const Intro = () => {
  const [caroselIndex, setCarouselIndex] = useState(0)

  const isLastIndex = caroselIndex === IMAGES.length - 1

  const handleCarouselIndex = (currentNumber: number) => {
    setCarouselIndex(currentNumber)
  }

  useEffect(() => {
    if (isLastIndex) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      })
    }
  }, [caroselIndex])

  return (
    <DefaultLayout className="min-h-screen">
      <Carousel onChange={handleCarouselIndex}>
        {IMAGES.map(({ url, title, paragraphs }) => (
          <div className="flex flex-col items-center w-full ">
            <div className="flex flex-col gap-10pxr mx-30pxr mb-20pxr mt-90pxr">
              <h1 className="HEADER-H1 text-GRAY_100">{title}</h1>
              <p className="HEADER-H7 text-GRAY_70">
                {paragraphs.split('<br>').map((paragraph) => {
                  return (
                    <>
                      {paragraph} <br />
                    </>
                  )
                })}
              </p>
            </div>

            <CustomImage className="w-[320px] h-[460px]" src={url} alt="" />
          </div>
        ))}
      </Carousel>
      {isLastIndex && (
        <div className="flex flex-row justify-center w-full bottom-0pxr mb-40pxr mt-20pxr">
          <Button color="primary" onClick={() => {}} type="button" variant="block">
            홈으로 진입하기
          </Button>
        </div>
      )}
    </DefaultLayout>
  )
}

export default Intro
