import styled from 'styled-components';

import background from '../../assets/images/gameFon.jpg';

export const GameContainer = styled.div`
  background: url(${background.src});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PlayersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  width: 70%;
  justify-content: center;
  margin-bottom: 100px;
  &:first-child {
    margin-bottom: 0px;
  }
`;

export const PlayerInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;
export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 40px 0;
  position: relative;
  height: 200px;
  width: 70%;
`;
export const Score = styled.div`
  border-radius: 100%;
  background: rgba(0, 0, 0, 0.2);
  width: 60px;
  height: 60px;
  text-align: center;
  padding-top: 10px;
  padding-left: 5px;
  position: absolute;
  top: 80px;
  left: 200px;
  text-border: 1px solid #36e78f;
`;
export const ResultWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  letter-spacing: 2px;
`;
export const Win = styled.div`
  background-color: green;
  color: white;
  border-radius: 5px;
  box-shadow: inset rgba(255, 255, 255, 0.5) 1px 1px;
  margin-top: 10px;
  width: 30%;
  padding: 3px;
`;
export const Lose = styled.div`
  background-color: red;
  color: white;
  border-radius: 5px;
  box-shadow: inset rgba(255, 255, 255, 0.5) 1px 1px;
  margin-top: 10px;
  width: 30%;
  padding: 3px;
`;
export const HandWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin: 10px 0;
  position: relative;
`;
export const Card = styled.div`
  border-radius: 10px;
  width: 140px;
  height: 220px;
  z-index: ${(props) => props.zInd};
  position: absolute;
  left: ${(props) => props.zInd * 80}px;
  transform: rotate(4deg);
  &:first-child {
    left: 0px;
  }
  &:last-child {
    transform: rotate(0);
  }
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  width: 140px;
  height: 40px;
  color: #fff;
  margin-left: 10px;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  background-color: #4dccc6;
  background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
  line-height: 42px;
  padding: 0;
  border: none;
  &:hover {
    background-color: #89d8d3;
    background-image: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);
  }
  &:before,
  &:after {
    position: absolute;
    content: '';
    right: 0;
    top: 0;
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.9), -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
      inset -4px -4px 6px 0 rgba(255, 255, 255, 0.9), inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
    transition: all 0.3s ease;
  }
  &:before {
    height: 0%;
    width: 0.1px;
  }
  &:after {
    width: 0%;
    height: 0.1px;
  }
  &:hover:before {
    height: 100%;
  }
  &:hover:after {
    height: 100%;
  }
`;
export const Bank = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Balance = styled.div`
  display: inline-block;
  width: 12em;
  font-size: 18px;
  margin-left: 15px;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: #2e7ebd 0 1px 2px;
  text-decoration: none;
  text-align: center;
  line-height: 1.1;
  white-space: pre-line;
  padding: 0.5em 0;
  border: 1px solid;
  border-color: #60a3d8 #2970a9 #2970a9 #60a3d8;
  border-radius: 6px;
  outline: none;
  background: #60a3d8 linear-gradient(#89bbe2, #60a3d8 50%, #378bce);
  box-shadow: inset rgba(255, 255, 255, 0.5) 1px 1px;
  user-select: none;
  &:hover {
    color: rgb(255, 255, 255);
    background-image: linear-gradient(#9dc7e7, #74afdd 50%, #378bce);
  }
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: 'Lato', sans-serif;
  & div {
    letter-spacing: 0;
    font-weight: 500;
  }
  & div:first-of-type {
    margin-bottom: 10px;
  }
`;

export const Bet = Balance;
