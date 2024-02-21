import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { RootState } from "redux/storeTS";
// const BASE_URL = process.env.REACT_APP_BASE_URL;
// const baseUrl = 'https://connections-api.herokuapp.com';
// const URL2 = process.env.REACT_APP_BASE_URL;
const baseUrl = process.env.REACT_APP_PRODUCTION_URL;
// REACT_APP_BASE_URL;

export interface Contact {
  name: string;
  number: number | string;
  email?: string;
  favorite?: boolean;
  preview?: string;
  subscription?: string | null;
  _id?: string;
}
type Contacts = Contact[];
export const contactsRTK = createApi({
  reducerPath: "contactsRTK",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,

    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const token = state.auth.token;
      // @ts-ignore
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  // refetchOnMountOrArgChange: true,
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    fetchContacts: builder.query<Contacts, void>({
      query: () => "/contacts",

      providesTags: ["Contact"],
    }),
    addContact: builder.mutation({
      query: (newContact: Contact) => ({
        url: "/contacts",
        method: "POST",
        // headers: {
        //   'Content-Type': 'multipart/form-data;',
        // },
        // formData: true,
        body: newContact,
      }),
      invalidatesTags: ["Contact"],
    }),
    deleteContact: builder.mutation({
      query: (contactID) => ({
        url: `/contacts/${contactID}`,
        method: "DELETE",
        // body: contactID,
      }),
      invalidatesTags: ["Contact"],
    }),
    updateContact: builder.mutation({
      query: (contact) => ({
        url: `/contacts/${contact.get("_id")}`,

        method: "PATCH",
        body: contact,
      }),
      invalidatesTags: ["Contact"],
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
