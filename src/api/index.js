import { InstagramTaskTypes } from "./endpoints";

// get playlistList
export const FetchInstagramTaskTypes = () => {
  return fetch(InstagramTaskTypes).then((response) => response.json());
};
