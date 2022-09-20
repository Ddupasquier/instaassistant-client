import React, { useState, useEffect } from 'react';
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

function FollowersChart({ snapshots }) {
  const [snaps, setSnaps] = useState([]);

  useEffect(() => {
    if (snapshots) {
      setSnaps(snapshots);
    }
  }, [snapshots]);

  const [followerData, setFollowerData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  const getDaysThisMonth = () => {
    const days = [];
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(`${month + 1}/${i}`);
    }
    return days;
  };

  useEffect(() => {
    const followers = () => {
      if (snaps) return snaps.map((snapshot) => snapshot.followers);
    };

    const following = () => {
      if (snaps) return snaps.map((snapshot) => snapshot.following);
    };

    setFollowerData({
      labels: getDaysThisMonth(),
      datasets: [
        {
          label: 'Following',
          data: following(),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          tension: 0.3,
        },
        {
          label: 'Followers',
          data: followers(),
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          fill: 'origin',
          tension: 0.3,
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: '$font',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '$font',
          },
        },
        y: {
          ticks: {
            color: '$font',
          },
        },
      },
    });
  }, [snaps]);

  return <Line options={chartOptions} data={followerData} />;
}

export default FollowersChart;
