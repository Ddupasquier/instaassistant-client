/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable quotes */
/* eslint-disable arrow-body-style */

import {
  InstagramTaskTypes,
  UserViewPath,
  UserLoginPath,
  CreateAccountPath,
  BotShowPath,
  BotDeletePAth,
} from "./endpoints";

// get playlistList
export const FetchInstagramTaskTypes = () => {
  return fetch(InstagramTaskTypes).then((response) => response.json());
};

export const loginFetch = () => {
  return fetch(UserLoginPath).then((response) => response.json());
};

export const GetUserInfo = () => {
  return fetch(UserViewPath).then((response) => response.json());
};

export const CreateUserPost = () => {
  return fetch(CreateAccountPath).then((response) => response.json());
};

export const GetBotInfo = () => {
  return fetch(BotShowPath).then((response) => response.json());
};

export const CreateBot = (arg) => {
  return fetch(BotShowPath[0] + arg + BotShowPath[1]).then((response) =>
    response.json()
  );
};

export const DeleteBot = () => {
  return fetch(BotDeletePAth).then((response) => response.json());
};
