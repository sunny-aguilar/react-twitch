import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class StreamCreate extends React.Component {
  render() {
    return (
      <form>
        <Field name="title" />
        <Field name="description" />
      </form>
    );
  }
}

export default reduxForm({
  // form name (purpose of form)
  form: "streamCreate"
})(StreamCreate);
