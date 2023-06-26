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

  // adder function for our policy object
  const add = (directive: Directive, value: Value, options: Options = {}) => {
    if (options.devOnly && process.env.NODE_ENV !== 'development') return
    const curr = policy[directive]
    policy[directive] = curr ? [...curr, value] : [value]
  }

  // script-src-elem
  add('script-src-elem', `'self'`)
  add('script-src-elem', `'nonce-${nonce}'`)

  // connect-src
  add('connect-src', `'self'`, { devOnly: true })

  add('style-src', `'unsafe-inline'`)
  /*
   TO-DO - nonce 설정
  add('style-src', `'nonce-${nonce}'`)
  */

  // return the object in a formatted value (this won't work on IE11 without a polyfill!)
  return Object.entries(policy)
    .map(([key, value]) => `${key} ${value.join(' ')}`)
    .join('; ')
}

export default generateCSP
