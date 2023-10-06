import React from "react";
import PropTypes from "prop-types";

function Button({ children, version, type, isDidabled }) {
  return (
    <button type={type} disabled={isDidabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDidabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDidabled: PropTypes.bool,
};

export default Button;
