//* User Routes

const local = false;
const baseUrl = local
  ? 'http://localhost:3000'
  : 'https://instaassistant-api.herokuapp.com';

export const CreateUserPath = baseUrl + '/users';
export const UserLoginPath = baseUrl + '/login';
export const UserViewPath = baseUrl + '/users/';

//* START ACCOUNT
export const CreateAccountPath = [baseUrl + '/users/', '/accounts'];

export const AccountPatchPath = baseUrl + '/accounts/';

export const AccountShowPath = baseUrl + '/accounts/';

export const BotIndexPath = baseUrl + '/user_accounts';

export const BotAccountPath = baseUrl + '/accounts/'; // Delete bot based on bot_id

export const unstickAccountPath = baseUrl + '/unstuck/';

export const editProfilePath = baseUrl + '/edit_profile';

export const changePasswordPath = baseUrl + '/change_password';

export const accountsManagedPath = baseUrl + '/managed_accounts';

//* START Task for bot to complete
export const AccountTaskPath = baseUrl + '/account_tasks';
export const TaskPath = baseUrl + '/tasks';

//* SNAPSHOT ENDPOINTS
export const snapshotPath = baseUrl + '/snapshots';

//* START STATIC
export const InstagramTaskTypes = baseUrl + '/task_type';
export const faqPath = baseUrl + '/faq';

//* Payment/Checkout

export const CheckoutEndpoint = baseUrl + '/create-checkout-session';

// * PASSWORD PATHS
export const GenerateResetTokenPath = baseUrl + '/gen_reset_password';
export const CheckKeyValidPath = baseUrl + '/users/reset_password_check_key';
export const ResetPasswordPath = baseUrl + '/users/reset_password';

// * FEEBACK PATHS
export const feedbackPath = baseUrl + '/feedback';
