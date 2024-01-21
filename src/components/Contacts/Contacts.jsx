import { ContactsContainer } from './Contacts.styled';

// import { ContactListItem } from './ContactItem';
import { EditedContactItem } from './EditedContactItem';

const ContactList = ({  contacts }) => {
  return (
    <>
   
      <ContactsContainer>
        {contacts?.map(contact => {
          return <EditedContactItem key={contact._id} contact={contact} />;
        })}
      </ContactsContainer>
    </>
  );
};

export default ContactList;
