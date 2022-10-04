import React from 'react';
import { Modal, Input, Button, Text, Grid } from '@nextui-org/react';
import { ChangePasswordPatch } from 'api';

function ChangePassword({
  changePasswordVisible,
  closeChangePasswordHandler,
  userInfo,
}) {
  /** TODO hook up change password */
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const payload = {
      current_password: data.current_password,
      new_password:
        data.new_password === data.confirm_password
          ? data.new_password
          : alert('Passwords do not match'),
    };
    ChangePasswordPatch(payload);
    // .then(closeChangePasswordHandler());
  };

  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={changePasswordVisible}
      onClose={closeChangePasswordHandler}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          <Text b size={18}>
            Change Password
          </Text>
        </Text>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <Grid.Container>
            <Grid xs={12} md={12}>
              <Input
                name="current_password"
                label="Current Password"
                underlined
                css={{ width: '100%' }}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Input
                name="new_password"
                label="New Password"
                underlined
                css={{ width: '95%' }}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Input
                name="confirm_password"
                label="Confirm Password"
                underlined
                css={{ width: '100%' }}
              />
            </Grid>
          </Grid.Container>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" color="secondary" rounded>
            Change
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default ChangePassword;
