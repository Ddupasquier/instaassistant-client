export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
/**
 *
 * @param {string} string
 * @returns {string} string
 * @descriptionthe first letter of a string to upperCase
 * @example
 * toCamelCase('helloworld') // returns 'Helloworld'
 */

export const truncateString = (string) => {
  if (string.length > 12) {
    return string.slice(0, 12) + '...';
  }
  return string;
};
/**
 *
 * @param {string} string
 * @returns {string} string
 * @descriptionthe truncates a string to a specified length
 * @example
 * truncate('helloworldzzzzzzz') // returns 'helloworldzz...'
 */

export const getDaysLast30Days = () => {
  const days = [];
  const date = new Date();
  for (let i = 0; i < 30; i++) {
    const day = new Date(date.getTime() - i * 24 * 60 * 60 * 1000);
    days.push(`${day.getMonth() + 1}/${day.getDate()}`);
  }
  return days.reverse();
};
/**
 *
 * @returns {string} array of strings
 * @description returns an array of dates as strings
 * @example
 * getArray('days') // returns ['9/2, '9/3', '9/4', '9/5', '9/6', '9/7', '9/8']
 */

export const getRandomUtilization = () => {
  const utilization = [];
  for (let i = 0; i < 30; i++) {
    utilization.push(Math.floor(Math.random() * 100));
  }
  return utilization;
};
/**
 *
 * @returns {integer} array of integers
 * @description returns an array of 30 randomized integers
 * @example
 * getArray('utilization') // returns [12, 25, 98, 54, 95, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58]
 */

export const today = new Date().toISOString().slice(0, 10);
/**
 *
 * @returns {string} - yyyy-mm-dd
 * @description returns the current date in yyyy-mm-dd format
 * @example '2022-09-23'
 */

export const thisTime = new Date().toLocaleTimeString('en-US', {
  timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  hour12: false,
  hour: 'numeric',
  minute: 'numeric',
});
/**
 *
 * @return {string} - date
 * @description returns the current time in hh:mm format (24 hour clock) current time zone
 * @example '16:52'
 */
