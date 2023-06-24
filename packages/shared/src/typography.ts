import { css } from 'styled-components'

const HEADER = {
  H1: css`
    /* Header/H1 */
    font-size: 30px;
    font-family: Pretendard;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: 0.075px;
  `,

  H2: css`
    font-size: 24px;
    font-family: Pretendard;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.15px;
  `,

  H3: css`
    font-size: 24px;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.15px;
  `,

  H4: css`
    font-size: 20px;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.03px;
  `,

  H5: css`
    font-size: 18px;
    font-family: Pretendard;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.027px;
  `,

  H6: css`
    font-size: 14px;
    font-family: Pretendard;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.035px;
  `,
}

const SUBTITLE = {
  T1: css`
    font-size: 16px;
    font-family: Pretendard;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0.04px;
  `,

  T2: css`
    font-size: 16px;
    font-family: Pretendard;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.04px;
  `,

  T3: css`
    font-size: 14px;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.15px;
  `,

  T4: css`
    font-size: 13px;
    font-family: Pretendard;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.15px;
  `,

  T5: css`
    font-size: 13px;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.15px;
  `,

  T6: css`
    font-size: 13px;
    font-family: Pretendard;
    line-height: 20px;
    letter-spacing: 0.15px;
  `,

  T7: css`
    font-size: 12px;
    font-family: Pretendard;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.018px;
  `,

  T8: css`
    font-size: 12px;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.15px;
  `,
}

const INPUT = {
  LABEL1: css`
    font-size: 16px;
    font-family: Pretendard;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.04px;
  `,

  LABEL2: css`
    font-size: 16px;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.04px;
  `,

  FIELD: css`
    font-size: 16px;
    font-family: Pretendard;
    line-height: 20px;
    letter-spacing: 0.04px;
  `,
}

const BUTTON = {
  LARGE: css`
    font-size: 18px;
    font-family: Pretendard;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0.4px;
  `,

  MEDIUM: css`
    font-size: 14px;
    font-family: Pretendard;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.4px;
  `,

  SMALL: css`
    font-size: 12px;
    font-family: Pretendard;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0.46px;
  `,
}

const TYPOGRAPHY = { HEADER, INPUT, SUBTITLE, BUTTON }

export default TYPOGRAPHY
