import React, { useState, useEffect } from 'react';
import { Bar, Line, PolarArea, Doughnut } from 'react-chartjs-2';
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

  let unused = 1000 - follows - likes - comments - messages;

  useEffect(() => {
    setFollowerData({
      labels: ['Follows', 'Likes', 'Comments', 'Messages', 'Unused'],
      datasets: [
        {
          label: 'Utilization',
          data: [follows, likes, comments, messages, unused],
          clip: false,
          backgroundColor: [
            'rgb(45, 0, 255, .7)',
            'rgb(85, 0, 255, .7)',
            'rgb(125, 0, 255, .7)',
            'rgb(165, 0, 255, .7)',
            'rgb(165, 0, 255, .0)',
          ],
          borderColor: [
            'rgb(45, 0, 255, .7)',
            'rgb(85, 0, 255, .7)',
            'rgb(125, 0, 255, .7)',
            'rgb(165, 0, 255, .7)',
            'rgb(150, 150, 150, .5)',
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
          align: 'justify',
          position: 'top',
          labels: {
            color: '$font',
            boxWidth: 20,
          },
        },
      },
      scales: {
        y: {
          display: false,
          ticks: {
            color: '$font',
          },
        },
      },
    });
  }, [comments, follows, likes, messages, unused]);

  const smallScreenCheck = window.innerWidth <= 960 ? '200' : '420';

  return (
    <Doughnut options={chartOptions} data={followerData} height="420" />
  );
}

export default LimitsBars;
