// flow
import React from 'react';
import type { PropsType } from './types';

const PaginationSelect = ({ handlePerPage, options = [] }: PropsType) => (
  <div className="form-group ">
    <select defaultValue="6" onClick={handlePerPage} className="form-control">
      {options && options.map((option, index) => <option key={index}>{option}</option>)}
    </select>
  </div>
);
export default PaginationSelect;
