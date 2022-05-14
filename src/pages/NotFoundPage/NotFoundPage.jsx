import {
  NotFoundMessage,
  NotFoundWrapper,
  LinkButton,
} from './NotFoundPage.styled';

export default function NotFoundPage() {
  return (
    <NotFoundWrapper>
      <NotFoundMessage>404 Page not found 📞</NotFoundMessage>
      <LinkButton to="/">Main page</LinkButton>
    </NotFoundWrapper>
  );
}
