import styled from 'styled-components';

import background from '../../assets/images/startPage.jpg';

export const Home = styled.div`
  background: url(${background.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;
export const ButtonWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 40px;
  padding-top: 50vh;
`;
