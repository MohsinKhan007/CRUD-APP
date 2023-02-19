import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
const BackButton = () => {
  const navigate = useNavigate()
  return (
    <Button
      size="large"
      type="ghost"
      style={{ borderRadius: '20px' }}
      icon={<ArrowLeftOutlined />}
      onClick={() => navigate(-1)}
    ></Button>
  )
}

export default BackButton
