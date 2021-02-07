import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

export default class PostForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <Formik
          initialValues={this.props.data}
          onSubmit={(values, { resetForm }) => {
            this.props.save(values);
            resetForm();
          }}
          validationSchema={Yup.object().shape({
            text: Yup.string()
              .trim()
              .required("Required")
          })}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <label style={{ display: "block" }}>
                  Mensagem
            </label>

                <div className='row'>
                  <div className='form-group col-md-8'>

                    <input className="text-input"
                      id="text" maxLength="2400px" size="2200px" width="4900px"
                      placeholder='Digite a mensagem...'
                      type="text"
                      value={values.text}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.text && touched.text
                          ? "text-input error"
                          : "text-input"
                      }
                    />
                    {errors.text && touched.text && (
                      <div className="input-feedback">{errors.text}</div>
                    )}
                  </div>
                  <div className='form-group col-md-4'>
                    <button
                      type="button"
                      className="outline"
                      onClick={handleReset}
                      disabled={!dirty || isSubmitting}>
                      Reset
                    </button>
                    <button type="submit" disabled={isSubmitting}>
                      Submit
                    </button>

                  </div>
                </div>

              </form>
            );
          }}
        </Formik>
      </div>
    );
  }
}