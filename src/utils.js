export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
/**
 * @param {string} string
 * @returns {string}
 * @example
 * returns 'Hello World'
 * capitalizeFirstLetter('hello world')
 * @example
 * returns 'Hello World'
 */

export const truncateString = (string) => {
  if (string.length > 12) {
    return string.slice(0, 12) + '...';
  }
  return string;
};
/**
 * @param {string} string
 * @returns {string} string
 * @description truncate a string to 12 characters
 * @example
 * truncateString('helloworld') // returns 'hello...'
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
 * @returns {array} array
 * @description returns an array of the last 30 days
 * @example
 * getDaysLast30Days() // returns ['1/1', '1/2', '1/3', '1/4', '1/5', '1/6', '1/7', '1/8', '1/9', '1/10', '1/11', '1/12', '1/13', '1/14', '1/15', '1/16', '1/17', '1/18', '1/19', '1/20', '1/21', '1/22', '1/23', '1/24', '1/25', '1/26', '1/27', '1/28', '1/29', '1/30']
 */

export const getRandomUtilization = () => {
  const utilization = [];
  for (let i = 0; i < 30; i++) {
    utilization.push(Math.floor(Math.random() * 100));
  }
  return utilization;
};
/**
 * @returns {number} array of numbers
 * @description returns an array of random numbers
 * @example
 * getRandomUtilization() // returns [23, 45, 67, 89, 12, 34, 56]
 * @todo
 * - add a parameter to specify the length of the array
 */

export const today = new Date().toISOString().slice(0, 10);
/**
 * @returns {string} date
 * @description returns the current date in the format YYYY-MM-DD
 * @example
 * today // returns '2020-09-02'
 * @see https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd
 */

export const thisTime = new Date().toLocaleTimeString('en-US', {
  timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  hour12: false,
  hour: 'numeric',
  minute: 'numeric',
});
/**
 * @returns {string} - hh:mm
 * @description returns the current time in hh:mm format
 * @example '12:00'
 * @example '23:59'
 */

// take in time/date in this format 'dd-mm-yyyy;hh:mm' and convert it to the user's local time in 'mm/dd/dd hh:mm' 12hour format
export const convertToUserTime = (time) => {
  const date = new Date(time);
  const options = {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
  };
  return date.toLocaleString('en-US', options);
};

export const formatPhoneNumber = (phoneNumberString) => {
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return null;
};
/**
 * @param {string} phoneNumberString
 * @returns {string} formatted phone number
 * @description takes in a string phone number and formats it to (xxx) xxx-xxxx
 * @example
 * formatPhoneNumber('1234567890') // returns '(123) 456-7890'
 * formatPhoneNumber('123456789') // returns null
 */
