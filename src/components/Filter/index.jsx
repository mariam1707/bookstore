// @flow
import React from 'react';
import type { PropsType } from './types';

const Filter = ({
  type = 'text',
  className = 'form-control',
  name,
  value,
  onChange,
}: PropsType) => (
  <input type={type} className={className} name={name} value={value} onChange={onChange} />
);

export default Filter;
