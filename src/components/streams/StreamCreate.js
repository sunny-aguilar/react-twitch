import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class StreamCreate extends React.Component {
  render() {
    return (
      <form>
        <Field />
      </form>
    );
  }
}

export default reduxForm({
  // form name (purpose of form)
  form: "streamCreate"
})(StreamCreate);
