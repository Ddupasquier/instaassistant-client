import React, { createContext, useState } from 'react';

const ModalContext = createContext(false);

const ModalContextProvider = ({ children }) => {
  // * NEW TASK MODAL
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const taskHandler = () => setIsTaskModalOpen(true);
  const closeTaskHandler = () => {
    setIsTaskModalOpen(false);
  };

  // * APPS MODAL
  const [userToApps, setUserToApps] = useState(null);
  const [isAppsModalOpen, setIsAppsModalOpen] = useState(false);
  const appsHandler = () => setIsAppsModalOpen(true);
  const closeAppsHandler = () => {
    setIsAppsModalOpen(false);
  };

  // * DELETE ACCOUNT MODAL
  const [userToDelete, setUserToDelete] = useState(null);
  const [deleteConfirmVisible, setDeleteConfirmVisible] = useState(false);
  const handleDeleteConfirmVisible = () => setDeleteConfirmVisible(true);
  const closeDeleteConfirmHandler = () => {
    setDeleteConfirmVisible(false);
  };

  // * NEW ACCOUNT MODAL
  const [newAccountVisible, setNewAccountVisible] = useState(false);
  const newAccountHandler = () => setNewAccountVisible(true);
  const closeNewAccountHandler = () => {
    setNewAccountVisible(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isTaskModalOpen,
        closeTaskHandler,
        taskHandler,
        isAppsModalOpen,
        closeAppsHandler,
        appsHandler,
        deleteConfirmVisible,
        handleDeleteConfirmVisible,
        closeDeleteConfirmHandler,
        userToDelete,
        setUserToDelete,
        newAccountVisible,
        newAccountHandler,
        closeNewAccountHandler,
        userToApps,
        setUserToApps,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContextProvider, ModalContext };
