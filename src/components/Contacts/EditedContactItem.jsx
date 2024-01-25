import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact, SearchButton } from './Contacts.styled';

import defaultimage from '../../images/photo.jpg';
import { useUpdateContactMutation } from 'redux/contacts/contactsOperations';
import Loader from 'components/Loader/Loader';
import { Modal } from 'Utils/Modal/Modal';
import { EditContactModal } from './EditContactModal/EditContactModal.jsx';

export const EditedContactItem = ({ contact }) => {
  const [{ isLoading }] = useUpdateContactMutation();

  const [openEditModal, setOpenEditModal] = useState(false);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Contact key={contact._id}>
          <img
            src={contact.preview || defaultimage}
            alt="contact_preview_image"
            width={60}
            height={60}
          />
          <div>
            {contact.name} : {contact.number}
          </div>
          <SearchButton
            type="button"
            onClick={() => {
          
              setOpenEditModal(true);
            }}
          >
            Edit contact
          </SearchButton>
          {openEditModal && (
            <Modal onClose={() => setOpenEditModal(false)}>
              <EditContactModal
                contact={contact}
                onClose={() => setOpenEditModal(false)}
              />
            </Modal>
          )}
        </Contact>
      )}
    </>
  );
};
EditedContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
