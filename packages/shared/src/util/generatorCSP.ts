/* eslint-disable turbo/no-undeclared-env-vars */
// utils/generate-csp.ts
type Directive = string
type Value = string
interface Options {
  devOnly?: boolean
}
interface generateCSPProps {
  nonce?: string
}

const generateCSP = ({ nonce }: generateCSPProps = {}) => {
  const policy: Partial<Record<Directive, Value[]>> = {}

  const add = (directive: Directive, value: Value, options: Options = {}) => {
    if (options.devOnly && process.env.NODE_ENV !== 'development') return
    const curr = policy[directive]
    policy[directive] = curr ? [...curr, value] : [value]
  }

  // Set the default policy for all content types to 'none' (no content can be loaded)
  add('default-src', `'none'`)

  add('font-src', `'https://*'`)

  // Only allow scripts from the same origin
  add('script-src', `'self'`)
  // Allow 'eval' function in development mode
  add('script-src', `'unsafe-eval'`, { devOnly: true })

  // Only allow external script files from the same origin
  add('script-src-elem', `'self'`)

  // Only allow HTTP connections from the same origin in development mode
  add('connect-src', `'self'`, { devOnly: true })

  // Only allow styles from the same origin
  add('style-src', `'self'`)
  // Allow inline styles
  add('style-src', `'unsafe-inline'`)

  // Only allow images from the same origin
  add('img-src', `'self'`)
  // Only allow web application manifests from the same origin
  add('manifest-src', `'self'`)
  // Set the base URI for all relative URLs to the same origin
  add('base-uri', `'self'`)
  // Only allow form data to be sent to the same origin
  add('form-action', `'self'`)

  // Only allow frames from the same origin
  add('frame-src', `'self'`)
  // Do not allow the page to be embedded in frames
  add('frame-ancestors', `'none'`)
  // Do not allow resources from <object>, <embed>, or <applet> tags
  add('object-src', `'none'`)

  // return the object in a formatted value (this won't work on IE11 without a polyfill!)
  return Object.entries(policy)
    .map(([key, value]) => `${key} ${value.join(' ')}`)
    .join('; ')
}

export default generateCSP
