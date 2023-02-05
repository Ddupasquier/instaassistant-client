import {
  InstagramTaskTypes,
  UserViewPath,
  UserLoginPath,
  CreateUserPath,
  BotAccountPath,
  faqPath,
  CreateAccountPath,
  IndexAccountsPath,
  IndexCollabPath,
  AccountPatchPath,
  AccountShowPath,
  snapshotPath,
  TaskPath,
  AccountTaskPath,
  CheckoutEndpoint,
  unstickAccountPath,
  GenerateResetTokenPath,
  editProfilePath,
  changePasswordPath,
  accountsManagedPath,
  feedbackPath,
  CheckKeyValidPath,
  ResetPasswordPath,
  collabPath,
} from './endpoints';

// ----------- Start User

export const CreateUserPost = async (userInfo) => {
  const response = await fetch(CreateUserPath, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userInfo),
  });
  if (response.ok) {
    return await response.json();
  } else {
    alert('Something went wrong');
    Logout();
  }
};

export const loginFetch = async (userInfo, setUser) => {
  const resp = await fetch(UserLoginPath, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(userInfo),
  });
  const resp_1 = await resp.json();
  if (resp_1.error) {
    alert(resp_1.error, 'The email or password you provided is incorrect!');
    throw new Error(resp_1.error);
  } else {
    localStorage.setItem('user', JSON.stringify(resp_1.user));
    localStorage.setItem('token', resp_1.jwt);
    localStorage.setItem('email', JSON.stringify(resp_1.email));
    setUser(resp_1);
    setTimeout(() => {
      window.location.replace('/');
    }, 1000);
  }
};

export const GetUserInfo = async () => {
  const response = await fetch(UserViewPath + localStorage.getItem('user'), {
    method: 'GET',
    headers: genericHeaders,
  });
  const resp = await response.json();
  return checkAuth(resp);
};

export const EditProfilePatch = async (newData) => {
  const response = await fetch(editProfilePath, {
    method: 'PATCH',
    headers: genericHeaders,
    body: JSON.stringify(newData),
  });
  const resp = await response.json();
  return checkAuth(resp);
};

export const ChangePasswordPatch = async (newData) => {
  const response = await fetch(changePasswordPath, {
    method: 'PATCH',
    headers: genericHeaders,
    body: JSON.stringify(newData),
  });
  const resp = await response.json();
  return checkAuth(resp);
};

export const GetAccountsManaged = async () => {
  const response = await fetch(accountsManagedPath, {
    method: 'GET',
    headers: genericHeaders,
  });
  const resp = await response.json();
  return checkAuth(resp);
};

// END USER

// -------------- START ACCOUNTS

export const CreateAccount = async (formData) => {
  const response = await fetch(
    CreateAccountPath[0] + localStorage.getItem('user') + CreateAccountPath[1],
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify(formData),
    }
  );
  const resp = await response.json();
  return checkAuth(resp);
};

export const PatchAccount = async (formData, account_id) => {
  const response = await fetch(AccountPatchPath + account_id, {
    method: 'PATCH',
    headers: genericHeaders,
    body: JSON.stringify(formData),
  });
  const resp = await response.json();
  return checkAuth(resp);
};

export const indexAccounts = async () => {
  const response = await fetch(IndexAccountsPath, {
    method: 'GET',
    headers: genericHeaders,
  });
  const resp = await response.json();
  return checkAuth(resp);
};

export const indexCollab = async () => {
  const response = await fetch(IndexCollabPath, {
    method: 'GET',
    headers: genericHeaders,
  });
  const resp = await response.json();
  return checkAuth(resp);
};

export const ShowAccount = async (id) => {
  const response = await fetch(AccountShowPath + id, {
    method: 'GET',
    headers: genericHeaders,
  });
  const resp = await response.json();
  return checkAuth(resp);
};

export const DeleteAccount = async (id) => {
  const response = await fetch(BotAccountPath + id, {
    method: 'DELETE',
    headers: genericHeaders,
  });
  const resp = await response.json();
  return checkAuth(resp);
};

export const unstickAccount = async (account_id) => {
  const response = await fetch(unstickAccountPath + account_id, {
    method: 'GET',
    headers: genericHeaders,
  });
  const resp = await response.json();
  return checkAuth(resp);
};

// END ACCOUNTS

// ---------------------- START TASKS

export const PostTask = async (formData) => {
  const response = await fetch(TaskPath, {
    method: 'POST',
    headers: genericHeaders,
    body: JSON.stringify(formData),
  });
  const resp = await response.json();
  return checkAuth(resp);
};

export const GetTasks = async (account_id) => {
  const response = await fetch(AccountTaskPath + '/' + account_id, {
    method: 'GET',
    headers: genericHeaders,
  });
  const resp = await response.json();
  return checkAuth(resp);
};

export const GetTask = async (task_id) => {
  const response = await fetch(TaskPath + '/' + task_id, {
    method: 'GET',
    headers: genericHeaders,
  });
  const resp = await response.json();
  return checkAuth(resp);
};

// END TASKS

// ---------- START SNAPSHOTS

export const getSnapshots = async (account_id) => {
  const response = await fetch(snapshotPath + '/' + account_id, {
    method: 'GET',
    headers: genericHeaders,
  });
  const resp = await response.json();
  return checkAuth(resp);
};

// END SNAPSHOTS

// --------- Static APIs

export const GetFAQs = async () => {
  const response = await fetch(faqPath);
  return await response.json();
};

export const FetchInstagramTaskTypes = async () => {
  const response = await fetch(InstagramTaskTypes);
  return await response.json();
};

// END STATIC

//* START PAYMENT/CHECKOUT

export const CreateCheckoutSession = async (formData) => {
  const response = await fetch(CheckoutEndpoint, {
    method: 'POST',
    headers: genericHeaders,
    body: JSON.stringify(formData),
  });
  return await response.json();
};

export const GenerateResetToken = async (formData) => {
  const response = await fetch(GenerateResetTokenPath, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(formData),
  });
  const resp_1 = await response.json();

  if (resp_1.error) {
    alert(resp_1.error);
  } else if (resp_1.success) {
    return resp_1;
  }
};

export const ResetPassword = async (formData, key) => {
  const response = await fetch(ResetPasswordPath, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ ...formData, key }),
  });
  const resp_1 = await response.json();

  if (resp_1.error) {
    alert(resp_1.error);
  } else if (resp_1.success) {
    localStorage.setItem('user', JSON.stringify(resp_1.user));
    localStorage.setItem('token', resp_1.jwt);
    localStorage.setItem('email', JSON.stringify(resp_1.email));
    window.location.replace('/');
  }
};

export const CheckKeyValid = async (key) => {
  const response = await fetch(CheckKeyValidPath, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ key }),
  });
  const resp_1 = await response.json();

  if (resp_1.error) {
    throw new Error(resp_1.error);
  } else if (resp_1.success) {
    return resp_1;
  }
};

// SEND FEEDBACK
export const SendFeedback = async (formData) => {
  const response = await fetch(feedbackPath, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(formData),
  });
  const resp_1 = await response.json();

  if (resp_1.error) {
    alert(resp_1.error);
  } else if (resp_1.success) {
    return resp_1;
  }
};

// COLLABORATORS
export const GetCollaborators = async (account_id) => {
  const response = await fetch(collabPath + account_id, {
    method: 'GET',
    headers: genericHeaders,
  });
  // console.log(console.log(await response.text()));
  const resp = await response.json();
  return checkAuth(resp);
};

// UTILS
// * Check auth status (logout or continue)
const checkAuth = async (resp) => {
  if (resp.error === 'AUTHENTICATION ERROR') {
    Logout();
  } else if (resp.error) {
    alert(resp.error);
  } else {
    return resp;
  }
};

const genericHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: localStorage.getItem('token'),
};

export const Logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem('email');
  window.location.replace('/');
};
