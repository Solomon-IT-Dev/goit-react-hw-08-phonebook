import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NotFoundMessage = styled.h1`
  margin-top: 180px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 48px;
  font-weight: 500;
  letter-spacing: 1px;
`;

export const LinkButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 50px;
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  border: 0px;
  border-radius: 20px;
  background-color: #3498db;
  color: white;
  box-shadow: none;
  transition: all 250ms ease-in-out;

  :hover,
  :focus {
    background-color: #39b0ff;
    box-shadow: 0px 4px 4px #00000026, inset 0px 0px 0px 0px #0000004d;
  }
`;
