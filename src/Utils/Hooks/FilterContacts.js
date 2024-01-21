export const useFilterContacts = (contacts, filterValue) => {
  let sorted2 = [];

  if (contacts) {
    sorted2 = [...contacts].sort((a, b) => a.name[0].localeCompare(b.name[0]));
  }

  const filteredContacts = () => {
    if (filterValue.toLowerCase() === '') return sorted2;

    return sorted2.filter(
      contact =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        contact.number.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  return filteredContacts();
};
