import { Field, Form, Formik } from "formik";
import { useId } from "react";
import s from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <label htmlFor={nameFieldId}>
          Name
          <Field type="text" name="name" id={nameFieldId}></Field>
        </label>

        <label htmlFor={numberFieldId}>
          Number
          <Field type="text" name="number" id={numberFieldId}></Field>
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
