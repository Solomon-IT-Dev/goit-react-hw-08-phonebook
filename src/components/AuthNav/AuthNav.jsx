import { AuthNavList, AuthNavLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <AuthNavList>
      <AuthNavLink to="/login">Login</AuthNavLink>
      <AuthNavLink to="/register">Register</AuthNavLink>
    </AuthNavList>
  );
}
