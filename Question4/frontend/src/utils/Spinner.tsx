import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import Home from '../pages/Home'

const antIcon = (
  <LoadingOutlined
    cols={8}
    style={{
      fontSize: 150,
      marginTop: '20vh',
    }}
    spin
  />
)

// Return value should be component
const CustomSpinner = () => (
  <Home>
    {' '}
    <Spin style={{ textAlign: 'center' }} indicator={antIcon} />
  </Home>
)

export default CustomSpinner
