import React from 'react';
import DatePicker from 'react-datepicker';

function DatePickerView({
  startDate,
  handleChangeStartDate,
  endDate,
  handleChangeEndDate,
  handleDateSubmit,
  handleDateDelete,
}) {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        <DatePicker
          selected={startDate}
          onChange={handleChangeStartDate}
          className="form-control"
          dateFormat="DD/MM/YYYY"
        />
        <DatePicker
          selected={endDate}
          onChange={handleChangeEndDate}
          className="form-control"
          dateFormat="DD/MM/YYYY"
        />
      </div>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        <button type="button" className="btn btn-primary m-10" onClick={handleDateSubmit}>
          Показать
        </button>
        <button type="button" className="btn btn-primary m-10" onClick={handleDateDelete}>
          Сбросить
        </button>
      </div>
    </>
  );
}

export default DatePickerView;
