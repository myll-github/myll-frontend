/* eslint-disable react/jsx-props-no-spreading */
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'
import { Children, cloneElement } from 'react'
import { ServerStyleSheet } from 'styled-components'

interface DocumentProps {
  nonce: string
}

/* <meta httpEquiv="Content-Security-Policy" content={generateCSP({ nonce })} /> */
class _document extends Document<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
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
