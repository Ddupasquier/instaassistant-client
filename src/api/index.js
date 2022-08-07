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
export const FetchInstagramTaskTypes = async () => {
  const response = await fetch(InstagramTaskTypes);
  return await response.json();
};

export const loginFetch = async (userInfo) => {
  const resp = await fetch(UserLoginPath, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userInfo),
  });
  const resp_1 = await resp.json();
  if (resp_1.error) {
    alert(resp_1.error);
  } else {
    localStorage.setItem("user", JSON.stringify(resp_1.user));
    localStorage.setItem("token", resp_1.jwt);
    window.location.replace("/");
  }
};

export const Logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.replace("/");
};

export const GetUserInfo = async () => {
  const response = await fetch(UserViewPath);
  return await response.json();
};

export const CreateUserPost = async (userInfo) => {
  const response = await fetch(CreateAccountPath, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userInfo),
  });
  return await response.json();
};

export const GetBotInfo = async () => {
  const response = await fetch(BotShowPath);
  return await response.json();
};

export const CreateBot = async (arg) => {
  const response = await fetch(BotShowPath[0] + arg + BotShowPath[1]);
  return await response.json();
};

export const DeleteBot = async () => {
  const response = await fetch(BotDeletePAth);
  return await response.json();
};

export const GetFAQs = async () => {
  const response = await fetch(faqPath);
  return await response.json();
};
