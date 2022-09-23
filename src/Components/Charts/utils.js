export const getDaysThisMonth = () => {
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

export const getRandomUtilization = () => {
  const utilization = [];
  for (let i = 0; i < 30; i++) {
    utilization.push(Math.floor(Math.random() * 100));
  }
  return utilization;
};
