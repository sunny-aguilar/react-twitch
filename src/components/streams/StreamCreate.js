import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  if (!formValues.title) {
    // user did not enter a title
  }
  else {
    // user entered a title
  }
};

export default reduxForm({
  // form name (purpose of form)
  form: "streamCreate"
})(StreamCreate);
