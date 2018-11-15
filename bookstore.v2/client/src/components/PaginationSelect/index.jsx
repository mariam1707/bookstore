import React from 'react';

const PaginationSelect = ({ handlePerPage }) => (
  <div className="form-group ">
    <select defaultValue="6" onClick={handlePerPage} className="form-control">
      <option>3</option>
      <option>6</option>
      <option>9</option>
      <option>12</option>
    </select>
  </div>
);
export default PaginationSelect;
