// @flow
import React from 'react';
import type { PropsType } from './types';

const Input = ({ name, text, onHandleChange }: PropsType) => (
  <div className="input-group mb-3">
    <div className="input-group-prepend">
      <span className="input-group-text" id="basic-addon1">
        {text}
      </span>
    </div>
    <input
      type="text"
      className="form-control"
      placeholder="Author"
      aria-label="Username"
      aria-describedby="basic-addon1"
      name={name}
      value={text}
      onClick={onHandleChange}
    />
  </div>
);

export default Input;
