import React from "react";
import PropTypes from "prop-types";

/**
 * Fuctional React component for Congratulations message
 * @function
 * @param {object} props - React props
 * @returns {JSX element} - Render Compoenent( or null if `success`:false)
 */
const Congrates = props => {
  if (props.success) {
    return (
      <div data-test="component-congrates">
        <span data-test="congrates-message">
          Congratulations !!! you guess the word
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrates"></div>;
  }
};

Congrates.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrates;
