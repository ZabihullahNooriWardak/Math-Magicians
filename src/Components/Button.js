import React from 'react';

// eslint-disable-next-line react/prop-types
function Button({ className, label, onClick }) {
  return (
    <button className={className} type="button" onClick={() => onClick(label)}>
      {label}
    </button>
  );
}
export default Button;
