import React, { useState } from 'react';

import DeleteModal from 'components/modal/DeleteModal';

import defaultimage from '../../../images/photo.jpg';
import { useUpdateContactMutation } from 'redux/contacts/contactsOperations';
import {
  AvatarImage,
  AvatarInput,
  CheckBoxContainer,
  FormContainer,
} from './EditContactModal.styled';
import { ErrorMessage, Field, Formik } from 'formik';
import {
  AvatarLabel,
  CrossSVG,
  ModalButton,
  PlusSVG,
} from 'HeaderNavigation/UserMenu/UpdateUserForm.styled';
import Loader from 'components/Loader/Loader';
import { EditContactSchema } from 'Utils/Schemas/ContactSchema';
import { FormikErrorMessage } from 'components/Phonebook/ContactsForm.styled';

export const EditContactModal = ({ contact, onClose }) => {
  const [updateContact, { isLoading }] = useUpdateContactMutation();
  console.log(isLoading);
  const [avatar, setAvatar] = useState(contact.preview || defaultimage);

  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleSubmit = async (values, actions) => {
    const formData = new FormData();
    formData.append('_id', contact._id);
    Object.keys(values).forEach(key => {
      if (key === 'file') {
        formData.append('documents', values.file);
      } else {
        formData.append(key, values[key]);
      }
    });
    await updateContact(formData);
    actions.resetForm();
    onClose();
  };

  return (
    <>
      <Formik
        validationSchema={EditContactSchema}
        initialValues={{
          file: avatar,
          name: contact.name ?? '',
          number: contact.number,
          subscription: 'starter',
          favorite: false,
        }}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={handleSubmit}
      >
        {({ values, errors, setFieldValue }) => (
          <FormContainer>
            <AvatarLabel htmlFor="file">
              <AvatarInput
                name="file"
                type="file"
                value={undefined}
                accept=".jpg, .jpeg, .png"
                errors={errors.file}
                onChange={event => {
                  const avatarTempUrl = URL.createObjectURL(
                    event.target.files[0]
                  );
                  if (event.target.files[0].size > 5000000)
                    return alert(`Image too big, choose another image`);

                  setAvatar(avatarTempUrl);
                  setFieldValue('file', event.currentTarget.files[0]);
                }}
              />
              <PlusSVG />
              <AvatarImage
                src={avatar}
                alt="Contact preview"
                width={60}
                height={60}
              />

              <CrossSVG onClick={onClose} />
            </AvatarLabel>

            <label htmlFor="name">
              Name
              <Field
                type="text"
                id="name"
                name="name"
                placeholder={contact.name}
                onChange={e => setFieldValue('name', e.target.value)}
                value={values.name}
                autoComplete="off"
                errors={errors.name}
              />
              <ErrorMessage name="name" component={FormikErrorMessage} />
            </label>

            <label htmlFor="number">
              Number
              <Field
                type="text"
                id="number"
                name="number"
                placeholder={contact.number}
                onChange={e => setFieldValue('number', e.target.value)}
                value={values.number}
                errors={errors.number}
                autoComplete="off"
              />
              <ErrorMessage name="number" />
            </label>
            <CheckBoxContainer htmlFor="favorite">
              <span>Favorite</span>
              <Field
                type="checkbox"
                id="favorite"
                name="favorite"
                errors={errors.favorite}
                onChange={e => {
                  console.log(e.target.checked);
                  setFieldValue('favorite', e.target.checked);
                }}
                checked={values.favorite}
              />
            </CheckBoxContainer>

            <ModalButton type="submit" aria-label="submit editing user profile">
              {isLoading ? <Loader /> : <span>Submit</span>}
            </ModalButton>
            <ModalButton
              type="button"
              aria-label="open modal to delete current contact from phonebook"
              onClick={() => setOpenDeleteModal(true)}
            >
              Delete
            </ModalButton>
            {openDeleteModal && (
              <DeleteModal
                closeDeleteModal={() => setOpenDeleteModal(false)}
                contact={contact}
              />
            )}
          </FormContainer>
        )}
      </Formik>
    </>
  );
};
