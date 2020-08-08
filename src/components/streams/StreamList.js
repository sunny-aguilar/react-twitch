import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <button className="ui button primary">
            Edit
          </button>
          <button className="ui button negative">
            Delete
          </button>
        </div>
      );
    }
  }

  renderList() {
    console.log('INFO: ');
    console.log(this.props.streams);
    if (this.props.streams[0]){ // my additional edit
      return this.props.streams[0].map((stream) => {
        return (
          <div className="item" key={stream.id}>
            {this.renderAdmin(stream)}
            <i className="large middle aligned icon camera" />
            <div className="content">
              {stream.title}
              <div className="description">{stream.description}</div>
            </div>
          </div>
        );
      });
    } // my additional edit
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}
// end of class

const mapStateToProps = (state) => {
  // console.log('OBJECT');
  // console.log(Object.values(state.streams));
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
