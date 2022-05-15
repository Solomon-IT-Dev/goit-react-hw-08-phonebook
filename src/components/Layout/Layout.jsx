import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import AppName from 'components/AppName';
import Navigation from 'components/Navigation';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import Container from 'components/Container';
import Loader from 'components/Loader';
import { AppBar } from './Layout.styled';

export default function Layout() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <AppBar>
        <AppName title="PhoneBook" />
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </AppBar>

      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}
