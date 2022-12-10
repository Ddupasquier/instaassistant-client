import React, { createContext, useState } from 'react';

const UserContext = createContext(false);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
