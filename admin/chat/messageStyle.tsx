import styled from 'styled-components';

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  border: none;
  padding: 5px 10px;
  color: black;
  &:last-child {
    scroll-snap-align: end;
  }
`;
export const MessageText = styled.div`
  max-width: 400px;
  border: none;
  padding: 10px 10px;
  border-radius: 25px;
  background: #e43603;
  box-shadow: 0 4px 15px 0 rgb(229 66 10 / 35%);
  color: white;
  margin-bottom: 2px;
`;
export const MessageInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
`;
export const MessageDate = styled.div`
  color: black;
  font-size: 15px;
  padding-right: 5px;
`;
export const MessageRead = styled.div`
  position: relative;
  color: black;
  top: -5px;
`;
