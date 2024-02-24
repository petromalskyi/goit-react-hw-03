import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ phones, onDelete }) {
  return (
    <ul className={css.list}>
      {phones.map(phone => (
        <li className={css.item} key={phone.id}>
          <Contact data={phone} onDelete={onDelete}></Contact>
        </li>
      ))}
    </ul>
  );
}
