import React, { useState } from "react";

import { ContactItem, SearchButton } from "./Contacts.styled";

import defaultimage from "../../images/photo.jpg";
import { useUpdateContactMutation } from "../../redux/contacts/contactsReducer";
import Loader from "components/Loader/Loader";
import { Modal } from "Utils/Modal/Modal";
import { EditContactModal } from "./EditContactModal/EdtiContactModalTS";
import { ContactListItemProps } from "./ContactItem";
// import { EditContactModalTS } from '../Contacts/EditContactModal/EdtiContactModalTS';
export const EditedContactItem = ({ contact }: ContactListItemProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, { isLoading }] = useUpdateContactMutation();

  const [openEditModal, setOpenEditModal] = useState(false);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ContactItem key={contact._id}>
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
            <Modal onClose={() => console.log("modal close")}>
              <EditContactModal
                contact={contact}
                onClose={() => setOpenEditModal(false)}
              />
            </Modal>
          )}
        </ContactItem>
      )}
    </>
  );
};
