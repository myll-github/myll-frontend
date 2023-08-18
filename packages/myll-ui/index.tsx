import { Divider } from 'antd'
import ConfigProvider from 'antd/es/config-provider'

import Alert from './src/Components/Alert'
import AppBar from './src/Components/AppBar'
import Button from './src/Components/Button/Button'
import CardContainer from './src/Components/CardContainer'
import DataList from './src/Components/DataList'
import DatePicker from './src/Components/DatePicker'
import Input from './src/Components/Input'
import Tab from './src/Components/Tab'

export * from './src/Components/Card'

const AntdConfigProvider = (props: any) => {
  return <ConfigProvider {...props} theme={{ hashed: false }} />
}

export { Alert, AntdConfigProvider, AppBar, Button, CardContainer, DataList, DatePicker, Divider, Input, Tab }
