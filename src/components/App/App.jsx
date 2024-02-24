import { useState } from 'react';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import css from './App.module.css';

const phones = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contactsState, setContactsState] = useState(phones);
  const [filterState, setFilterState] = useState('');

  const addContact = newContact => {
    setContactsState(prevContact => {
      return [...prevContact, newContact];
    });
  };

  const deleteContact = idContact => {
    setContactsState(prevContacts => {
      return prevContacts.filter(contact => contact.id !== idContact);
    });
  };

  const visibleContact = contactsState.filter(contact =>
    contact.name.toLowerCase().includes(filterState.toLowerCase()),
  );

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContact}></ContactForm>
      <SearchBox value={filterState} onFilter={setFilterState} />
      <ContactList
        phones={visibleContact}
        onDelete={deleteContact}
      ></ContactList>
    </div>
  );
}
