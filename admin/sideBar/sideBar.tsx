/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useRouter } from 'next/router';

import { DivSideBar, Li, LiHeader, StyledLink, Ul } from './sideBarStyle';

const SideBar = () => {
  const router = useRouter();

  const path = '/dashboard';

  return (
    <DivSideBar>
      <Ul>
        <LiHeader>Admin Panel</LiHeader>
        <StyledLink href={`${path}/chats`} passHref>
          <Li pathname="chats" active={router.pathname}>
            Chats
          </Li>
        </StyledLink>
      </Ul>
    </DivSideBar>
  );
};

export default SideBar;
