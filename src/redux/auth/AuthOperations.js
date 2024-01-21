import { createAsyncThunk } from '@reduxjs/toolkit';
// import { userAPI } from './userAPI';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const baseUrl = 'https://connections-api.herokuapp.com';
// REACT_APP_BASE_URL;
const BASE_URL = process.env.REACT_APP_BASE_URL;
axios.defaults.baseURL = BASE_URL;

// fetch('', {
//   method: 'POST',
//   headers: `Bearer ${token}`,
// });
export const instance = axios.create({
  baseURL: BASE_URL,
});
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
export const registerUser = createAsyncThunk(
  'auth/register',
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post('/users/register', newUser);
      token.set(response.data.token);
      toast.success(
        'Registered successfully! Dont forget to verify email !!! ',
        {
          position: 'top-right',
          autoClose: 3252,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        }
      );
      return response.data;
    } catch (e) {
      toast.error(`Something went wrong ${e.response.data.message}`, {
        position: 'top-right',
        autoClose: 3252,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const verify = async verificationToken => {
  const { data: result } = await axios.get(
    `/users/verify/${verificationToken}`
  );
  return result;
};
export const resendVerify = async email => {
  try {
    const { data: result } = await axios.post('/users/verify', { email });
    return result;
  } catch (error) {
    console.log(error);
    toast.error(`Something went wrong ${error.response.data.message}`, {
      position: 'top-right',
      autoClose: 3252,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }
};

export const loginUser = createAsyncThunk(
  'auth/login',
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', newUser);
      token.set(response.data.token);
      toast.success('Success! Redirecting to Home Page!', {
        position: 'top-right',
        autoClose: 2252,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return response.data;
    } catch (e) {
      toast.error(`Something went wrong ${e.response.data.message}`, {
        position: 'top-right',
        autoClose: 3252,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);
export const logOutUser = createAsyncThunk(
  'auth/logout',
  async (User, thunkAPI) => {
    try {
      const response = await axios.post('users/logout', User);
      token.unset();

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const initialToken = state.auth.token;
    if (initialToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(initialToken);
    try {
      const response = await axios.get('users/current');

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (updatedUserData, thunkAPI) => {
    try {
      const { data } = await axios.patch('/users/updateUser', updatedUserData);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
// export const loginGoogle = createAsyncThunk(
//   'auth/googleAuth',
//   async (updatedUserData, thunkAPI) => {
//     try {
//       const { data } = await axios.patch('/users/updateUser', updatedUserData);
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
