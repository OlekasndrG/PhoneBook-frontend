import { ContactsContainer } from './Contacts.styled';

// import { ContactListItem } from './ContactItem';
import { EditedContactItem } from './EditedContactItem';
import { ContactListItem } from './ContactItem';

const ContactList = ({ contacts, subscription }) => {
  return (
    <ContactsContainer>
      {contacts?.map(contact => {
        if (subscription === 'starter') {
          return <ContactListItem key={contact._id} contact={contact} />;
        }
        return <EditedContactItem key={contact._id} contact={contact} />;
      })}
    </ContactsContainer>
  );
};

export default ContactList;
