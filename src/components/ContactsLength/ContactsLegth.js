import React from 'react';

const ContactsLegth = ({ filterValue, isLoading, isError, Contacts }) => {
  const ShowContactsLength = filterValue === '' && !isLoading && !isError;

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
