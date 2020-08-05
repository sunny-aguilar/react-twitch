import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

class StreamCreate extends React.Component {
  renderInput() {
    return <div>Im an input</div>
  }

  render() {
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  // form name (purpose of form)
  form: "streamCreate"
})(StreamCreate);
