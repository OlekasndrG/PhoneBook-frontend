// import { createSlice } from '@reduxjs/toolkit';
// // Імпортуємо операцію
// import { fetchContacts, deleteContact, addContact } from './contactsOperations';
// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: {
//       items: [],
//       isLoading: false,
//       error: null,
//     },
//     filter: '',
//   },
//   // reducers: {
//   //   filterContacts(state, { payload }) {
//   //     state.filter = payload;
//   //   },
//   // },
//   // Додаємо обробку зовнішніх екшенів
//   extraReducers: {
//     [fetchContacts.pending](state) {
//       state.contacts.isLoading = true;
//     },
//     [fetchContacts.fulfilled](state, action) {
//       state.contacts.isLoading = false;
//       state.contacts.error = null;
//       state.contacts.items = action.payload;
//     },
//     [fetchContacts.rejected](state, action) {
//       state.contacts.isLoading = false;
//       state.contacts.error = action.payload;
//     },
//     [addContact.pending](state) {
//       state.contacts.isLoading = true;
//     },
//     [addContact.fulfilled](state, action) {
//       state.contacts.isLoading = false;
//       state.contacts.error = null;

//       state.contacts.items.push(action.payload);
//     },
//     [addContact.rejected](state, action) {
//       state.contacts.isLoading = false;
//       state.contacts.error = action.payload;
//     },
//     [deleteContact.pending](state) {
//       state.contacts.isLoading = true;
//     },
//     [deleteContact.fulfilled](state, action) {
//       state.contacts.isLoading = false;
//       state.contacts.error = null;
//       state.contacts.items = state.contacts.items.filter(
//         item => item.id !== action.payload.id
//       );
//     },
//     [deleteContact.rejected](state, action) {
//       state.contacts.isLoading = false;
//       state.contacts.error = action.payload;
//     },
//   },
// });
// export const { filterContacts } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
