import {
  MessageContainer,
  MessageText,
  MessageDate,
  MessageInfo,
  MessageRead,
} from './messageStyle';

const Message = (props: any) => (
  <MessageContainer style={{ marginLeft: `${props.author === 'me' ? 'auto' : null}` }}>
    <MessageText
      style={{
        backgroundColor: `${props.author === 'me' ? 'rgba(244, 97, 25, 0.7)' : '#3A36DB'}`,
      }}
    >
      {props.text}
    </MessageText>
    <MessageInfo>
      <MessageDate>{props.date}</MessageDate>
      <MessageRead
        style={{ color: `${props.readStatus === 'read' ? 'rgba(244, 97, 25, 0.8)' : 'grey'}` }}
      >
        ✔
      </MessageRead>
    </MessageInfo>
  </MessageContainer>
);

export default Message;
