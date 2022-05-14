import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppName from 'components/AppName';
import Navigation from 'components/Navigation';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import Container from 'components/Container';
import { AppBar } from './Layout.styled';

export default function Layout() {
  return (
    <>
      <AppBar>
        <AppName title="PhoneBook" />
        <Navigation />
        <AuthNav />
        <UserMenu />
      </AppBar>

      <Container>
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}
