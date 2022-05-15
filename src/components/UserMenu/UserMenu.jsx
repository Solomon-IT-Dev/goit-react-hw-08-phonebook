import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import { FaMailchimp, FaSignOutAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import {
  UserMenuWrapper,
  Avatar,
  UserName,
  LogOutBtn,
} from './UserMenu.styled';

export default function UserMenu() {
  const userName = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  return (
    <UserMenuWrapper>
      <Avatar>
        <IconContext.Provider value={{ size: '4em' }}>
          <FaMailchimp />
        </IconContext.Provider>
      </Avatar>
      <UserName>{userName}</UserName>
      <LogOutBtn type="button" onClick={dispatch(authOperations.logOut())}>
        <IconContext.Provider value={{ size: '3em' }}>
          <FaSignOutAlt />
        </IconContext.Provider>
      </LogOutBtn>
    </UserMenuWrapper>
  );
}
