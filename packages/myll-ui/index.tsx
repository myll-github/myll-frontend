import ConfigProvider from 'antd/es/config-provider'
import { Divider } from 'antd'

import Button from './src/Components/Button/Button'
import Input from './src/Components/Input'
import Tab from './src/Components/Tab'

export * from './src/Components/Card'
export * from './src/Header'

const AntdConfigProvider = (props: any) => {
  return <ConfigProvider {...props} theme={{ hashed: false }} />
}

export { AntdConfigProvider, Divider, Button, Input, Tab }
