import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'
import { Children, cloneElement } from 'react'
import { generateCSP, generateNonce } from 'shared'
import { ServerStyleSheet } from 'styled-components'

interface DocumentProps {
  nonce: string
}

/* <meta httpEquiv="Content-Security-Policy" content={generateCSP({ nonce })} /> */
class _document extends Document<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    /* TO-DO // 
      현재 nonce가 styled-components에 적용되는 방식을 
      찾지를 못해서 nonce를 사용하고 있진 않다  
    */
    const nonce = generateNonce()

    const additionalProps = { nonce }

    return {
      ...initialProps,
      ...additionalProps,
    }
  }

  render() {
    const { nonce } = this.props

    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            as="style"
            crossOrigin
            href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.8/static/pretendard.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default _document
