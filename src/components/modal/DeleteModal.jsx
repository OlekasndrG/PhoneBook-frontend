import { DeleteModalContainer } from './DeleteModal.styled';
import { useDeleteContactMutation } from 'redux/contacts/contactsOperations';
import { Modal } from 'Utils/Modal/Modal';
const DeleteModal = ({ closeDeleteModal, contact }) => {
  const [deleteContactTrigger] = useDeleteContactMutation();
  const deleteContact = id => {
    deleteContactTrigger(id);
  };
  return (
    <Modal onClose={closeDeleteModal}>
      <DeleteModalContainer>
        <p>Are You sure You want to delete {contact.name}?</p>
        <button type="button" onClick={() => deleteContact(contact._id)}>
          delete contact
        </button>

        <button type="button" onClick={closeDeleteModal}>
          Go back
        </button>
      </DeleteModalContainer>
    </Modal>
  );
};

// DeleteModal.propTypes = {
//   deleteContact: PropTypes.func.isRequired,
//   closeModal: PropTypes.func.isRequired,
//   contact: PropTypes.object.isRequired,
// };

export default DeleteModal;
