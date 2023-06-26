import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'
import { generateCSP, generateNonce } from 'shared'

interface DocumentProps {
  nonce: string
}

class _document extends Document<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    const nonce = generateNonce()
    const additionalProps = { nonce }
    console.log(ctx)

    return { ...initialProps, ...additionalProps }
  }

  render() {
    const { nonce } = this.props

    return (
      <Html>
        <Head>
          <meta httpEquiv="Content-Security-Policy" content={generateCSP({ nonce })} />

          <script
            nonce={nonce}
            dangerouslySetInnerHTML={{
              __html: `window.__webpack_nonce__ = "${nonce}"`,
            }}
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
