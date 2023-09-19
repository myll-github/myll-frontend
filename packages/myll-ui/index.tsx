import { Divider, Space } from 'antd'
import ConfigProvider from 'antd/es/config-provider'

import Alert from './src/Components/Alert'
import AppBar from './src/Components/AppBar'
import Button from './src/Components/Button/Button'
import CardContainer from './src/Components/CardContainer'
import Collapse from './src/Components/Collapse'
import CustomCarosel from './src/Components/CustomCarosel'
import DatePicker from './src/Components/DatePicker'
import Dropdown from './src/Components/Dropdown'
import InfiniteBanner from './src/Components/InfiniteBanner'
import Input from './src/Components/Input'
import MenuList from './src/Components/MenuList'
import Modal from './src/Components/Modal'
import Tab from './src/Components/Tab'
import Tag from './src/Components/Tag'
import TextArea from './src/Components/TextArea'
import UploadCard from './src/Components/UploadCard'

export * from './src/Components/Card'
export * from './src/Components/Modal'

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
  CustomCarosel,
  DatePicker,
  Divider,
  Dropdown,
  InfiniteBanner,
  Input,
  MenuList,
  Modal,
  Tab,
  Tag,
  TextArea,
  UploadCard,
}
