import { AppNav, AppNavLink } from './Navigation.styled';

export default function Navigation() {
  return (
    <AppNav>
      <AppNavLink to="/">Home</AppNavLink>
      <AppNavLink to="/contacts">Contacts</AppNavLink>
    </AppNav>
  );
}
