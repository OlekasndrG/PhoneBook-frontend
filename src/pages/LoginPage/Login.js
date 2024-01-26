import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, resendVerify, verify } from 'redux//auth/AuthOperations';

import { LoginForm } from './Login.styled';
import { useSearchParams } from 'react-router-dom';

import DefaultButton from 'Utils/Button';
import { useAuth } from 'Utils/Hooks/';
import { GoogleRedirect } from '../../components/GoogleAuth/GoogleAuth';

export const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { loading } = useAuth();

  // const [disabled, setDisabled] = useState(true);

  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const verificationToken = searchParams.get('verificationToken');
  const disabledButton = email && password;
  const handleChange = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value.trim());

        break;
      case 'password':
        setPassword(e.target.value.trim());

        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser({ password, email }));
    // setDisabled(true);
    e.currentTarget.reset();
  };
  const handleDemoSubmit = e => {
    e.preventDefault();
    dispatch(
      loginUser({ password: '123456', email: 'doyanij485@konican.com' })
    );
    // e.currentTarget.reset();
  };
  useEffect(() => {
    const verifyRequest = async () => {
      try {
        await verify(verificationToken);
      } catch (error) {
        console.log(error.message);
      } finally {
        setSearchParams({});
      }
    };
    if (verificationToken) verifyRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!verificationToken && (
        <LoginForm onSubmit={handleSubmit} autoComplete="off">
          <h1>Login page</h1>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>

          <DefaultButton
            type="submit"
            disabled={!disabledButton}
            aria-label="login-button"
            loader={loading}
          >
            Log in
          </DefaultButton>
          <DefaultButton
            type="button"
            onClick={handleDemoSubmit}
            // disabled={!disabledButton}
            aria-label="login-button"
            loader={loading}
          >
            Try Demo
          </DefaultButton>
          <GoogleRedirect />

          <DefaultButton
            type="button"
            disabled={!email}
            onClick={() => resendVerify(email)}
            aria-label="resend-verify-email-button"
          >
            Resend Verification email
          </DefaultButton>
        </LoginForm>
      )}
    </>
  );
};
