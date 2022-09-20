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

function LimitsRadial({ data: { follows, likes, comments, messages } }) {
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
            'rgb(255, 0, 150, .3)',
            'rgb(0, 150, 150, .3)',
            'rgb(0, 90, 150, .3)',
            'rgb(100, 150, 0, .3)',
          ],
          borderColor: [
            'rgb(150, 0, 0, .3)',
            'rgb(0, 150, 0, .3)',
            'rgb(0, 0, 150, .3)',
            'rgb(150, 150, 0, .3)',
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
          position: 'bottom',
          labels: {
            color: '$font',
          },
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

  return (
    <Bar
      options={chartOptions}
      data={followerData}
    />
    // <PolarArea
    //   options={chartOptions}
    //   data={followerData}
    // />
  );
}

export default LimitsRadial;
