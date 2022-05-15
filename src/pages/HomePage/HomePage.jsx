import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { PhoneIcon, MainMassage, AdditionalText } from './HomePage.styled';

export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <PhoneIcon>☎️</PhoneIcon>
      {isLoggedIn ? (
        <MainMassage>
          Create a personal PhoneBook
          <br /> and manage your contacts
        </MainMassage>
      ) : (
        <>
          <MainMassage>Welcome in PhoneBook application!</MainMassage>
          <AdditionalText>
            In order to get started, create a new account or log in to the app
          </AdditionalText>
        </>
      )}
    </>
  );
}
