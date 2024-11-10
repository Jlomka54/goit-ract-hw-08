import { ErrorMessage, Field, Form, Formik } from "formik";

import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { addProfileSchema } from "../../utilits/formSchema";

const ContactForm = () => {
  const dispatch = useDispatch();
  const INITAL_VALUE = {
    name: "",
    number: "",
  };
  const handleSubmit = (value, action) => {
    dispatch(
      addContact({
        name: value.name,
        number: value.number,
      })
    );

    action.resetForm();
  };

  return (
    <Formik
      initialValues={INITAL_VALUE}
      onSubmit={handleSubmit}
      validationSchema={addProfileSchema}
    >
      <Form className={css.form}>
        <span>Name:</span>
        <Field className={css.input} type="text" name="name"></Field>
        <ErrorMessage className={css.errorMess} name="name" component="span" />
        <span>Number:</span>
        <Field className={css.input} type="text" name="number"></Field>
        <ErrorMessage
          className={css.errorMess}
          name="number"
          component="span"
        />

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
