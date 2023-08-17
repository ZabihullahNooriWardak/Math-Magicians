import React from 'react';
import PropTypes from 'prop-types';

function Button({ className, label, onClick }) {
  return (
    <button className={className} type="button" onClick={() => onClick(label)}>
      {label}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
