import { styled } from 'styled-components'

export const Container = styled.div`
  height: 100%;
  margin: 0 30px;
`

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const Title = styled.div`
  // @TODO 나중에 공통화 styleName: Header/H1;
  font-family: Pretendard;
  font-size: 30px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: 0.0025em;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;

  margin-bottom: 30px;

  span {
    color: #1890ff;
  }
`

export const Label = styled.div`
  margin-top: auto;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #848e9b;

  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
`
