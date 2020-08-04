import React from "react";
import { Link } from "react-router-dom";
import GoogleAutho from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">Streamer</Link>
      <div className="right menu">
        <Link to="/" className="item">All Streams</Link>
      </div>
    </div>
  );
};

export default Header;
