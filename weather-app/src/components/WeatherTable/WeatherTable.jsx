import React from 'react';
import '../WeatherTable/WeatherTable.css';

const WeatherTable = ({ data }) => {
  return (
    <table className="weather-table">
      <thead>
        <tr>
          <th className="weather-table-cell">Date</th>
          <th className="weather-table-cell">Max Temp (°C)</th>
          <th className="weather-table-cell">Min Temp (°C)</th>
        </tr>
      </thead>
      <tbody>
        {data.dates.map((date, index) => (
          <tr key={date}>
            <td className="weather-table-cell">{date}</td>
            <td className="weather-table-cell">{data.maxTemps[index]}</td>
            <td className="weather-table-cell">{data.minTemps[index]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WeatherTable;
