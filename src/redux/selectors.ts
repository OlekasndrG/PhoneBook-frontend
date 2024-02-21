import { RootState } from '../redux/storeTS';

// export const getContacts = (state: RootState) => state.phonebook.contacts.items;
// export const getFilter = (state: RootState) => state.phonebook.filter;
// export const getLoader = (state: RootState) =>
//   state.phonebook.contacts.isLoading;
// export const getError = (state: RootState) => state.phonebook.contacts.error;
export const getUserName = (state: RootState) => state.auth.user?.name;
export const getUserEmail = (state: RootState) => state.auth.user?.email;
export const getUserSubscription = (state: RootState) =>
  state.auth.user?.subscription;
export const getUserAvatar = (state: RootState) => state.auth.user?.avatarURL;
export const getIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const getisLoading = (state: RootState) => state.auth.isLoading;
export const getUserToken = (state: RootState) => state.auth.token;
export const getUserError = (state: RootState) => state.auth.error;
export const getIsFetchingCurrentUser = (state: RootState) =>
  state.auth.isFetchingCurrentUser;
