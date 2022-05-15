import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { AppNav, AppNavLink } from './Navigation.styled';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <AppNav>
      <AppNavLink to="/">Home</AppNavLink>
      {isLoggedIn && <AppNavLink to="/contacts">Contacts</AppNavLink>}
    </AppNav>
  );
}
