import { Divider } from 'antd'
import ConfigProvider from 'antd/es/config-provider'

import Button from './src/Components/Button/Button'
import CardContainer from './src/Components/CardContainer'
import Input from './src/Components/Input'
import Tab from './src/Components/Tab'

export * from './src/Components/Card'

const AntdConfigProvider = (props: any) => {
  return <ConfigProvider {...props} theme={{ hashed: false }} />
}

export { AntdConfigProvider, Button, CardContainer, Divider,Input, Tab }
