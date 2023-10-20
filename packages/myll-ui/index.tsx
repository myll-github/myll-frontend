import { Avatar, DatePicker, Divider, Drawer } from 'antd'
import ConfigProvider from 'antd/es/config-provider'

import Alert from './src/Components/Alert'
import AppBar from './src/Components/AppBar'
import Button from './src/Components/Button/Button'
import CardContainer from './src/Components/CardContainer'
import Carousel from './src/Components/Carousel'
import Collapse from './src/Components/Collapse'
import Dropdown from './src/Components/Dropdown'
import CustomImage from './src/Components/Image'
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
  Avatar,
  Button,
  CardContainer,
  Carousel,
  Collapse,
  CustomImage,
  DatePicker,
  Divider,
  Drawer,
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
