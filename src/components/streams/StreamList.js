import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    
  }
}

export default connect(null, { fetchStreams })(StreamList);
