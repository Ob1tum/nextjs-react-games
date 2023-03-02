import React, { useState, useEffect } from 'react';
import { withRouter } from 'next/router';

import SideBar from '../sideBar/sideBar';
import { FooterBar } from '../footer/footer';

import Message from './message';
import {
  Chat,
  Page,
  Friend,
  FullChat,
  SentMessage,
  InputMessage,
  SendButton,
  DivPage,
  Section,
  SelectFriend,
} from './chatsFormStyle';
// import ChatService from './chatService';

// const service = new ChatService();

const ChatsForm = () => {
  // console.log('Chat test');
  useEffect(() => {
    // console.log('useEffect');
    // service.start();
  }, []);

  const messagesArr = [
    {
      id: '1',
      author: 'me',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      readStatus: 'read',
      date: '10:00 AM',
    },
    {
      id: '2',
      author: 'user',
      text: 'Lorem ipsum!!!!!!!!!!!😀😀😀',
      readStatus: 'read',
      date: '10:10 AM',
    },
    {
      id: '3',
      author: 'me',
      text: 'Lorem ipsum dolor sit amet❤️❤️❤️❤️',
      readStatus: 'read',
      date: '10:11 AM',
    },
    {
      id: '4',
      author: 'user',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      readStatus: 'unread',
      date: '11:00 AM',
    },
    {
      id: '5',
      author: 'user',
      text: 'Lorem!!!!!!!!!!!',
      readStatus: 'unread',
      date: '11:01 AM',
    },
    {
      id: '6',
      author: 'user',
      text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      readStatus: 'unread',
      date: '11:01 AM',
    },
  ];

  const users = [
    {
      id: 1,
      username: 'name1',
    },
    {
      id: 2,
      username: 'name2',
    },
    {
      id: 3,
      username: 'name3',
    },
  ];

  const [messages, setMessages] = useState(messagesArr);
  const [inputMessage, setInputMessage] = useState('');

  const testMessages = messages.map((message) => (
    <Message
      key={message.id}
      author={message.author}
      text={message.text}
      readStatus={message.readStatus}
      date={message.date}
    />
  ));

  const sendMessage = (value: string) => {
    const newMessage = {
      id: '7',
      author: 'me',
      text: value,
      readStatus: 'unread',
      date: '12:00 AM',
    };
    setMessages([...messages, newMessage]);
    setInputMessage('');
    // service.emit(newMessage);
  };

  const onEnter = (event: any) => {
    if (event.key === 'Enter' && inputMessage.length > 0) {
      sendMessage(inputMessage);
      event.preventDefault();
    }
  };

  const onEventUser = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    console.log(e);
  };

  return (
    <>
      <Section>
        <DivPage>
          <SideBar />
          <Page>
            <Friend>
              <span
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  color: 'black',
                  padding: ' 0 0 10px 0',
                  borderBottom: '1px solid rgba(128, 128, 128, 0.11)',
                  fontWeight: '500',
                  fontSize: '16px',
                }}
              >
                Message
                <span />
              </span>
              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  color: 'black',
                  padding: '10px 0 10px 0',
                  fontWeight: '500',
                  fontSize: '16px',
                }}
              >
                {users.map((user) => (
                  <li
                    key={user.id}
                    onClick={(e) => onEventUser(e)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <img
                      src="https://consultus.org/cus/wp-content/uploads/2015/06/Avatare-w-2.jpg"
                      alt=""
                      style={{ width: '40px', height: 'auto' }}
                    />
                    {user.username}
                  </li>
                ))}
              </ul>
            </Friend>
            <Chat>
              <SelectFriend>Тут будет выбранный друг</SelectFriend>
              <FullChat>{testMessages}</FullChat>
              <SentMessage>
                <InputMessage
                  value={inputMessage}
                  placeholder="Type a message"
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => onEnter(e)}
                />
                <SendButton onClick={() => sendMessage(inputMessage)}>Send</SendButton>
              </SentMessage>
            </Chat>
          </Page>
        </DivPage>
      </Section>
      <FooterBar />
    </>
  );
};

export default withRouter(ChatsForm);
