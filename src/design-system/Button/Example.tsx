import { Button } from 'myll-ui'

const ExampleButton = (args) => {
  return (
    <div style={{ gap: '4px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
        <div style={{ width: '100px' }}>primary:</div> <Button {...args} color="primary" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
        <div style={{ width: '100px' }}>secondary:</div> <Button {...args} color="secondary" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
        <div style={{ width: '100px' }}>outlined:</div> <Button {...args} color="outlined" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
        <div style={{ width: '100px' }}>disabled:</div> <Button {...args} disabled />
      </div>
    </div>
  )
}
export default ExampleButton
