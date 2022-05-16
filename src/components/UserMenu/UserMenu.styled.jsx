import styled from '@emotion/styled';

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 50px;
`;

export const Avatar = styled.div`
  margin-right: 8px;
`;

export const UserName = styled.span`
  color: #ffffff;
  font-size: 22px;
  margin-right: 30px;
`;

export const LogOutBtn = styled.button`
  padding: 0;
  color: #3498db;
  background: transparent;
  border: none;
  transition: all 250ms ease-in-out;

  :hover,
  :focus {
    color: #39b0ff;
  }
`;
