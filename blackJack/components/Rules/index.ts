import styled from 'styled-components';

import background from '../../assets/images/startPage.jpg';

export const Rules = styled.div`
  background: url(${background.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RulesWrapper = styled.div`
  background-color: #009566;
  width: 85%;
  height: 85vh;
  border-radius: 5px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RulesTextWrapper = styled.div`
  font-family: 'Open Sans', serif;
  font-size: 18px;
  letter-spacing: 0px;
  line-height: 22px;
  font-weight: 300;
`;

export const RulesText = styled.div`
  margin-bottom: 20px;
`;

export const RulesBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
