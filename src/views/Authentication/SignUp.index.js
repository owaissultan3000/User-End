import React from "react";
import { Formik } from "formik";
import SignUpFormSchema from "../Validations/SignUpForm.validation";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Button } from "antd";

// Services
import { userSignup } from "../../services/user.services";

const SignUpForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        address: "",
        city: "",
        country: "",
        province: "",
        // sex: "male",
      }}
      validationSchema={SignUpFormSchema}
      onSubmit={(values) => {
        //console.log(values);
        onSubmit(values);
        //alert("SUCCESS!! :-)\n\n" + JSON.stringify(values));
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
        <form
          onSubmit={handleSubmit}
          className="bg-white p-5 contact-form col-md-7 mb-5 mt-5"
        >
          <div className="form-group">
            <input
              name="name"
              className="form-control "
              onChange={handleChange}
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
              name="password"
              className="form-control "
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched}
              value={values.password}
              placeholder="Password"
            />
            {errors.password && touched.password ? (
              <div className="text-danger">{errors.password}</div>
            ) : null}
          </div>
          <div className="form-group">
            <input
              name="confirmpassword"
              className="form-control "
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched}
              value={values.confirmpassword}
              placeholder="ConfirmPassword"
            />
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
              type="tel"
              name="phonenumber"
              className="form-control"
              placeholder="Your phonenumber"
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched}
              value={values.phonenumber}
            />
          </div>
          {/* <div className="form-group">
            <select
              name="sex"
              id="sex"
              className="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched}
              value={values.sex}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div> */}
          <div className="form-group">
            <input
              name="address"
              className="form-control"
              placeholder="Your Address"
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched}
              value={values.address}
            />
            {errors.address && touched.address ? (
              <div className="text-danger">{errors.address}</div>
            ) : null}
          </div>
          <div className="form-group">
            <input
              name="city"
              className="form-control"
              placeholder="City"
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched}
              value={values.city}
            />
            {errors.city && touched.city ? (
              <div className="text-danger">{errors.city}</div>
            ) : null}
          </div>
          <div className="form-group">
            <input
              name="province"
              className="form-control"
              placeholder="Province"
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched}
              value={values.province}
            />
          </div>
          <div className="form-group">
            <input
              name="country"
              className="form-control"
              placeholder="Country"
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched}
              value={values.country}
            />
            {errors.country && touched.country ? (
              <div className="text-danger">{errors.country}</div>
            ) : null}
          </div>
          <div className="form-group">
            <Button htmlType="submit" className="btn btn-primary py-3 px-5">
              Sign up
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

const SignUp = ({ userSignup, history }) => {
  const signup = (data) =>
    new Promise((resolve, reject) => {
      userSignup(data, resolve, reject);
    });

  const onSubmit = async (values) => {
    try {
      await signup(values);
      console.log(values);
      setTimeout(() => {
        history.push("/");
      }, 300);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
      <div className="container">
        <div className="row">
          <div className="container">
            <div className="row align-items-center justify-content-center contact-section">
              <SignUpForm onSubmit={onSubmit} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      userSignup,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
