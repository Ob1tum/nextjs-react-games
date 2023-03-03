import React, { useState, useEffect } from 'react';
import { withRouter } from 'next/router';
import Header from '../header/header';
import SideBar from '../header/sideBar';
import { FooterBar } from '../footer/footer';
import { DivPage, Section } from '../profile/profileStyle';
import { Search } from '../header/headerStyle';
import Message from './message';

import {
  Chat,
  Page,
  Friend,
  SelectFriend,
  FullChat,
  SentMessage,
  InputMessage,
  SendButton,
} from './chatsFormStyle';
import ChatService from './chatService';
import ChatCreation from './chatRESTService';

let service = new ChatService();
let createNewChat = new ChatCreation();

const ChatsForm = () => {
  console.log('Chat test');
  useEffect(() => {
    console.log('useEffect');
    // createNewChat.createChat(2);
    service.start();
  }, []);

  let messagesArr = [
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

  let [messages, setMessages] = useState(messagesArr);
  let [inputMessage, setInputMessage] = useState('');

  let testMessages = messages.map((message) => {
    return (
      <Message
        key={message.id}
        author={message.author}
        text={message.text}
        readStatus={message.readStatus}
        date={message.date}
      />
    );
  });

  let sendMessage = (value: string) => {
    let newMessage = {
      id: '7',
      author: 'me',
      text: value,
      readStatus: 'unread',
      date: '12:00 AM',
    };
    setMessages([...messages, newMessage]);
    setInputMessage('');
    service.emit(newMessage);
  };

  let onEnter = (event: any) => {
    if (event.key === 'Enter' && inputMessage.length > 0) {
      sendMessage(inputMessage);
      event.preventDefault();
    }
  };

  return (
    <>
      <Section>
        <Header />
        <DivPage>
          <SideBar />
          <Page>
            <Friend>
              <span
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  padding: ' 0 0 10px 0',
                  borderBottom: '1px solid rgba(128, 128, 128, 0.11)',
                }}
              >
                <img
                  src="https://consultus.org/cus/wp-content/uploads/2015/06/Avatare-w-2.jpg"
                  alt=""
                  style={{ width: '40px', height: 'auto' }}
                />
                <Search type="text" placeholder="Search" style={{ width: '300px' }} />
              </span>
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
