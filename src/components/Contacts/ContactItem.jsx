import React, { useState } from 'react';

import { Contact, FirstLetterDiv } from './Contacts.styled';
import { ReactComponent as DeleteIcon } from '../../images/DeleteIcon.svg';
import DeleteModal from 'components/modal/DeleteModal';
import { ModalButton } from 'HeaderNavigation/UserMenu/UpdateUserForm.styled';

export const ContactListItem = ({ contact }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  // const { data: Contacts } = useFetchContactsQuery();
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  const randomColor = getRandomHexColor();

  return (
    <>
      <Contact key={contact._id}>
        <FirstLetterDiv style={{ background: `${randomColor}` }}>
          {contact.name[0]}
        </FirstLetterDiv>
        <div>
          {contact.name} : {contact.number}
        </div>
        <ModalButton
          style={{ width: '85px' }}
          type="button"
          aria-label="open modal to delete current contact from phonebook"
          onClick={() => setOpenDeleteModal(true)}
        >
          <DeleteIcon width="24" height="24" />
        </ModalButton>

        {openDeleteModal && (
          <DeleteModal
            closeDeleteModal={() => setOpenDeleteModal(false)}
            contact={contact}
          />
        )}
      </Contact>
    </>
  );
};
// ContactListItem.propTypes = {
//   contact: PropTypes.object.isRequired,
// };
