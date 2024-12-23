import React from "react";
import { Line } from "react-chartjs-2";
import "../WeatherGraph/WeatherGraph.css"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import './WeatherGraph.css';

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WeatherGraph = ({ data }) => {
  const chartData = {
    labels: data.dates,
    datasets: [
      {
        label: "Max Temperature (°C)",
        data: data.maxTemps,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
      {
        label: "Min Temperature (°C)",
        data: data.minTemps,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Weather Trends",
      },
    },
  };

  return <div className="weather-graph-container"><Line data={chartData} options={options} /></div>;
};

export default WeatherGraph;
