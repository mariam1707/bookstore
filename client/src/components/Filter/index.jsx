// flow
import React from 'react';

const Filter = ({ type = 'text', className = 'form-control', name, value, onChange }) => (
  <input type={type} className={className} name={name} value={value} onChange={onChange} />
);

export default Filter;
