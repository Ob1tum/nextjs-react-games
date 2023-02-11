import {
  MessageContainer,
  MessageText,
  MessageDate,
  MessageInfo,
  MessageRead,
} from './messageStyle';

const Message = (props: any) => (
  <>
    <MessageContainer style={{ marginLeft: 'auto' }}>
      <MessageText style={{ backgroundColor: 'rgba(244, 97, 25, 0.8)' }}>
        {props.message.text}
      </MessageText>
      <MessageInfo>
        <MessageDate>10:00 AM</MessageDate>
        <MessageRead>++</MessageRead>
      </MessageInfo>
    </MessageContainer>
  </>
);

export default Message;
