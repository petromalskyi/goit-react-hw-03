import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

// const phones = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export default function ContactList({ phones }) {
  return (
    <ul className={css.list}>
      {phones.map(phone => (
        <li className={css.item} key={phone.id}>
          <Contact phones={phones} data={phone}></Contact>
        </li>
      ))}
    </ul>
  );
}
