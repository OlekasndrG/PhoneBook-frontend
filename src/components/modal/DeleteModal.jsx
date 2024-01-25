import { ModalButton } from 'HeaderNavigation/UserMenu/UpdateUserForm.styled';
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
        <p>
          Are You sure You want to delete {contact.name} from your Phonebook?
        </p>
        <div>
          <ModalButton
            type="button"
            onClick={() => deleteContact(contact._id)}
            aria-label="deleting contact from your phonebook "
          >
            Delete contact
          </ModalButton>

          <ModalButton
            type="button"
            onClick={closeDeleteModal}
            aria-label="closing the delete modal"
          >
            Go back
          </ModalButton>
        </div>
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
