import React from 'react';

import { FooterBar } from './footer/footer';
import SideBar from './sideBar';
import {
  Chat,
  Page,
  User,
  SelectFriend,
  FullChat,
  SentMessage,
  InputMessage,
  Search,
  DivPage,
  Section,
} from './chatsFormStyle';

const adminPanel = () => (
  <>
    <Section>
      <DivPage>
        <SideBar />
        <Page>
          <User>
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
          </User>
          <Chat>
            <SelectFriend>Тут будет выбранный друг</SelectFriend>
            <FullChat>переписка</FullChat>
            <SentMessage>
              <InputMessage placeholder="Type a message" />
            </SentMessage>
          </Chat>
        </Page>
      </DivPage>
    </Section>
    <FooterBar />
  </>
);

export default adminPanel;
