import React from "react";
import * as Yup from "yup";

const ContactFormSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  name: Yup.string()
    .min(6, "Name must be at least 6 characters")
    .max(25, "Name should be less than 25 characters")
    .required("Name is required"),
  subject: Yup.string()
    .min(6, "Subject must be at least 6 characters")
    .required("Subject is required"),
  message: Yup.string()
    .min(6, "Message must be at least 6 characters")
    .required("Message is required"),
});

export default ContactFormSchema;
