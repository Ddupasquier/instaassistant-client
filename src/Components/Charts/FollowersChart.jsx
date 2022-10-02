import React, { useState, useEffect } from 'react';
import { getDaysLast30Days } from 'utils';
import { Line } from 'react-chartjs-2';
import { useTheme } from '@nextui-org/react';
import {
  Chart as ChartJS,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
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
  Title,
  Tooltip,
  Legend,
  Filler
);

function FollowersChart({ snapshots }) {
  const { theme } = useTheme();
  const [snaps, setSnaps] = useState([]);
  const [followerData, setFollowerData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    if (snapshots) {
      setSnaps(snapshots);
    }
  }, [snapshots]);

  useEffect(() => {
    const followers = () => {
      if (snaps) return snaps.map((snapshot) => snapshot.followers);
    };
    const following = () => {
      if (snaps) return snaps.map((snapshot) => snapshot.following);
    };
    setFollowerData({
      labels: getDaysLast30Days(),
      datasets: [
        {
          label: 'Following',
          data: following(),
          backgroundColor: 'rgb(165, 0, 255)',
          borderColor: 'rgb(165, 0, 255)',
          borderWidth: 1,
          tension: 0.3,
        },
        {
          label: 'Followers',
          data: followers(),
          backgroundColor: 'rgb(0, 213, 155, .4)',
          borderColor: 'rgb(0, 213, 155, .4)',
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
            color: theme.colors.font.value,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: theme.colors.font.value,
          },
        },
        y: {
          ticks: {
            color: theme.colors.font.value,
          },
        },
      },
    });
  }, [snaps, theme.colors.font.value]);

  return <Line options={chartOptions} data={followerData} height="110" />;
}

export default FollowersChart;
