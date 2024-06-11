import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // Hide legend
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Remove x-axis grid lines
      },
    },
    y: {
      grid: {
        display: false, // Remove y-axis grid lines
      },
      ticks: {
        display: false, // Remove y-axis labels
      },
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'Jun'];

const dataset1Data = [820, 930, 620, 820, 930, 620];
const dataset2Data = [520, 720, 610, 820, 930, 620];

const data = {
  labels,
  datasets: [
    {
      data: dataset1Data,
      backgroundColor: '#DCC0D8',
      barThickness: '14', // Make bars thinner
      borderRadius: 10, // Add border radius to bars
      barPercentage: 0, // Adjust bar percentage to add space between bars
    },
    {
      data: dataset2Data,
      backgroundColor: '#e84d88',
      barThickness: '14', // Make bars thinner
      borderRadius: 10, // Add border radius to bars
      barPercentage: 0.5, // Adjust bar percentage to add space between bars
    },
  ],
};

function AnanlyticChart() {
  return <Bar options={options} data={data} />;
}

export default AnanlyticChart;
