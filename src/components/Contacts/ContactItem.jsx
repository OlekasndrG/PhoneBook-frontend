import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact, FirstLetterDiv, SearchButton } from './Contacts.styled';
import { ReactComponent as DeleteIcon } from '../../images/DeleteIcon.svg';
import DeleteModal from 'components/modal/DeleteModal';
import defaultimage from '../../images/photo.jpg';
import {
  useDeleteContactMutation,
  useFetchContactsQuery,
  useUpdateContactMutation,
} from 'redux/contacts/contactsOperations';
export const ContactListItem = ({ contact }) => {
  const [deleteContactTrigger] = useDeleteContactMutation();
  const [updateContact, { isLoading }] = useUpdateContactMutation();
  const [avatar, setAvatar] = useState(contact.preview);
  const [file, setFile] = useState(null);
  const uploadFile = e => {
    if (!e.target.files[0]) return;
    if (e.target.files[0].size > 5000000)
      return alert(`Image too big, choose another image`);

    const avatarTempUrl = URL.createObjectURL(e.target.files[0]);

    setAvatar(avatarTempUrl);
    setFile(e.target.files[0]);
  };
  const [contactToDelete, setContactToDelete] = useState(null);

  // const { data: Contacts } = useFetchContactsQuery();
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  const randomColor = getRandomHexColor();

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('_id', contact._id);
    if (file) {
      formData.append('documents', file);
    }
    console.log(formData);
    updateContact(formData);
  };

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
ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
