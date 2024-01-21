import {  createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Создание с помощью createSlice
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    add(state, action) {
      state.contacts.push(action.payload);
    },
    dd(state, action) {
            state.contacts = state.contacts.filter(
              item => item.id !== action.payload
      );
        // return state.contacts.filter(
        //     item => item.id !== action.payload - Якщо можливо, поясніть чому при такому return контакти не записуються у phonebook.contacts ?? 

    },
  },
});
export const { add, dd } = contactsSlice.actions;

// Создние persistor - для соедение редакса с локал стореджем
const persistConfig = {
  key: 'root',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
//  itemsSlice.reducer - в данном случае тот редюсер который мы хотим чтобы тянул с локал стореджа

// Храним селекторы тоже тут
export const getContactsArray = state => state.phonebook.contacts;
// Пример вытягивания селектора в компонент
// const ContactsArray = useSelector(getContactsArray);

// Создание с помощью createAction и Reducer
// export const increment = createAction('MyCounter/increment');
// export const decrement = createAction('MyCounter/decrement');
// export const myReducer = createReducer(4, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// });
//
