import React from 'react';
import { Modal, Input, Button, Text, Grid, Card } from '@nextui-org/react';

function EditProfile({
  editProfileVisible,
  closeEditProfileHandler,
  userInfo,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  console.log(userInfo);

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
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <Grid.Container>
            <Grid xs={12} md={6}>
              <Input label="Company Name" underlined css={{ width: '90%' }} />
            </Grid>
            <Grid xs={12} md={6}>
              <Input label="Company Email" underlined css={{ width: '90%' }} />
            </Grid>
            <Grid xs={12} md={6}>
              <Input label="Company Phone" underlined css={{ width: '90%' }} />
            </Grid>
            <Grid xs={12} md={6}>
              <Input
                label="Company Website"
                underlined
                css={{ width: '90%' }}
              />
            </Grid>
            <Grid xs={12} md={12}>
              <Input
                label="Company Logo"
                underlined
                css={{ width: '100%' }}
                disabled
              />
            </Grid>
            <Card.Divider css={{ margin: '1rem 0 1rem 0' }} />
            <Grid xs={12} md={12}>
              <Input
                label="Current Password"
                underlined
                css={{ width: '100%' }}
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Input label="New Password" underlined css={{ width: '90%' }} />
            </Grid>
            <Grid xs={12} md={6}>
              <Input
                label="Confirm Password"
                underlined
                css={{ width: '90%' }}
              />
            </Grid>
          </Grid.Container>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" color="secondary" rounded>
            Add Account
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default EditProfile;
