import { Divider } from 'antd'
import ConfigProvider from 'antd/es/config-provider'

import Button from './src/Components/Button/Button'
import Input from './src/Components/Input'
import Tab from './src/Components/Tab'
import TopNavigationBar from './src/Components/TopNavigationBar'

export * from './src/Components/Card'

const AntdConfigProvider = (props: any) => {
  return <ConfigProvider {...props} theme={{ hashed: false }} />
}

export { AntdConfigProvider, Button, Divider, Input, Tab, TopNavigationBar }
