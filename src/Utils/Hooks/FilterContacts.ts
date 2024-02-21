import { Contact } from 'redux/contacts/contactsReducer';

// type FilterContactsType = {
//   contacts: Contact[];
//   filterValue: string | null;
// };

export const useFilterContacts = (contacts: Contact[], filterValue: string) => {
  let sorted2: any[] = [];
  if (contacts) {
    sorted2 = [...contacts].sort((a, b) => a.name[0].localeCompare(b.name[0]));
  }

  const filteredContacts = () => {
    if (!filterValue) return sorted2;

    return sorted2.filter(
      contact =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        contact.number.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  return filteredContacts();
};
