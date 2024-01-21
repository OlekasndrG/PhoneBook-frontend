import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

// import { setAuthHeader } from 'services/auth-API';

// import MainContainer from 'components/MainContainer';
// import ReusableTitle from 'components/ReusableComponents/ReusableTitle';
// import Loader from 'components/Loader/Loader';
// import { StyledLoaderWrapper } from './GoogleRedirect.styled';
import axios from 'axios';
import { setGoogleAuth } from 'redux/auth/authSlice';
import { loginUser } from 'redux/auth/AuthOperations';
const BASE_URL = process.env.REACT_APP_BASE_URL;
export const GoogleRedirect = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    const token = searchParams.get('token');
    const email = searchParams.get('email');
    const name = searchParams.get('name');
    const avatarURL = searchParams.get('avatarURL');
    const subscription = searchParams.get('subscription');

    if (!token || !email || !name) {
      // console.log('missing fields');
      return;
    }

    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    console.log(axios.defaults.headers.common.Authorization);
    dispatch(
      setGoogleAuth({ user: { name, email, avatarURL, subscription }, token })
    );
    console.log(email);
  }, [dispatch, searchParams]);

  return (
    <>
      <a href={`${BASE_URL}/users/google`}>Google authorization</a>
    </>
  );
};

export default GoogleRedirect;
