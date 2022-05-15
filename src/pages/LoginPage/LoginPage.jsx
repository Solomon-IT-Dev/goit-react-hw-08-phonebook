import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import {
  FormWrapper,
  FormTitle,
  LogInForm,
  FormInputLabel,
  FormInput,
  FormSubmitBtn,
} from './LoginPage.styled';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const onInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const formReset = () => {
    setEmail('');
    setPassword('');
  };

  const onFormSubmit = evt => {
    evt.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    formReset();
  };

  return (
    <FormWrapper>
      <FormTitle>Log in to application</FormTitle>

      <LogInForm onSubmit={onFormSubmit} autoComplete="off">
        <FormInputLabel htmlFor={emailInputId}>
          E-mail
          <FormInput
            type="email"
            name="email"
            placeholder="Enter e-mail"
            value={email}
            onChange={onInputChange}
            id={emailInputId}
            required
          />
        </FormInputLabel>

        <FormInputLabel htmlFor={passwordInputId}>
          Password
          <FormInput
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={onInputChange}
            id={passwordInputId}
            required
          />
        </FormInputLabel>

        <FormSubmitBtn type="submit">Log in</FormSubmitBtn>
      </LogInForm>
    </FormWrapper>
  );
}
