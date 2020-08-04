import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: "1091101937969-m56756csts0qce8261nt2o3ia832srgp.apps.googleusercontent.com"
      });
    });
  }
  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
