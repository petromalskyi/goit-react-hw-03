import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({
      ...values,
      id: nanoid(),
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.label}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.label}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={css.field}
            type="tel"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
