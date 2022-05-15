import { AuthNavList, AuthNavLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <AuthNavList>
      <AuthNavLink to="/login">Log In</AuthNavLink>
      <AuthNavLink to="/register">Sing Up</AuthNavLink>
    </AuthNavList>
  );
}
