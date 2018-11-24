import React from 'react';

const PaginationSelect = ({ handlePerPage, options = [] }) => (
  <div className="form-group ">
    <select defaultValue="6" onClick={handlePerPage} className="form-control">
      {options && options.map((option, index) => <option key={index}>{option}</option>)}
    </select>
  </div>
);
export default PaginationSelect;
