import React from "react";
import * as Yup from "yup";

const SignUpFormSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  name: Yup.string()
    .min(6, "Name must be at least 6 characters")
    .required("Name is required"),
  address: Yup.string()
    .min(6, "Address must be at least 6 characters")
    .required("Address is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string()
    .min(4, "Country name must be at least 4 characters")
    .required("Country name is required"),
  password: Yup.string()
    .min(8, "Password length should be atleast 8 characters long")
    .required("Passwrod is required!"),
});

export default SignUpFormSchema;
