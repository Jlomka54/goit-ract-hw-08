import { ErrorMessage, Field, Form, Formik } from "formik";

import css from "./LoginForm.module.css";
import { LoginUserSchema } from "../../utilits/formSchema";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const LoginForm = () => {
  const INITAL_VALUE = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(login(values));

  };

  return (
    <Formik
      initialValues={INITAL_VALUE}
      onSubmit={handleSubmit}
      validationSchema={LoginUserSchema}
    >
      <Form className={css.form}>
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
          Sign In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
