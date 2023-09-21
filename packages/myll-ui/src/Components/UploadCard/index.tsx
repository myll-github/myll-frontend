/* eslint-disable no-param-reassign */
import { PlusOutlined } from '@ant-design/icons'
import { Modal, Upload } from 'antd'
import type { RcFile, UploadProps } from 'antd/es/upload'
import type { UploadFile } from 'antd/es/upload/interface'
import { useEffect, useState } from 'react'
import { noop } from 'shared'

import CustomImage from '../Image'

interface UploadCardProps {
  itemList: UploadFile[]
  onChange?: (newItemList: UploadFile[]) => void
}

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })

const uploadButton = (
  <div>
    <PlusOutlined />
    <div style={{ marginTop: 8 }}>Upload</div>
  </div>
)

const UploadCard = ({ itemList, onChange = noop }: UploadCardProps) => {
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [previewTitle, setPreviewTitle] = useState('')
  const [fileList, setFileList] = useState<UploadFile[]>(itemList)

  const handleCancel = () => setPreviewOpen(false)

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile)
    }

    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1))
  }

  const handleChange = ({ fileList: newFileList }: any) => setFileList(newFileList)

  useEffect(() => {
    onChange(fileList)
  }, [fileList])

  return (
    <>
      <Upload listType="picture-card" fileList={fileList} onPreview={handlePreview} onChange={handleChange}>
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <CustomImage alt="example" src={previewImage} />
      </Modal>
    </>
  )
}

UploadCard.defaultProps = {
  onChange: (newItemList: UploadFile[]) => {},
}

export default UploadCard
