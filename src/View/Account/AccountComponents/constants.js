export const actions = [
  { value: '', label: 'Post - Coming Soon' },
  { value: 'Interact', label: 'Interact' },
  { value: 'Follow', label: 'Follow' },
  { value: 'Like', label: 'Like' },
  { value: 'Comment', label: 'Comment' },
  { value: 'Message', label: 'Message' },
  { value: '', label: 'Clean - Coming Soon' },
  { value: '', label: 'Black List - Coming Soon' },
  { value: '', label: 'White List - Coming Soon' },
];

export const listTargets = [
  { value: 'Account', label: 'Account' },
  { value: 'Post', label: 'Post' },
];

export const accountListTypes = [
  { value: 'Followers', label: 'Followers' },
  { value: 'Following', label: 'Following' },
  { value: 'Recent Posts', label: 'Recent Posts' },
];

export const postListTypes = [
  { value: 'Interactors', label: 'Interactors' },
  { value: 'Likers', label: 'Likers' },
  { value: 'Commenters', label: 'Commenters' },
];

// const todaysDate = new Date().toISOString().slice(0, 10);
// const dd = todaysDate.slice(8, 10);
// const mm = todaysDate.slice(5, 7);
// const yyyy = todaysDate.slice(0, 4);

// const location = () => {if (window.navigator.geolocation) {
//     window.navigator.geolocation.getCurrentPosition(function(position) {
//       console.log(position.coords.latitude, position.coords.longitude);
//     });
// }}

export const thisTime = new Date().toLocaleTimeString('en-US', {
  timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour12: false,
  hour: 'numeric',
});

export const timeFormatted = (time) => {
  const timeSplit = time.split(/[/,]/);
  let dd = '';
  let mm = '';
  let yyyy = '';
  let hh = '';

  if (timeSplit[0].length === 1) {
    dd = '0' + timeSplit[0];
  } else {
    dd = timeSplit[0];
  }
  if (timeSplit[1].length === 1) {
    mm = '0' + timeSplit[1];
  } else {
    mm = timeSplit[1];
  }
  if (timeSplit[2].length === 1) {
    yyyy = '0' + timeSplit[2];
  } else {
    yyyy = timeSplit[2];
  }
  if (timeSplit[3].length === 1) {
    hh = '0' + timeSplit[3];
  } else {
    hh = timeSplit[3];
  }

  return `${dd}-${mm}-${yyyy};${hh}:00`;
};

console.log('date/time formatted', timeFormatted(thisTime));
