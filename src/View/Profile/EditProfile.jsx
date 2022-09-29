import React from 'react';
import { Modal, Input, Button, Text, Grid } from '@nextui-org/react';
import { EditProfilePatch } from 'api';

function EditProfile({
  editProfileVisible,
  closeEditProfileHandler,
  userInfo,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    // console.log(data);
    const payload = {
      company_name: data.company_name || '',
      email: data.email || '',
      phone_number: data.phone_number || '',
      website: data.website || '',
      profile_pic: data.profile_pic || '',
    };
    console.log(payload);
    EditProfilePatch(payload);
  };

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
              <Input
                label="Company Name"
                underlined
                css={{ width: '95%' }}
                initialValue={userInfo.company_name}
                name="company_name"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Input
                label="Company Email"
                underlined
                css={{ width: '100%' }}
                initialValue={userInfo.email || ''}
                name="email"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Input
                label="Company Phone"
                underlined
                css={{ width: '95%' }}
                initialValue={userInfo.phone_number || ''}
                name="phone_number"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <Input
                label="Company Website"
                underlined
                css={{ width: '100%' }}
                initialValue={userInfo.website || ''}
                name="website"
              />
            </Grid>
            <Grid xs={12} md={12}>
              <Input
                label="Company Logo"
                underlined
                css={{ width: '100%' }}
                disabled
                initialValue={userInfo.profile_pic || ''}
                name="profile_pic"
              />
            </Grid>
          </Grid.Container>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" color="secondary" rounded>
            Save
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default EditProfile;
