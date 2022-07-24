/* eslint-disable quotes */
/* eslint-disable arrow-body-style */
import { InstagramTaskTypes } from "./endpoints";

// get playlistList
export const FetchInstagramTaskTypes = () => {
  return fetch(InstagramTaskTypes).then((response) => response.json());
};

export const FetchInstagramTaskTypes1 = () => {
  return fetch(InstagramTaskTypes).then((response) => response.json());
};
