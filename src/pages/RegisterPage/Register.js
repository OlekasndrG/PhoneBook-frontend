import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { registerUser } from 'redux/auth/AuthOperations';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { LoginForm } from '../LoginPage/Login.styled';
import { useNavigate } from 'react-router-dom';
import { getUserName } from 'redux/selectors';

import DefaultButton from 'Utils/Button';

// import { getUserEmail } from 'redux/selectors';
// import { Navigate } from 'react-router-dom';

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

    // setDisabled(true);

    //  toast.success('Registered successfully! Redirecting to Home Page');
  };

  // useEffect(() => {
  //   if (email && password && name) setDisabled(false);
  // }, [email, password, name]);
  useEffect(() => {
    if (user) {
      console.log('useeer');
      navigate('/login', { replace: true });
    }
  }, [navigate, user]);
  return (
    <div>
      (
      <LoginForm onSubmit={handleSubmit} autoComplete="off">
        <h1>Register</h1>
        <label>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label style={{ marginLeft: '4px' }}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={{ marginRight: '24px' }}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        {/* <button type="submit" disabled={!disabledButton}>
          <Loader></Loader>
        </button> */}
        <DefaultButton
          type="submit"
          disabled={!disabledButton}
          aria-label="register-button"
          // text={<p>Register</p>}
        >
          Register
        </DefaultButton>
      </LoginForm>
      )
    </div>
  );
};
