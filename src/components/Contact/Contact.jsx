import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsPersonFill } from 'react-icons/bs';
import css from './Contact.module.css';

// const phones = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export default function Contact({ data, onDelete }) {
  return (
    <div className={css.container}>
      <div>
        <div className={css.box}>
          <BsPersonFill className={css.person} />
          <p className={css.text}> {data.name}</p>
        </div>
        <div className={css.box}>
          <BsFillTelephoneFill />
          <p className={css.text}> {data.number}</p>{' '}
        </div>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => onDelete(data.id)}
      >
        Delete
      </button>
    </div>
  );
}
