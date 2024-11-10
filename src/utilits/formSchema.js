import * as Yup from "yup";

export const addProfileSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at leaast 2 characters")
    .max(50, "Name must be less than 50 characters"),
  number: Yup.string()
    .required("Phone is required")
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Number must be XXX-XX-XX"),
});

export const RegisterUserSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(20, "Name must be less than 20 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password length must be at least 8 characters")
    .required("Password is required"),
});

export const LoginUserSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password length must be at least 8 characters")
    .required("Password is required"),
});
