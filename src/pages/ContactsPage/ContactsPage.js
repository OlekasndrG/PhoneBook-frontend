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

import { useFilterContacts } from 'Utils/Hooks/';

export default function Contacts() {
  const [filterValue, setFilterValue] = useState('');

  const {
    data: Contacts,
    isFetching: isLoading,
    isError,
  } = useFetchContactsQuery();
  // const [add] = useCallback(useAddContactMutation(), []);
  const [add] = useAddContactMutation();

  const filteredContacts = useFilterContacts(Contacts, filterValue);
  const handleFilterValueChange = useCallback(value => {
    setFilterValue(value);
  }, []);
  return (
    <>
      <MainContainer>
        <H1>Phonebook</H1>
        <ContactsPageHEader>
          <ContactsForm contacts={Contacts} onAdd={add} />
          <Filter onChangeFilterValue={handleFilterValueChange} />
        </ContactsPageHEader>
        {filterValue === '' && (
          <>
            {Contacts?.length > 0 ? (
              <p>You have {Contacts.length} contact(s)</p>
            ) : (
              <p>You have no contacts yet</p>
            )}
          </>
        )}

        {isError && <p>Something went wrong</p>}
        {isLoading && <Loader />}
        {!isLoading && (
          <ContactList filterValue={filterValue} contacts={filteredContacts} />
        )}
      </MainContainer>
    </>
  );
}
