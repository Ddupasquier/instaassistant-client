import React, { useState, useEffect } from 'react';
import { getDaysThisMonth, getRandomUtilization } from './utils';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function UtilizationChart({ data }) {
  const [followerData, setFollowerData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  

  useEffect(() => {
    setFollowerData({
      labels: getDaysThisMonth(),
      datasets: [
        {
          label: 'Utilization',
          data: getRandomUtilization(),
          backgroundColor: 'rgb(165, 0, 255, .4)',
          borderColor: 'rgb(165, 0, 255, .4)',
          borderWidth: 1,
          fill: 'origin',
          tension: 0.4,
        },
      ],
    });
    setChartOptions({
      title: 'Utilization',
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '$font',
          },
        },
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          
          ticks: {
            color: '$font',
          },
        },
      },
    });
  }, []);

  return <Line options={chartOptions} data={followerData} height="50" />;
}

export default UtilizationChart;
