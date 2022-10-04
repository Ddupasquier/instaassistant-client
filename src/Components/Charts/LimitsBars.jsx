import React, { useState, useEffect } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { useTheme } from '@nextui-org/react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

function LimitsBars({ data: { follows, likes, comments, messages }, toggle }) {
  const { theme } = useTheme();
  const [followerData, setFollowerData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  const unused = 1000 - follows - likes - comments - messages;

  useEffect(() => {
    const checkToggleLabel = () => {
      if (!toggle) {
        return ['Follows', 'Likes', 'Comments', 'Messages', 'Unused'];
      } else {
        return ['Follows', 'Likes', 'Comments', 'Messages'];
      }
    };

    const checkToggleData = () => {
      if (!toggle) {
        return [follows, likes, comments, messages, unused];
      } else {
        return [follows, likes, comments, messages];
      }
    };

    const checkToggleYAxis = () => {
      if (!toggle) {
        return {
          display: false,
        };
      } else {
        return {
          display: true,
          ticks: {
            font: theme.colors.font.value,
            beginAtZero: true,
            max: 1000,
            stepSize: 100,
          },
        };
      }
    };

    const checkToggleLegend = () => {
      if (!toggle) {
        return {
          display: true,
          position: 'top',
          labels: {
            padding: 20,
            color: theme.colors.font.value,
            boxWidth: 10,
          },
        };
      } else {
        return {
          display: false,
        };
      }
    };

    setFollowerData({
      labels: checkToggleLabel(),
      datasets: [
        {
          label: 'Interactions',
          data: checkToggleData(),
          backgroundColor: [
            'rgb(45, 0, 255, .7)',
            'rgb(85, 0, 255, .7)',
            'rgb(125, 0, 255, .7)',
            'rgb(165, 0, 255, .7)',
            'rgb(165, 0, 255, .0)',
          ],
          borderColor: theme.colors.tableLines.value,
          borderWidth: 1,
          fill: 'origin',
        },
      ],
    });
    setChartOptions({
      title: 'Interactions',
      responsive: true,
      plugins: {
        legend: checkToggleLegend(),
      },
      scales: {
        y: checkToggleYAxis(),
      },
    });
  }, [comments, follows, likes, messages, theme.colors.font.value, theme.colors.tableLines.value, toggle, unused]);

  const smallScreenCheck = window.innerWidth <= 960 ? '200' : '320';

  return (
    <>
      {!toggle ? (
        <Doughnut options={chartOptions} data={followerData} />
      ) : (
        <Bar
          options={chartOptions}
          data={followerData}
          height={smallScreenCheck}
        />
      )}
    </>
  );
}

export default LimitsBars;
