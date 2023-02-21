import { MessageInstance, NoticeType } from 'antd/es/message/interface'
// notificaton alert Class
type MessageProps = {
  type: NoticeType
  content: string
  messageApi: MessageInstance
}

const Message = ({ type, content, messageApi }: MessageProps) => {
  messageApi.open({
    type: type,
    content: content,
    duration: 3,
  })
}

export default Message
