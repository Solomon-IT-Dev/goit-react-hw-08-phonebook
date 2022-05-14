import { Routes, Route } from 'react-router-dom';
import createAsyncPage from 'utils/createAsyncPage';
import Layout from 'components/Layout';

const HomePage = createAsyncPage('HomePage');
const RegisterPage = createAsyncPage('RegisterPage');
const LoginPage = createAsyncPage('LoginPage');
const PhoneBookPage = createAsyncPage('PhoneBookPage');
const NotFoundPage = createAsyncPage('NotFoundPage');

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contacts" element={<PhoneBookPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
