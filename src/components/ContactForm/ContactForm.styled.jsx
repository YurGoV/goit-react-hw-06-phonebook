import styled from '@emotion/styled';
import {Button} from "@mui/material";

export const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '14px',
  minwidth: '50px',
  maxWidth: '250px',
};

export const ButtonStyled = styled(Button)`
  background-color: white;
  display: flex;
  height: 30px;
  width: 100px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 3px;
  font-size: 16px;
  margin-top: 10px;
  border: 1px solid lightgrey;
  color: darkgrey;


  &:hover {
    //border: 1px solid black;
    color: black;
  }
`;

