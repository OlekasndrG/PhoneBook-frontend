import React, { useState, ChangeEvent, FC } from "react";

import DeleteModal from "../../../components/modal/DeleteModal";

import defaultimage from "../../../images/photo.jpg";
import { useUpdateContactMutation } from "../../../redux/contacts/contactsReducer";
import {
  AvatarImage,
  AvatarInput,
  CheckBoxContainer,
  FormContainer,
} from "./EditContactModal.styled";
import { ErrorMessage, Field, Formik, FormikHelpers } from "formik";
import {
  AvatarLabel,
  CrossSVG,
  ModalButton,
  PlusSVG,
} from "HeaderNavigation/UserMenu/UpdateUserForm.styled";
import Loader from "components/Loader/Loader";
import { EditContactSchema } from "Utils/Schemas/ContactSchema";
import { FormikErrorMessage } from "components/Phonebook/ContactsForm.styled";
import { Contact } from "redux/contacts/contactsReducer";
type EditContactModalProps = {
  contact: Contact;
  onClose: () => void;
};

interface ContactFormikValues extends Omit<Contact, "_id"> {
  file: Blob;
  [key: string]: any;
}

//  [key: string]: string | Blob | boolean | null | undefined | number;
export const EditContactModal: FC<EditContactModalProps> = ({
  contact,
  onClose,
}) => {
  const [updateContact, { isLoading }] = useUpdateContactMutation();

  const [avatar, setAvatar] = useState(contact.preview || defaultimage);
  console.log("editcontactmodal tsx");
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const initialValues: ContactFormikValues = {
    file: avatar,
    name: contact.name ?? "",
    number: contact.number,
    subscription: null,
    favorite: false,
  };
  const handleSubmit = async (
    values: ContactFormikValues,
    actions: FormikHelpers<ContactFormikValues>
  ) => {
    const formData = new FormData();
    formData.append("_id", contact._id || "ss");
    Object.keys(values).forEach((key: string) => {
      if (key === "file") {
        formData.append("documents", values.file);
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
        initialValues={initialValues}
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
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  if (!event.target.files) {
                    return;
                  }
                  const avatarTempUrl = URL.createObjectURL(
                    event.target.files[0]
                  );
                  if (event.target.files[0].size > 5000000)
                    return alert(`Image too big, choose another image`);

                  setAvatar(avatarTempUrl);
                  setFieldValue("file", event.currentTarget?.files?.[0]);
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
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("name", e.target.value)
                }
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
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFieldValue("number", e.target.value)
                }
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
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setFieldValue("favorite", e.target.checked);
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
