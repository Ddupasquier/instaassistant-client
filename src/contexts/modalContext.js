import React, { createContext, useState } from 'react';

const ModalContext = createContext(false);

const ModalContextProvider = ({ children }) => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const closeTaskHandler = () => {
    setIsTaskModalOpen(false);
  };

  const taskHandler = () => setIsTaskModalOpen(true);

  return (
    <ModalContext.Provider
      value={{ isTaskModalOpen, closeTaskHandler, taskHandler }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContextProvider, ModalContext };
