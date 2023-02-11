import React from 'react';
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

const ChatsForm = () => {
  let message = {
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis excepturi nostrum tenetur, obcaecati minus laborum quibusdam amet natus quae velit ad neque quod necessitatibus temporibus quidem voluptatibus ex et eligendi.',
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
              <FullChat>
                <Message message={message} />
                <Message message={message} />
                <Message message={message} />
                <Message message={message} />
                <Message message={message} />
              </FullChat>
              <SentMessage>
                <InputMessage placeholder="Type a message" />
                <SendButton>Send</SendButton>
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
