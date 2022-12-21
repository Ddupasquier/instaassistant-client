import React, { createContext, useState, useEffect } from 'react';
import { indexAccounts, indexCollab, GetUserInfo } from 'api';

const UserContext = createContext(false);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [collabAccounts, setCollabAccounts] = useState(null);
  const [allAccounts, setAllAccounts] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('email')) {
      const getUser = async () => {
        const [userInfo, accounts, collabAccounts] = await Promise.all([
          GetUserInfo(),
          indexAccounts(),
          indexCollab(),
        ]);
        setUserInfo(userInfo);
        setAccounts(accounts);
        setCollabAccounts(collabAccounts);
      };
      getUser();
    }
  }, [user]);

  useEffect(() => {
    if (accounts && collabAccounts) {
      const allAccounts = accounts.concat(collabAccounts);
      setAllAccounts(allAccounts);
    }
  }, [accounts, collabAccounts]);

  return (
    <UserContext.Provider
      value={{ user, setUser, accounts, collabAccounts, userInfo, allAccounts }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
