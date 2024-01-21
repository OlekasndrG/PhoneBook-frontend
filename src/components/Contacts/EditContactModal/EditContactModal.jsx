import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useAuth } from 'Utils/Hooks/useAuth';
import { ReactComponent as DeleteIcon } from '../../../images/DeleteIcon.svg';
import DeleteModal from 'components/modal/DeleteModal';

import defaultimage from '../../../images/photo.jpg';
import { useUpdateContactMutation } from 'redux/contacts/contactsOperations';
import Loader from 'components/Loader/Loader';
import { Modal } from 'Utils/Modal/Modal';

export const EditContactModal = ({ contact, onClose }) => {
  console.log('render EditContact modal');
  const { subscription } = useAuth();

  const [updateContact, { isLoading }] = useUpdateContactMutation();
  const [avatar, setAvatar] = useState(contact.preview);
  const [file, setFile] = useState(null);
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const [favorite, setFavorite] = useState(contact.favorite);
  // const [name, setName] = useState(contact.name);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const businessSub = subscription === 'business';
  const starterSub = subscription === 'starter';
  console.log(subscription === 'business');

  const uploadFile = e => {
    if (!e.target.files[0]) return;
    if (e.target.files[0].size > 5000000)
      return alert(`Image too big, choose another image`);

    const avatarTempUrl = URL.createObjectURL(e.target.files[0]);

    setAvatar(avatarTempUrl);
    setFile(e.target.files[0]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('_id', contact._id);
    if (name) {
      formData.append('name', name);
    }
    if (number) {
      formData.append('number', number);
    }
    // if (favorite) {
    //   formData.append('favorite', favorite.checked);
    // }
    if (file) {
      formData.append('documents', file);
    }
    console.log(formData);
    updateContact(formData);
    onClose();
  };

  return (
    <>
      {openDeleteModal && (
        <DeleteModal
          closeDeleteModal={() => setOpenDeleteModal(false)}
          contact={contact}
        />
      )}
    
      <form>
        <label htmlFor="name">
          <input
            type="text"
            id="name"
            name="name"
            placeholder={name}
            onChange={e => {
              setName(e.target.value);
            }}
            value={name}
            autoComplete="off"
          />
        </label>
        <label htmlFor="number">
          <input
            type="text"
            id="number"
            name="number"
            placeholder={number}
            onChange={e => {
              setNumber(e.target.value);
            }}
            value={name}
            autoComplete="off"
          />
        </label>
        <label htmlFor="favorite">
          favorite
          <input
            type="checkbox"
            id="favorite"
            name="favorite"
            onChange={e => {
              setFavorite(e.target.value);
            }}
            checked={favorite}
          ></input>
        </label>
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
        <button type="button" onClick={() => setOpenDeleteModal(true)}>
          delete
        </button>

        <button
          type="submit"
          onClick={handleSubmit}
          aria-label="edit contact submit button"
        >
          Edit
        </button>
      </form>
    </>
  );
};

// export default EditContactModal;

// export const EditedContactItem = ({ contact }) => {
//   const [updateContact, { isLoading }] = useUpdateContactMutation();
//   const [avatar, setAvatar] = useState(contact.preview);
//   const [file, setFile] = useState(null);
//   const [openEditModal, setOpenEditModal] = useState(false);

//   // console.log(evenetEmitter.setMaxListeners());
// const uploadFile = e => {
//   if (!e.target.files[0]) return;
//   if (e.target.files[0].size > 5000000)
//     return alert(`Image too big, choose another image`);

//   const avatarTempUrl = URL.createObjectURL(e.target.files[0]);

//   setAvatar(avatarTempUrl);
//   setFile(e.target.files[0]);
// };

// const handleSubmit = e => {
//   e.preventDefault();
//   const formData = new FormData();
//   formData.append('_id', contact._id);
//   if (file) {
//     formData.append('documents', file);
//   }

//   updateContact(formData);
// };

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <Contact key={contact._id}>
// <label htmlFor="contact_preview_image">
//   <input
//     type="file"
//     accept=".jpg, .jpeg, .png"
//     id="contact_preview_image"
//     name="contact_preview_image"
//     onChange={uploadFile}
//   />
//   {/* <Plus className={css.addAvatarUrl} id="modal" /> */}

//   <img
//     src={avatar || defaultimage}
//     alt="contact_preview_image"
//     width={60}
//     height={60}
//   />
//   {/* <Cross className={css.cross} onClick={onClose} /> */}
// </label>

//           <div>
//             {contact.name} : {contact.number}
//           </div>
//           <button type="button" onClick={handleSubmit}>
//             new image
//           </button>

//           <SearchButton type="button" onClick={() => setOpenEditModal(true)}>
//             Edit contact
//           </SearchButton>
//           {openEditModal && (
//             <Modal onClose={() => setOpenEditModal(false)}>
//               <EditContactModal contact={contact} />
//             </Modal>
//           )}
//         </Contact>
//       )}
//     </>
//   );
// };
// EditedContactItem.propTypes = {
//   contact: PropTypes.object.isRequired,
// };
