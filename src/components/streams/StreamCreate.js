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

  render() {
    return (
      <form className="form">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
      </form>
    );
  }
}

export default reduxForm({
  // form name (purpose of form)
  form: "streamCreate"
})(StreamCreate);
