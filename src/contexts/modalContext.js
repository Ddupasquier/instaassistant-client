import React, { createContext, useState } from 'react';

const TaskModalContext = createContext(false);

const TaskModalContextProvider = ({ children }) => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  const closeTaskHandler = () => {
    setIsTaskModalOpen(false);
  };

  const taskHandler = () => setIsTaskModalOpen(true);

  return (
    <TaskModalContext.Provider value={{ isTaskModalOpen, closeTaskHandler, taskHandler }}>
      {children}
    </TaskModalContext.Provider>
  );
};

export { TaskModalContextProvider, TaskModalContext };
