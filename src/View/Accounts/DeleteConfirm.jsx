import React, { useState } from 'react';
import { DeleteAccount } from 'api';
import { Modal, Input, Button, Text } from '@nextui-org/react';

function DeleteConfirm({
  deleteConfirmVisible,
  closeDeleteConfirmHandler,
  userInfo,
}) {
  const [usernameConfirm, setUsernameConfirm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usernameConfirm === userInfo.username) {
      DeleteAccount(userInfo.id).then((data) => {
        data.success ? closeDeleteConfirmHandler() : alert(data.error);
        console.log(data, data.error)
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
          <Text size={18}>Type the account username to confirm</Text>
        </Text>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <Input
            labelLeft="@"
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
}

export default DeleteConfirm;
