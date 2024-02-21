import React from "react";
import { Contact } from "redux/contacts/contactsReducer";
type ContactsLengthType = {
  filterValue: string;
  isLoading: boolean;
  isError: boolean;
  Contacts: Contact[];
};

const ContactsLegth = ({
  filterValue,
  isLoading,
  isError,
  Contacts,
}: ContactsLengthType) => {
  const ShowContactsLength = filterValue === "" && !isLoading && !isError;

  return (
    <>
      {ShowContactsLength && (
        <>
          {Contacts?.length > 0 ? (
            <p>You have {Contacts.length} contact(s)</p>
          ) : (
            <p>You have no contacts yet</p>
          )}
        </>
      )}
    </>
  );
};

export default ContactsLegth;
