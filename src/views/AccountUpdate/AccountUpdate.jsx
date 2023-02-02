import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import AccountInformation from './AccountInformation';
import AccountCollaboration from './AccountCollaboration';
import AccountAdmin from './AccountAdmin';

import { Input, Text, Card, Link, Button } from '@nextui-org/react';
import { unstickAccount } from 'api';
import './account-update-styles.scss';

const AccountUpdate = () => {
  const { account_id } = useParams();
  const [displayType, setDisplayType] = useState('account');

  const handleUnstick = () => {
    unstickAccount(account_id);
  };

  return (
    <div className="view-container">
      <Card
        css={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: '90%',
          width: '90%',
        }}
      >
        <ul className="selections">
          <li>
            <Button onClick={() => setDisplayType('account')} color="secondary">
              Account Information
            </Button>
          </li>
          <li>
            <Button
              onClick={() => setDisplayType('collaboration')}
              color="secondary"
            >
              Collaboration
            </Button>
          </li>
          <li>
            <Button
              onClick={() => setDisplayType('administration')}
              color="secondary"
            >
              Administration
            </Button>
          </li>
          <li>
            <Button onClick={handleUnstick} color="error">
              Unstick Account
            </Button>
          </li>
        </ul>

        <div className="display">
          {displayType === 'account' && <AccountInformation />}
          {displayType === 'collaboration' && <AccountCollaboration />}
          {displayType === 'administration' && <AccountAdmin />}
        </div>
      </Card>
    </div>
    // {/* <div style={{ zIndex: 10 }}>
    //   <ul>
    //     <li>Account Information</li>
    //     <li>Collaboration</li>
    //     <li>Administration</li>
    //   </ul>
    //   <Card>
    //     <Card.Header>
    //       <Text
    //         h1
    //         size={50}
    //         css={{
    //           textGradient: '45deg, $blue600 -20%, $pink600 50%',
    //         }}
    //         style={{ zIndex: 1 }}
    //         weight="bold"
    //       >
    //         Update Account Info
    //       </Text>
    //     </Card.Header>
    //     <Card.Body>
    //       <form>
    //         <div>
    //           <Input disabled bordered label="Name:" placeholder="Name" />
    //         </div>
    //         <div>
    //           <Input
    //             disabled
    //             bordered
    //             label="Username:"
    //             placeholder="Username"
    //           />
    //         </div>
    //         <div>
    //           <Input disabled bordered label="Bio:" placeholder="Bio" />
    //         </div>
    //         <div>
    //           <Input disabled bordered label="Email:" placeholder="Email" />
    //         </div>
    //         <div>
    //           <Input
    //             disabled
    //             bordered
    //             label="Phone:"
    //             placeholder="Phone Number"
    //           />
    //         </div>
    //         <div>
    //           <Input
    //             disabled
    //             bordered
    //             label="Full Name:"
    //             placeholder="Website"
    //           />
    //         </div>
    //         <div>
    //           <Input disabled bordered label="Gender:" placeholder="Gender" />
    //         </div>
    //         <div>
    //           <Input
    //             disabled
    //             bordered
    //             label="Profile Photo:"
    //             placeholder="Profile Photo"
    //           />
    //         </div>
    //       </form>
    //     </Card.Body>
    //     <Card.Footer>
    //       <Link to="/task">
    //         <Button rounded>
    //           <Text
    //             h1
    //             size={20}
    //             css={{
    //               textGradient: '45deg, $blue600 -20%, $pink600 50%',
    //             }}
    //             style={{ zIndex: 1 }}
    //             weight="bold"
    //           >
    //             Save & Exit
    //           </Text>
    //         </Button>
    //       </Link>
    //       <Button onClick={handleUnstick}>Un-stuck My Account</Button>
    //       <Button onClick={handleUnstick}>Regenarate Login Cookies</Button>
    //     </Card.Footer>
    //   </Card>
    // </div> */}
  );
};

export default AccountUpdate;
