import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
// Back Button for handling the back navigations
const BackButton = () => {
  const navigate = useNavigate()
  return (
    <Button
      size="large"
      type="ghost"
      className="br-20"
      icon={<ArrowLeftOutlined />}
      onClick={() => navigate(-1)}
    ></Button>
  )
}

export default BackButton
