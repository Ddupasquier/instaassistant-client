import React from 'react';
import { Modal, Input, Button, Text, Grid } from '@nextui-org/react';

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
      old_password: data.old_password || '',
      confirm_password: data.confirm_password || '',
    };
    console.log(payload);
    //     PostTask(payload);
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
                label="Current Password"
                underlined
                css={{ width: '100%' }}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Input label="New Password" underlined css={{ width: '95%' }} />
            </Grid>
            <Grid xs={12} md={6}>
              <Input
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
