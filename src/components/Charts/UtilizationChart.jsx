import React, { useState, useEffect, useMemo } from 'react';
import { getRandomUtilization } from 'utils';
import { Line } from 'react-chartjs-2';
import { useTheme } from '@nextui-org/react';
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

const legendMargin = {
  id: 'increase-legend-spacing',
  beforeInit(chart) {
    // Get reference to the original fit function
    const originalFit = chart.legend.fit;

    // Override the fit function
    chart.legend.fit = function fit() {
      // Call original function and bind scope in order to use `this` correctly inside it
      originalFit.bind(chart.legend)();
      // Change the height as suggested in another answers
      this.height += 20;
    };
  },
};

function UtilizationChart({ data }) {
  const { theme } = useTheme();
  const [followerData, setFollowerData] = useState({
    datasets: [],
  });

  const randData = useMemo(() => {
    return getRandomUtilization();
  }, []);

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setFollowerData({
      labels: [...Array(31).keys()],
      datasets: [
        {
          label: 'Utilization',
          data: randData,
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
            color: theme.colors.font.value,
          },
        },
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          ticks: {
            color: theme.colors.font.value,
          },
        },
      },
    });
  }, [randData, theme.colors.font.value]);

  return (
    <Line
      options={chartOptions}
      data={followerData}
      height="50"
      plugins={[legendMargin]}
    />
  );
}

export default UtilizationChart;
