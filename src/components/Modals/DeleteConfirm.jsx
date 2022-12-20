import React, { useState } from 'react';
import { DeleteAccount } from 'api';
import { Modal, Input, Button, Text } from '@nextui-org/react';

const DeleteConfirm = ({
  deleteConfirmVisible,
  closeDeleteConfirmHandler,
  userInfo,
}) => {
  const [usernameConfirm, setUsernameConfirm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usernameConfirm.toLowerCase() === userInfo.username.toLowerCase()) {
      DeleteAccount(userInfo.id).then((data) => {
        closeDeleteConfirmHandler();
        if (data.success) {
          window.location.replace('/accounts');
        } else if (data.error) {
          alert(data.error);
          throw new Error(data.error);
        }
      });
    }
  };

  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={deleteConfirmVisible}
      onClose={closeDeleteConfirmHandler}
    >
      <Modal.Header>
        <Text id="modal-title" b transform="uppercase" size={18}>
          Are you sure you want to delete this account?
          <Text size={18}>
            Type the account username to confirm
            <br />
            {userInfo && (
              <span style={{ color: 'rgba(243, 18, 96)', fontWeight: '800' }}>
                {userInfo.username}
              </span>
            )}
          </Text>
        </Text>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <Input
            labelLeft="@"
            aria-label="confirm-delete-username"
            underlined
            css={{ width: '100%' }}
            onChange={(e) => setUsernameConfirm(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" color="error" rounded>
            Delete
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default DeleteConfirm;
