import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

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
    dispatch(authOperations.register({ name, email, password }));
    formReset();
  };

  return (
    <div>
      <h1>New User registration</h1>

      <form onSubmit={onFormSubmit} autoComplete="off">
        <label htmlFor={nameInputId}>
          Name
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={onInputChange}
            id={nameInputId}
            required
          />
        </label>

        <label htmlFor={emailInputId}>
          E-mail
          <input
            type="email"
            name="email"
            placeholder="Enter your e-mail"
            value={email}
            onChange={onInputChange}
            id={emailInputId}
            required
          />
        </label>

        <label htmlFor={passwordInputId}>
          Password
          <input
            type="password"
            name="password"
            placeholder="Set password"
            value={password}
            onChange={onInputChange}
            id={passwordInputId}
            required
          />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
