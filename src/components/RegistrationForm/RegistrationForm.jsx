import { ErrorMessage, Field, Form, Formik } from "formik";

import css from "./RegistrationForm.module.css";
import { RegisterUserSchema } from "../../utilits/formSchema";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const INITAL_VALUE = {
  name: "",
  email: "",
  password: "",
};
const RegistrationForm = () => {

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITAL_VALUE}
      onSubmit={handleSubmit}
      validationSchema={RegisterUserSchema}
    >
      <Form className={css.form}>
        <span>Name:</span>
        <Field className={css.input} type="text" name="name"></Field>
        <ErrorMessage className={css.errorMess} name="name" component="span" />
        <span>Email:</span>
        <Field className={css.input} type="text" name="email"></Field>
        <ErrorMessage className={css.errorMess} name="email" component="span" />
        <span>Password:</span>
        <Field className={css.input} type="password" name="password"></Field>
        <ErrorMessage
          className={css.errorMess}
          name="password"
          component="span"
        />

        <button className={css.button} type="submit">
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
