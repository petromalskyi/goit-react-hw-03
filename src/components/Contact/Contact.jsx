import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsPersonFill } from 'react-icons/bs';
import css from './Contact.module.css';

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
