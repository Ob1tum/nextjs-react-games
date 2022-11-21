import styled from "styled-components";

export const DivHeader = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 70px;
  background-color: white;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  box-shadow: rgb(223 221 221 / 56%) 0 10px 20px;
  position: fixed;
  z-index: 1;
`
export const DivLogo = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
  width: 202px;
  height: 75px;
  border-right: 1px solid #F2F2F2;
`
export const DivNav = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  padding: 0 45px;
`

export const LogOut = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 5px;
  height: 30px;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 12px;
  color: #e85a19;
  background-color: white;
  border-radius: 10px;
  transition: all 1s ease-in-out;

  :hover {
    color: white;
    background-color: #e85a19;
    outline: none;
  }
`

export const Search = styled.input`
  width: 40%;
  max-width: 550px;
  height: 40px;
  padding: 0 20px;
  border-radius: 5px;
  background: #F5F5F5;
  border: 1px solid #E4E7EB;
  outline: none;
`

export const Span = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
`