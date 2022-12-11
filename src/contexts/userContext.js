import React, { createContext, useState, useEffect } from 'react';
import { indexAccounts } from 'api';

const UserContext = createContext(false);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accounts, setAccounts] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const response = await indexAccounts();
      setAccounts(response);
    };
    getUser();
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, accounts }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
