//* User Routes

const local = false;
const baseUrl = local
  ? "http://localhost:3000"
  : "https://instaassistant-api.herokuapp.com";

export const CreateUserPath = baseUrl + "/users";
export const UserLoginPath = baseUrl + "/login";
export const UserViewPath = baseUrl + "/users/";

//* START ACCOUNT
export const CreateAccountPath = [baseUrl + "/users/", "/accounts"];

export const AccountPatchPath = baseUrl + "/accounts/";

export const AccountShowPath = baseUrl + "/accounts/";

export const BotIndexPath = baseUrl + "/user_accounts";

export const BotAccountPath = baseUrl + "/accounts/"; // Delete bot based on bot_id

export const unstickAccount = baseUrl + "/unstuck/";

//* START Task for bot to complete
export const AccountTaskPath = baseUrl + "/account_tasks";
export const TaskPath = baseUrl + "/tasks";

//* SNAPSHOT ENDPOINTS
export const snapshotPath = baseUrl + "/snapshots";

//* START STATIC
export const InstagramTaskTypes = baseUrl + "/task_type";
export const faqPath = baseUrl + "/faq";

//* Payment/Checkout

export const CheckoutEndpoint = baseUrl + "/create-checkout-session";
