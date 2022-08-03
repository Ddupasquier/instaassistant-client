import {
  InstagramTaskTypes,
  UserViewPath,
  UserLoginPath,
  CreateAccountPath,
  BotShowPath,
  BotDeletePAth,
  faqPath,
} from "./endpoints";

// get playlistList
export const FetchInstagramTaskTypes = () => {
  return fetch(InstagramTaskTypes).then((response) => response.json());
};

export const loginFetch = (userInfo) => {
  return fetch("http://localhost:3000/login", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userInfo),
  }).then((response) => response.json());
};

export const GetUserInfo = () => {
  return fetch(UserViewPath).then((response) => response.json());
};

export const CreateUserPost = (userInfo) => {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userInfo),
  }).then((response) => response.json());
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

export const GetFAQs = () => {
  return fetch(faqPath).then((response) => response.json());
};
