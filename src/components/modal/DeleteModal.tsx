import { ModalButton } from "HeaderNavigation/UserMenu/UpdateUserForm.styled";
import { DeleteModalContainer } from "./DeleteModal.styled";
import {
  Contact,
  useDeleteContactMutation,
} from "../../redux/contacts/contactsReducer";
import { Modal } from "Utils/Modal/Modal";
type DeleteModalProps = {
  closeDeleteModal: () => void;
  contact: Contact;
};

const DeleteModal = ({ closeDeleteModal, contact }: DeleteModalProps) => {
  const [deleteContactTrigger] = useDeleteContactMutation();
  const deleteContact = (id: string) => {
    deleteContactTrigger(id);
  };
  console.log("open delete modal tsx");
  return (
    <Modal onClose={closeDeleteModal}>
      <DeleteModalContainer>
        <p>
          Are You sure You want to delete {contact.name} from your Phonebook?
        </p>
        <div>
          <ModalButton
            type="button"
            onClick={() => deleteContact(contact._id || "ss")}
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

export default DeleteModal;
