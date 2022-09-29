import React, { useEffect, useState } from 'react';
import './scss/profile-styles.css';
import { Button, Card, Text } from '@nextui-org/react';
import { GetUserInfo, GetAccountsManaged } from 'api';
import EditProfile from './EditProfile';
import ChangePassword from './ChangePassword';
import Avatar from 'react-avatar';

function Profile() {
  const [userInfo, setUserInfo] = useState({});
  const [managed, setManaged] = useState(0);
  const [userLoaded, setUserLoaded] = useState(false);
  const [editProfileVisible, setEditProfileVisible] = useState(false);
  const [changePasswordVisible, setChangePasswordVisible] = useState(false);

  const editProfileHandler = () => setEditProfileVisible(true);
  const closeEditProfileHandler = () => {
    setEditProfileVisible(false);
  };

  const changePasswordHandler = () => setChangePasswordVisible(true);
  const closeChangePasswordHandler = () => {
    setChangePasswordVisible(false);
  };

  useEffect(() => {
    GetUserInfo()
      .then((data) => setUserInfo(data))
      .then(() => setUserLoaded(true));
    GetAccountsManaged().then((data) => setManaged(Object.values(data)));
  }, []);

  return (
    <div className="profile-main">
      <Avatar name={userInfo.email} round size="80" textSizeRatio={2} />
      <Text
        h1
        size={60}
        css={{
          textGradient: '45deg, $blue600 -20%, $pink600 50%',
        }}
        weight="bold"
      >
        {userInfo.email}
      </Text>
      <Card
        css={{ background: '$myColor' }}
        style={{ padding: '1.5rem', width: '80%' }}
      >
        <div className="profile-header">
          <Button color="secondary" onPress={editProfileHandler} rounded>
            Edit
          </Button>
          <Button color="secondary" onPress={changePasswordHandler} rounded>
            Change Password
          </Button>
        </div>
        <br />
        <div className="profile-content">
          <Text align="center">
            Thank you for becoming a Marcus Bot user. make sure your billing
            information is up to date or change your email/pass word form this
            page.
          </Text>
          <br />
          <Text
            css={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
              gap: '1rem',
            }}
          >
            {userLoaded && (
              <>
                <span>Company Email: {userInfo.email}</span>
                <span>Company Phone: {userInfo.phone_number}</span>
                <span>Company Website: {userInfo.website}</span>
                <span>Accounts Managed: {managed}</span>
                <span>Payment Status: {userInfo.billing_status}</span>
                {/* <span>Company Logo: {userInfo.profile_pic}</span> */}
              </>
            )}
          </Text>
        </div>
      </Card>
      <EditProfile
        editProfileVisible={editProfileVisible}
        closeEditProfileHandler={closeEditProfileHandler}
        userInfo={userInfo}
      />
      <ChangePassword
        changePasswordVisible={changePasswordVisible}
        closeChangePasswordHandler={closeChangePasswordHandler}
        userInfo={userInfo}
      />
    </div>
  );
}

export default Profile;
