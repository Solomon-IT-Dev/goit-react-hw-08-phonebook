import { FaMailchimp, FaSignOutAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import {
  UserMenuWrapper,
  Avatar,
  UserName,
  LogOutBtn,
} from './UserMenu.styled';

export default function UserMenu() {
  return (
    <UserMenuWrapper>
      <Avatar>
        <IconContext.Provider value={{ size: '4em' }}>
          <FaMailchimp />
        </IconContext.Provider>
      </Avatar>
      <UserName>Roman L.</UserName>
      <LogOutBtn type="button">
        <IconContext.Provider value={{ size: '3em' }}>
          <FaSignOutAlt />
        </IconContext.Provider>
      </LogOutBtn>
    </UserMenuWrapper>
  );
}
