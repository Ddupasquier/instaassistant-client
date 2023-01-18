import React from 'react';

import { FiInstagram, FiTwitter } from 'react-icons/fi';
import { IoLogoYoutube } from 'react-icons/io';
import { IoLogoTiktok } from 'react-icons/io5';

export const platformIcon = (platform) => {
  switch (platform.toLowerCase()) {
    case 'instagram':
      return <FiInstagram size="20" />;
    case 'youtube':
      return <IoLogoYoutube size="20" />;
    case 'tiktok':
      return <IoLogoTiktok size="20" />;
    case 'twitter':
      return <FiTwitter size="20" />;
    default:
      return <FiInstagram size="20" />;
  }
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
/**
 * @function capitalizeFirstLetter
 * @description Capitalizes the first letter of a string.
 * @param {string} string - The string to capitalize.
 * @returns {string} - The capitalized string.
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
 * @function truncateString
 * @description Truncates a string to 12 characters.
 * @param {string} string - The string to truncate.
 * @returns {string} - The truncated string.
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
 * @function getDaysLast30Days
 * @description returns an array of the last 30 days
 * @returns {array} - An array of the last 30 days.
 * @example
 * ['1/1', '1/2', '1/3', '1/4', '1/5', '1/6', '1/7', '1/8', '1/9'...]
 */

export const getRandomUtilization = () => {
  const utilization = [];
  for (let i = 0; i < 30; i++) {
    utilization.push(Math.floor(Math.random() * 100));
  }
  return utilization;
};
/**
 * @function getRandomUtilization
 * @description returns an array of random numbers
 * @returns {number} - An array of random numbers.
 * @example
 * getRandomUtilization() // returns [23, 45, 67, 89, 12, 34, 56]
 * @todo
 * - add a parameter to specify the length of the array
 */

export const today = new Date().toISOString().slice(0, 10);
/**
 * @variable today
 * @description returns the current date in the format YYYY-MM-DD
 * @returns {string} - The current date in the format YYYY-MM-DD.
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
 * @variable thisTime
 * @description returns the current time in hh:mm format
 * @returns {string} - The current time in hh:mm format.
 * @example '12:00'
 * @example '23:59'
 */

export const convertToUserTime = (time, showMinutes) => {
  const date = new Date(time);
  const options = {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
    hour12: true,
    hour: showMinutes ? 'numeric' : undefined,
    minute: showMinutes ? 'numeric' : undefined,
  };
  return date.toLocaleString('en-US', options);
};
/**
 * @function convertToUserTime
 * @description takes in time/date in this format 'dd-mm-yyyy;hh:mm' and convert it to the user's local time in 'mm/dd/dd hh:mm' 12hour format
 * @param {string} time - The time to convert.
 * @returns {string} - The converted time.
 * @example
 * convertToUserTime('2020-09-02T12:00:00.000Z') // returns '9/2/2020, 8:00:00 AM'
 * @see https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd
 */

export const formatPhoneNumber = (phoneNumberString) => {
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return null;
};
/**
 * @function formatPhoneNumber
 * @description takes in a string phone number and formats it to (xxx) xxx-xxxx
 * @param {string} phoneNumberString
 * @returns {string} formatted phone number
 * @example
 * formatPhoneNumber('1234567890') // returns '(123) 456-7890'
 * formatPhoneNumber('123456789') // returns null
 */

export function filterAccounts(acctArr, searchTerm) {
  const term = searchTerm.toLowerCase();
  return acctArr.filter((account) => {
    return (
      account.username.toLowerCase().includes(term) ||
      account.tags.toLowerCase().includes(term)
    );
  });
}
/**
 * @function filterAccounts
 * @description filters accounts by username or tags
 * @param {array} accounts - array of accounts
 * @param {string} searchTerm - term to filter by
 * @returns {array} filtered accounts
 */

export function returnAccounts(acctArr, searchTerm) {
  const accounts =
    searchTerm && searchTerm.length > 0
      ? filterAccounts(acctArr, searchTerm)
      : acctArr;
  return accounts.sort((a, b) => {
    return a.username.localeCompare(b.username);
  });
}
/**
 * @function returnAccounts
 * @description returns accounts sorted by username
 * @param {array} accounts
 * @param {string} searchTerm
 * @returns {array} accounts sorted by username or filtered by searchTerm + sorted by username
 **/

export const sortData = (data, sortBy, sortDirection) => {
  const sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return sortDirection === 'asc' ? -1 : 1;
    }
    if (a[sortBy] > b[sortBy]) {
      return sortDirection === 'asc' ? 1 : -1;
    }
    return 0;
  });
  return sortedData;
};
/**
 * @function sortData
 * @description sorts data by a given column
 * @param {array} data - array of data
 * @param {string} sortBy - column to sort by
 * @param {string} sortDirection - direction to sort by
 * @returns {array} sorted data
 * @example
 * sortData(data, 'username', 'asc') // returns data sorted by username in ascending order
 * sortData(data, 'username', 'desc') // returns data sorted by username in descending order
 * sortData(data, 'date', 'asc') // returns data sorted by date in ascending order
 **/

export const isThisALink = (str) => {
  let isLink;
  if (str && str.includes('http')) {
    isLink = true;
  } else isLink = false;
  return isLink;
};
