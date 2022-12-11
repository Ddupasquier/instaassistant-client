import React, { createContext, useState, useEffect } from 'react';
import { indexAccounts, GetUserInfo } from 'api';

const UserContext = createContext(false);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [accounts, setAccounts] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const [userInfo, accounts] = await Promise.all([
        GetUserInfo(),
        indexAccounts(),
      ]);
      setUserInfo(userInfo);
      setAccounts(accounts);
    };
    getUser();
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, accounts, userInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
