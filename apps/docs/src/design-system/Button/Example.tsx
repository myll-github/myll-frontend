import { Button } from 'myll-ui'

const ExampleButton = (args) => {
  return (
    <div style={{ gap: '4px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
        <div style={{ width: '100px' }}>gradient:</div> <Button {...args} color="gradient" />
        <Button {...args} color="gradient" disabled />
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
        <div style={{ width: '100px' }}>primary:</div> <Button {...args} color="primary" />
        <Button {...args} color="primary" disabled />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
        <div style={{ width: '100px' }}>secondary:</div> <Button {...args} color="secondary" />
        <Button {...args} color="secondary" disabled />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
        <div style={{ width: '100px' }}>outlined:</div> <Button {...args} color="outlined" />
        <Button {...args} color="outlined" disabled />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
        <div style={{ width: '100px' }}>warning:</div> <Button {...args} color="warning" />
        <Button {...args} color="warning" disabled />
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
        <div style={{ width: '100px' }}>text:</div> <Button {...args} color="text" />
        <Button {...args} color="text" disabled />
      </div>
    </div>
  )
}
export default ExampleButton
