import React from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}
  if (!values.author) {
    errors.author = 'Empty field'
  } else if (values.author.length > 15) {
    errors.author = 'Must be 15 characters or less'
  }
  if(!values.title){
    errors.title = 'Empty field'
  }
  if(!values.description){
    errors.description = 'Empty field'
  }
  if (!values.published) {
    errors.published = 'Empty field'
  } else if (isNaN(Number(values.published))) {
    errors.published = 'Must be a number'
  } else if (Number(values.published) < 1600) {
    errors.published = 'Sorry, the year should be more than 1600'
  }
  return errors
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
)

const SyncValidationForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
      <div className="container-fluid d-flex justify-content-sm-start justify-content-md-center justify-content-lg-end">
          <button type="button" className="flex-xl-fill btn bg-primary" data-toggle="modal" data-target="#myModal">
              Open modal
          </button>
          <div className="modal p-5" id="myModal">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h4 className="modal-title">Modal Heading</h4>
                          <button type="button" className="close" data-dismiss="modal">&times;</button>
                      </div>
      <form onSubmit={handleSubmit} className="p-5">
          <div className="form-group">
        <Field name="title" type="text" component={renderField} label="Title"/>
        <Field name="author" type="text" component={renderField} label="Author"/>
        <Field name="description" type="text" component={renderField} label="Description"/>
        <Field name="published" type="number" component={renderField} label="Published"/>
        <div>
          <button type="submit" disabled={pristine || submitting} className="border-0 bg-success rounded" data-dismiss="modal">Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset} data-dismiss="modal">Clear Values</button>
        </div>
          </div>
      </form>
                  </div>
              </div>
          </div>
      </div>

  )
}

export default reduxForm({
  form: 'syncValidation',  // a unique identifier for this form
  validate,                // <--- validation function given to redux-form
                   // <--- warning function given to redux-form
})(SyncValidationForm)

