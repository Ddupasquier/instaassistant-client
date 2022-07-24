//* task lists for form
// instagram task types for task form
export const InstagramTaskTypes =
  "https://instaassistant-api.herokuapp.com/task_type";

//* User Routes
// Login get path
export const UserLoginPath = "https://instaassistant-api.herokuapp.com/login";

// view user information path
export const UserViewPath = "https://instaassistant-api.herokuapp.com/users/";

// user creation path
export const CreateAccountPath =
  "https://instaassistant-api.herokuapp.com/users";

//* Bot Routes
// Bot information path
//! path might show password currently we want to fix that on backend
export const BotShowPath = "http://localhost:3000/bots/";

/*
Bot index: think this does all bots regardless
of user change to just index bot associated to currently logged in user
*/
export const BotIndexPath = "http://localhost:3000/bots";

// Create bot path POST needs user id to create bot associated with that user
export const BotCreatePath = ["http://localhost:3000/users/", "/bots"];

// Delete bot based on bot_id
export const BotDeletePAth = "http://localhost:3000/bots/";

//* Task for bot to complete

export const TaskCreatePath = "https://instaassistant-api.herokuapp.com/tasks";
export const TaskDeletePath = "https://instaassistant-api.herokuapp.com/tasks/";
