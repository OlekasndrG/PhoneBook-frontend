import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { registerUser } from 'redux/auth/AuthOperations';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { LoginForm } from '../LoginPage/Login.styled';
import { useNavigate } from 'react-router-dom';
import { getUserName } from 'redux/selectors';

import DefaultButton from 'Utils/Button';
import GoogleRedirect from 'components/GoogleAuth/GoogleAuth';

export const Registration = () => {
  const [state, setState] = useState({ name: '', email: '', password: '' });
  const { email, password, name } = state;
  // const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector(getUserName);
  let navigate = useNavigate();
  const handleChange = e => {
    setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const disabledButton = email && password && name;
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerUser(state));
  };

  useEffect(() => {
    if (user) {
      navigate('/login', { replace: true });
    }
  }, [navigate, user]);
  return (
    <LoginForm onSubmit={handleSubmit}>
      <h1>Register Page</h1>
      <label>
        Name
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>

      <label>
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
        aria-label="register-button"
      >
        Register
      </DefaultButton>
      <GoogleRedirect />
    </LoginForm>
  );
};
