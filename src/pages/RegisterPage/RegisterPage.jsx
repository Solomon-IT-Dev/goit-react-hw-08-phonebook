import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { showInfoMessage } from 'utils/notifications';
import {
  FormWrapper,
  FormTitle,
  RegisterForm,
  FormInputLabel,
  FormInput,
  FormSubmitBtn,
} from './RegisterPage.styled';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const onInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const formReset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const onFormSubmit = evt => {
    evt.preventDefault();

    if (password.length >= 6) {
      showInfoMessage('Password must contain at least 6 characters');
      return;
    }

    dispatch(authOperations.register({ name, email, password }));
    formReset();
  };

  return (
    <FormWrapper>
      <FormTitle>New User registration</FormTitle>

      <RegisterForm onSubmit={onFormSubmit} autoComplete="off">
        <FormInputLabel htmlFor={nameInputId}>
          Name
          <FormInput
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={onInputChange}
            id={nameInputId}
            required
          />
        </FormInputLabel>

        <FormInputLabel htmlFor={emailInputId}>
          E-mail
          <FormInput
            type="email"
            name="email"
            placeholder="Enter your e-mail"
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
            placeholder="Set password"
            value={password}
            onChange={onInputChange}
            id={passwordInputId}
            required
          />
        </FormInputLabel>

        <FormSubmitBtn type="submit">Register</FormSubmitBtn>
      </RegisterForm>
    </FormWrapper>
  );
}
