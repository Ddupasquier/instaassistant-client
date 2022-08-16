//* User Routes
export const CreateUserPath = "https://instaassistant-api.herokuapp.com/users";
export const UserLoginPath = "https://instaassistant-api.herokuapp.com/login";
export const UserViewPath = "https://instaassistant-api.herokuapp.com/users/";

//* START ACCOUNT
export const BotCreatePath = [
  "https://instaassistant-api.herokuapp.com/users/",
  "/accounts",
];

export const AccountPatchPath =
  "https://instaassistant-api.herokuapp.com/accounts/";

export const AccountShowPath =
  "https://instaassistant-api.herokuapp.comaccounts/";

export const BotIndexPath = "https://instaassistant-api.herokuapp.com/accounts";
export const BotDeletePAth =
  "https://instaassistant-api.herokuapp.com/accounts/"; // Delete bot based on bot_id

//* START Task for bot to complete
export const TaskCreatePath = "https://instaassistant-api.herokuapp.com/tasks";
export const TaskDeletePath = "https://instaassistant-api.herokuapp.com/tasks/";

//* START STATIC
export const InstagramTaskTypes =
  "https://instaassistant-api.herokuapp.com/task_type";
export const faqPath = "https://instaassistant-api.herokuapp.com/faq";
