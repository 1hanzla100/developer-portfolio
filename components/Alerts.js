import { UncontrolledAlert } from "reactstrap";
import React from "react";

const Alert = ({ message, color, icon }) => {
  return (
    // this should reappear every time the user clicks on the button
    <UncontrolledAlert color={color}>
      <span className="alert-inner--icon">
        <i className={icon} />
      </span>
      <span className="alert-inner--text">
        <strong>{message}</strong>
      </span>
    </UncontrolledAlert>
  );
};

export default Alert;
