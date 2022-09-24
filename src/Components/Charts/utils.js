export const getDaysLast30Days = () => {
  const days = [];
  const date = new Date();
  for (let i = 0; i < 30; i++) {
    const day = new Date(date.getTime() - i * 24 * 60 * 60 * 1000);
    days.push(`${day.getMonth() + 1}/${day.getDate()}`);
  }
  return days.reverse();
};

export const getRandomUtilization = () => {
  const utilization = [];
  for (let i = 0; i < 30; i++) {
    utilization.push(Math.floor(Math.random() * 100));
  }
  return utilization;
};
