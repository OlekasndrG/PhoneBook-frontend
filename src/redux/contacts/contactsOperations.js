import { createAsyncThunk } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import { instance } from 'redux/auth/AuthOperations';
// const BASE_URL = process.env.REACT_APP_BASE_URL;
// const baseUrl = 'https://connections-api.herokuapp.com';
const baseUrl = process.env.REACT_APP_PRODUCTION_URL;
// REACT_APP_BASE_URL;

export const fetchContacts = createAsyncThunk(
  '/contacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}/contacts`);
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/contacts`, contact);
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactID, thunkAPI) => {
    try {
      const response = await axios.delete(`${baseUrl}/contacts/${contactID}`);
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const contactsRTK = createApi({
  reducerPath: 'contactsRTK',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        // headers: {
        //   'Content-Type': 'multipart/form-data;',
        // },
        // formData: true,
        body: newContact,
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: contactID => ({
        url: `/contacts/${contactID}`,
        method: 'DELETE',
        // body: contactID,
      }),
      invalidatesTags: ['Contact'],
    }),
    updateContact: builder.mutation({
      query: contact => ({
        url: `/contacts/${contact.get('_id')}`,

        method: 'PATCH',
        body: contact,
      }),
      // invalidatesTags: (result, error, arg) => [
      //   { type: 'Contact', _id: arg._id },
      // ],
    }),
  }),
});

export const {
  useDeleteContactMutation,
  useFetchContactsQuery,
  useAddContactMutation,
  useUpdateContactMutation,
} = contactsRTK;
