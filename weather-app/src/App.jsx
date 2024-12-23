import React, { useState,useEffect } from 'react';
import LocationInput from './components/LocationInput/LocationInput.jsx';
import DatePicker from './components/DataPicker/Datapicker.jsx';
import WeatherGraph from './components/WeatherGraph/WeatherGraph.jsx';
import WeatherTable from './components/WeatherTable/WeatherTable.jsx';
import Loader from './components/Loader/Loader.jsx';
import './App.css'; 
import "./index.css" 
import fetchWeatherData from './components/FetchWeatherData/FetchWeatherData.jsx';
import backgroundImages from './data/data.jsx';

const App = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('./assets/img3.jpg');

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % backgroundImages.length; 
      setBackgroundImage(backgroundImages[index]);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [backgroundImages]);
 

  const handleFetchData = async () => {
    if (!latitude || !longitude || !startDate || !endDate) {
      setError('All fields are required.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const data = await fetchWeatherData(latitude, longitude, startDate, endDate);
      setWeatherData(data);
    } catch (err) {
      setError('Failed to fetch data. Please check your inputs.');
    } finally {
      setLoading(false);
    }
  };

 
  return (
    <div className="app-container" style={{ backgroundImage: `url(${backgroundImage})`,}}>
      <div className="content-container">
        <h1 className="header">Historical Weather Dashboard</h1>

        <div className="input-container">
          <LocationInput
            latitude={latitude}
            setLatitude={setLatitude}
            longitude={longitude}
            setLongitude={setLongitude}
          />
          <DatePicker
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        </div>

        <button className="fetch-button" onClick={handleFetchData}>
          Fetch Weather Data
        </button>

        {error && <div className="error-container"><p className="error-text">{error}</p></div>}
        {loading && <Loader />}

        {weatherData && (
          <div className="weather-data-container">
            <WeatherGraph data={weatherData} />
            <WeatherTable data={weatherData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
