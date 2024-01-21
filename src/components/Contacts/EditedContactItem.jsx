import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact, SearchButton } from './Contacts.styled';

import defaultimage from '../../images/photo.jpg';
import { useUpdateContactMutation } from 'redux/contacts/contactsOperations';
import Loader from 'components/Loader/Loader';
import { Modal } from 'Utils/Modal/Modal';
import { EditContactModal } from './EditContactModal/EditContactModal.jsx';

export const EditedContactItem = ({ contact }) => {
  // const [deleteContactTrigger] = useDeleteContactMutation();
  const [{ isLoading }] = useUpdateContactMutation();
  const [avatar, setAvatar] = useState(contact.preview);
  const [file, setFile] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  console.log(file);
  // console.log(evenetEmitter.setMaxListeners());
  const uploadFile = e => {
    if (!e.target.files[0]) return;
    if (e.target.files[0].size > 5000000)
      return alert(`Image too big, choose another image`);

    const avatarTempUrl = URL.createObjectURL(e.target.files[0]);

    setAvatar(avatarTempUrl);
    setFile(e.target.files[0]);
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('_id', contact._id);
  //   if (file) {
  //     formData.append('documents', file);
  //   }

  //   updateContact(formData);
  // };
  // const deleteContact = id => {
  //   deleteContactTrigger(id);
  // };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Contact key={contact._id}>
          <label htmlFor="contact_preview_image">
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              id="contact_preview_image"
              name="contact_preview_image"
              onChange={uploadFile}
            />

            <img
              src={avatar || defaultimage}
              alt="contact_preview_image"
              width={60}
              height={60}
            />
          </label>
          <div>
            {contact.name} : {contact.number}
          </div>
          <SearchButton
            type="button"
            onClick={() => {
              console.log(contact);
              setOpenEditModal(true);
            }}
          >
            Edit contact
          </SearchButton>
          {openEditModal && (
            <>
              <p>modal open</p>
              <Modal onClose={() => setOpenEditModal(false)}>
                <EditContactModal
                  contact={contact}
                  onClose={() => setOpenEditModal(false)}
                />
              </Modal>
            </>
          )}
        </Contact>
      )}
    </>
  );
};
EditedContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
