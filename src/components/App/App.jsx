import { useState, useEffect } from 'react';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import css from './App.module.css';

const getStartOption = () => {
  const phones = window.localStorage.getItem('phone-book');
  return phones ? JSON.parse(phones) : [];
};

export default function App() {
  const [contactsState, setContactsState] = useState(getStartOption);
  const [filterState, setFilterState] = useState('');

  useEffect(() => {
    window.localStorage.setItem('phone-book', JSON.stringify(contactsState));
  }, [contactsState]);

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
