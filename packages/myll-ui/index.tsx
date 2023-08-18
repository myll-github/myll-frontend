import { Divider } from 'antd'
import ConfigProvider from 'antd/es/config-provider'

import AppBar from './src/Components/AppBar'
import Button from './src/Components/Button/Button'
import CardContainer from './src/Components/CardContainer'
import DatePicker from './src/Components/DatePicker'
import Input from './src/Components/Input'
import Tab from './src/Components/Tab'

export * from './src/Components/Card'

const AntdConfigProvider = (props: any) => {
  return <ConfigProvider {...props} theme={{ hashed: false }} />
}

export { AntdConfigProvider, AppBar, Button, CardContainer, DatePicker, Divider, Input, Tab }
