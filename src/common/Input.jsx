import React from 'react';

function Input({ id, onChange, ...rest }) {
  return <input id={id} onChange={(e) => onChange(e, { id })} {...rest} />;
}

export default Input;
