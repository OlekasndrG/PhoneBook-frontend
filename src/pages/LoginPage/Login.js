import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, resendVerify, verify } from 'redux//auth/AuthOperations';

import { LoginForm } from './Login.styled';
import { useSearchParams } from 'react-router-dom';

import DefaultButton from 'Utils/Button';
import { useAuth } from 'Utils/Hooks/';
import { GoogleRedirect } from './GoogleAuth';

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
          <label style={{ marginRight: '29px' }}>
            password
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
            disabled={!email}
            onClick={() => resendVerify(email)}
            aria-label="resend-verify-email-button"
          >
            Resend Verification email
          </DefaultButton>
        </LoginForm>
      )}
      {/* <GoogleLogin
        onSuccess={credentialResponse => {

          
          const qs = new URLSearchParams();
          const decode = jwtDecode(credentialResponse.credential);
          console.log(decode);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      /> */}

      <div>
        <GoogleRedirect />
      </div>
    </>
  );
};
// https://accounts.google.com/gsi/select?client_id=54023638768-8f53c4lvchav4r2r99us60iue5p6mki8.apps.googleusercontent.com&ux_mode=popup&ui_mode=card&as=MrrSPomiWkj8LwQjFNQ%2Fuw&channel_id=9e965d12a10c343cca933f5daa0b9bc0bc5f8c7b9ec02a02b4ee4b0a8d47e644&origin=http%3A%2F%2Flocalhost%3A3000
