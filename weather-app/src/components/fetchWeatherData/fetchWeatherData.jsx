import axios from 'axios';

const fetchWeatherData = async (latitude, longitude, startDate, endDate) => {
  const response = await axios.get('https://api.open-meteo.com/v1/forecast', {
    params: {
      latitude,
      longitude,
      start_date: startDate,
      end_date: endDate,
      daily: ['temperature_2m_max', 'temperature_2m_min'],
      timezone: 'auto',
    },
  });

  const { daily } = response.data;
  return {
    dates: daily.time,
    maxTemps: daily.temperature_2m_max,
    minTemps: daily.temperature_2m_min,
  };
};

export default fetchWeatherData;
