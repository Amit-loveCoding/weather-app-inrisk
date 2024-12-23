import React from 'react';
import '../LocationInput/LocationInput.css';

const LocationInput = ({ latitude, setLatitude, longitude, setLongitude }) => {
  return (
    <div className="location-input">
      <label className="label" id="label-style">Latitude:</label>
      <input
        type="number"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
        className="input"
      />
      <label className="label mt-2" id='label-style'>Longitude:</label>
      <input
        type="number"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
        className="input"
      />
    </div>
  );
};

export default LocationInput;
