import React from 'react';
import { Modal, Input, Button, Text } from '@nextui-org/react';

function EditProfile({ editProfileVisible, closeEditProfileHandler }) {
  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={editProfileVisible}
      onClose={closeEditProfileHandler}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          <Text b size={18}>
            Edit Company Information
          </Text>
        </Text>
      </Modal.Header>
      <form>
        <Modal.Body>
          <Input label="Company Name" underlined css={{ width: '100%' }} />
          <Input label="Company Email" underlined css={{ width: '100%' }} />
          <Input label="Company Phone" underlined css={{ width: '100%' }} />
          <Input label="Company Address" underlined css={{ width: '100%' }} />
          <Input label="Company Website" underlined css={{ width: '100%' }} />
          <Input label="Company Logo" underlined css={{ width: '100%' }} />
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">Add Account</Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default EditProfile;
