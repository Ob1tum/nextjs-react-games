import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 50px 30px 50px 230px;
  transition: all 0.25s linear;
  position: relative;
  overflow-y: hidden;
`;

export const User = styled.div`
  border-radius: 10px;
  padding: 20px;
  width: 350px;
  background-color: white;
`;

export const Chat = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 760px;
  height: 700px;
  color: #646464;
  background-color: white;
`;

export const SelectFriend = styled.div`
  padding: 10px 20px;
  height: 10%;
  border-bottom: 1px solid rgba(128, 128, 128, 0.11);
`;
export const FullChat = styled.div`
  padding: 20px;
  height: 85%;
`;
export const SentMessage = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid rgba(128, 128, 128, 0.11);
`;
export const InputMessage = styled.textarea`
  position: relative;
  overflow: hidden;
  resize: none;
  outline: none;
  width: 500px;
  border: none;
  padding: 5px 10px;
  border-radius: 25px;
  background: #f5f5f5;
`;

export const Search = styled.input`
  width: 40%;
  max-width: 550px;
  height: 40px;
  padding: 0 20px;
  border-radius: 5px;
  background: #f5f5f5;
  border: 1px solid #e4e7eb;
  outline: none;
`;

export const Section = styled.section`
  font-family: Inter, sans-serif;
  letter-spacing: initial;
  line-height: initial;
  font-weight: initial;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  min-height: 100vh;
  height: auto;
  margin: 0 auto;
  background: #f5f5f5;
`;

export const DivPage = styled.div`
  align-items: stretch;
  padding-top: 75px;
  min-height: 100vh;
`;
