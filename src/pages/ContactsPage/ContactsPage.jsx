import React, { useState, useCallback } from 'react';

import ContactList from 'components/Contacts/Contacts';

import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/contactsOperations';
import ContactsForm from 'components/Phonebook/ContactsForm';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import { ContactsPageHEader, H1, MainContainer } from './Contacts.styled';

import { useAuth, useFilterContacts } from 'Utils/Hooks/';
import ContactsLegth from 'components/ContactsLength/ContactsLegth';

export default function Contacts() {
  const [filterValue, setFilterValue] = useState('');

  const {
    data: Contacts,
    isFetching: isLoading,
    isError,
  } = useFetchContactsQuery();

  const [add] = useAddContactMutation();

  const { subscription } = useAuth();

  const filteredContacts = useFilterContacts(Contacts, filterValue);
  const handleFilterValueChange = useCallback(value => {
    setFilterValue(value);
  }, []);
  return (
    <MainContainer>
      <H1>Phonebook</H1>
      <ContactsPageHEader>
        <ContactsForm contacts={Contacts} onAdd={add} />
        <Filter onChangeFilterValue={handleFilterValueChange} />
      </ContactsPageHEader>
      <ContactsLegth
        filterValue={filterValue}
        isLoading={isLoading}
        isError={isError}
        Contacts={Contacts}
      />

      {isError && <p>Something went wrong</p>}
      {isLoading && <Loader />}
      {!isLoading && (
        <ContactList subscription={subscription} contacts={filteredContacts} />
      )}
    </MainContainer>
  );
}
