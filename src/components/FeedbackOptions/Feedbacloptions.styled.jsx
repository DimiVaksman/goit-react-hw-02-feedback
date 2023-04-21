import styled from "styled-components";

export const Buttons = styled.div`
display: flex;
justify-content: center;
list-style: none;`

export const ButtonItem = styled.li`
margin-right: 10px;
margin-bottom: 20px`

export const ButtonStyled = styled.button`
display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  text-decoration: none;
  color: rgb(174, 244, 11);;
  font-size: 18px;
  border-radius: 50px;
  border: 1px solid rgb(174, 244, 11);
  width: 70px;
  height: 70px;
  font-weight: bold;
  transition: 0.3s;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  background-color: #fff;
  :hover {
    transform: translateY(2px);
  box-shadow: 0 0 rgba(0, 0, 0, 0);
  };

`