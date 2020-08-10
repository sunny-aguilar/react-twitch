import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  componentDidMount() {
    console.log(`ID: ${this.props.match.params.id}`);
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    console.log("Stream: ", this.props.stream);
    console.log("Props: ", this.props);
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    // get title and description via destructuring
    const { title, description } = this.props.stream;

    return (
      <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[state.streams[ownProps.match.params.id]] };
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamShow);
