import React from 'react';
import '../DataPicker/DataPicker.css';

const DatePicker = ({ startDate, setStartDate, endDate, setEndDate }) => {
  return (
    <div className="date-picker">
      <label className="label">Start Date:</label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="input"
      />
      <label className="label mt-2">End Date:</label>
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="input"
      />
    </div>
  );
};

export default DatePicker;
