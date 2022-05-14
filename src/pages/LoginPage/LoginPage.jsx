import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const dispatch = useDispatch();

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
    // dispatch(authOperations.logIn({ email, password }));
    formReset();
  };

  return (
    <div>
      <h1>Log in to application</h1>

      <form onSubmit={onFormSubmit} autoComplete="off">
        <label htmlFor={emailInputId}>
          E-mail
          <input
            type="email"
            name="email"
            placeholder="Enter e-mail"
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
            placeholder="Enter password"
            value={password}
            onChange={onInputChange}
            id={passwordInputId}
            required
          />
        </label>

        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
