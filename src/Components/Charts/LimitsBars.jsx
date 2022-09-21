import React, { useState, useEffect } from 'react';
import { Bar, Line, PolarArea } from 'react-chartjs-2';
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
  RadialLinearScale,
  ArcElement,
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
  Filler,
  RadialLinearScale,
  ArcElement
);

function LimitsBars({ data: { follows, likes, comments, messages } }) {
  const [followerData, setFollowerData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setFollowerData({
      labels: ['Follows', 'Likes', 'Comments', 'Messages'],
      datasets: [
        {
          label: 'Utilization',
          data: [follows, likes, comments, messages],
          backgroundColor: [
            'rgb(45, 0, 255, .7)',
            'rgb(85, 0, 255, .7)',
            'rgb(125, 0, 255, .7)',
            'rgb(165, 0, 255, .7)',
          ],
          borderColor: [
            'rgb(45, 0, 255, .7)',
            'rgb(85, 0, 255, .7)',
            'rgb(125, 0, 255, .7)',
            'rgb(165, 0, 255, .7)',
          ],
          borderWidth: 1,
          fill: 'origin',
        },
      ],
    });
    setChartOptions({
      title: 'Utilization',
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          ticks: {
            color: '$font',
          },
        },
      },
    });
  }, [comments, follows, likes, messages]);

  const smallScreenCheck = window.innerWidth <= 960 ? '200' : '420';

  return (
    <Bar options={chartOptions} data={followerData} height={smallScreenCheck} />
    // <PolarArea
    //   options={chartOptions}
    //   data={followerData}
    // />
  );
}

export default LimitsBars;
