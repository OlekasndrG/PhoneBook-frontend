import { ContactsContainer } from "./Contacts.styled";

// import { ContactListItem } from './ContactItem';
import { EditedContactItem } from "./EditedContactItem";
import { ContactListItem } from "./ContactItem";
import { Contact } from "redux/contacts/contactsReducer";
import { User } from "components/types/UserTypes";
import { FC } from "react";
type ContactListType = {
  contacts: Contact[];
  subscription: Pick<User, "subscription"> | string;
};

const ContactList: FC<ContactListType> = ({ contacts, subscription }) => {
  return (
    <ContactsContainer>
      {contacts?.map((contact) => {
        if (subscription === "starter") {
          return <ContactListItem key={contact._id} contact={contact} />;
        }
        return <EditedContactItem key={contact._id} contact={contact} />;
      })}
    </ContactsContainer>
  );
};

export default ContactList;
