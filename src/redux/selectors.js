export const getContacts = state => state.phonebook.contacts.items;
export const getFilter = state => state.phonebook.filter;
export const getLoader = state => state.phonebook.contacts.isLoading;
export const getError = state => state.phonebook.contacts.error;
export const getUserName = state => state.auth.user?.name;
export const getUserEmail = state => state.auth.user.email;
export const getUserSubscription = state => state.auth.user?.subscription;
export const getUserAvatar = state => state.auth.user?.avatarURL;
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getisLoading = state => state.auth.isLoading;
export const getUserToken = state => state.auth.token;
export const getUserError = state => state.auth.error;
export const getIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
