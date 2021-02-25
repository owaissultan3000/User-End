import React from "react";
import ContactFormSchema from "../Validations/ContactForm.validation";
import { Formik } from "formik";

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", subject: "", message: "" }}
      validationSchema={ContactFormSchema}
      onSubmit={(values) => {
        console.log(values);
        alert("SUCCESS!! :-)\n\n" + JSON.stringify(values));
      }}
    >
      {({
        values,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        errors,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className="bg-white p-5 contact-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              name="name"
              onBlur={handleBlur}
              touched={touched}
              value={values.name}
              placeholder="Your Name"
            />
            {errors.name && touched.name ? (
              <div className="text-danger">{errors.name}</div>
            ) : null}
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched}
              value={values.email}
            />
            {errors.email && touched.email ? (
              <div className="text-danger">{errors.email}</div>
            ) : null}
          </div>
          <div className="form-group">
            <input
              name="subject"
              className="form-control"
              placeholder="Subject"
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched}
              value={values.subject}
            />
            {errors.subject && touched.subject ? (
              <div className="text-danger">{errors.subject}</div>
            ) : null}
          </div>
          <div className="form-group">
            <textarea
              cols={30}
              rows={7}
              class="form-control"
              id="message"
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched}
              value={values.message}
            />
            {errors.message && touched.message ? (
              <div className="text-danger">{errors.message}</div>
            ) : null}
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary py-3 px-5">
              Send Message
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
