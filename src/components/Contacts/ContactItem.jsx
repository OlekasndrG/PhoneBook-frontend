import React, { useState } from 'react';

import { Contact, FirstLetterDiv, SearchButton } from './Contacts.styled';
import { ReactComponent as DeleteIcon } from '../../images/DeleteIcon.svg';
import DeleteModal from 'components/modal/DeleteModal';

import {
  useDeleteContactMutation,
  
} from 'redux/contacts/contactsOperations';
export const ContactListItem = ({ contact }) => {
  const [deleteContactTrigger] = useDeleteContactMutation();

  const [contactToDelete, setContactToDelete] = useState(null);

  // const { data: Contacts } = useFetchContactsQuery();
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  const randomColor = getRandomHexColor();

 

  return (
    <>
      {contactToDelete ? (
        <DeleteModal
          deleteContact={() => {
            deleteContactTrigger(contactToDelete._id);
            setContactToDelete(null);
          }}
          closeModal={() => {
            setContactToDelete(null);
          }}
          contact={contactToDelete.name}
        />
      ) : (
        <Contact key={contact._id}>
          <FirstLetterDiv style={{ background: `${randomColor}` }}>
            {contact.name[0]}
          </FirstLetterDiv>
          <div>
            {contact.name} : {contact.number}
          </div>

          <SearchButton
            type="button"
            onClick={() => {
              setContactToDelete(contact);
            }}
          >
            <DeleteIcon width="24" height="24" />
          </SearchButton>
        </Contact>
      )}
    </>
  );
};
// ContactListItem.propTypes = {
//   contact: PropTypes.object.isRequired,
// };
