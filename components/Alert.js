import React from "react";

import { UncontrolledAlert } from "reactstrap";

class Alerts extends React.Component {
  render() {
    return (
      <>
        <UncontrolledAlert color="success" fade={false}>
          <span className="alert-inner--icon">
            <i className="ni ni-like-2" />
          </span>
          <span className="alert-inner--text ml-1">
            <strong>Success!</strong> Your message was sent!
          </span>
        </UncontrolledAlert>
      </>
    );
  }
}

export default Alerts;
