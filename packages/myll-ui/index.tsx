import { Divider } from 'antd'
import ConfigProvider from 'antd/es/config-provider'

import Alert from './src/Components/Alert'
import AppBar from './src/Components/AppBar'
import Button from './src/Components/Button/Button'
import CardContainer from './src/Components/CardContainer'
import Collapse from './src/Components/Collapse'
import DatePicker from './src/Components/DatePicker'
import Input from './src/Components/Input'
import MenuList from './src/Components/MenuList'
import Tab from './src/Components/Tab'
import UploadCard from './src/Components/UploadCard'

export * from './src/Components/Card'

const AntdConfigProvider = (props: any) => {
  return <ConfigProvider {...props} theme={{ hashed: false }} />
}

export {
  Alert,
  AntdConfigProvider,
  AppBar,
  Button,
  CardContainer,
  Collapse,
  DatePicker,
  Divider,
  Input,
  MenuList,
  Tab,
  UploadCard,
}
