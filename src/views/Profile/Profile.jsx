import React, { useEffect, useState } from 'react';
import { Button, Card } from '@nextui-org/react';
import { GetUserInfo, GetAccountsManaged } from 'api';
import EditProfile from './EditProfile';
import ChangePassword from './ChangePassword';
import Avatar from 'react-avatar';
import { formatPhoneNumber } from 'utils';
import Loader from 'components/Loader';
import Bubble from 'components/Bubble';

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
    <div className="view-container">
      <Card
        style={{ zIndex: 1 }}
        css={{
          background: '$myColor',
          width: '60%',
          margin: '3rem',
          overflow: 'auto',
        }}
      >
        <Card.Header css={{ flexDirection: 'column' }}>
          <Avatar name={userInfo.email} round size="80" textSizeRatio={2} />
          <h1>{userInfo.email}</h1>
        </Card.Header>
        <Card.Body
          css={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            background: '$myColor',
          }}
        >
          {userLoaded ? (
            <>
              <Bubble
                htmlFor="phone"
                num={formatPhoneNumber(userInfo.phone_number)}
                name="Phone Number"
              />
              <Bubble htmlFor="website" num={userInfo.website} name="Website" />
              <Bubble htmlFor={managed} num={managed} name="Accounts Managed" />
              <Bubble
                htmlFor="billing"
                num={userInfo.billing_status}
                name="Billing Status"
              />
            </>
          ) : (
            <Loader />
          )}
        </Card.Body>

        <Card css={{ borderRadius: '0' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              padding: '1rem',
            }}
          >
            <Button color="secondary" onPress={editProfileHandler} rounded>
              Edit
            </Button>
            <Button color="secondary" onPress={changePasswordHandler} rounded>
              Change Password
            </Button>
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
        </Card>
      </Card>
    </div>
  );
}

export default Profile;
