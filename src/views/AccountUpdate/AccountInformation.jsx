import React from 'react';
import { Input } from '@nextui-org/react';
import './account-update-styles.scss';

function AccountInformation() {
  return (
    <div className="account-information">
      <form>
        <div>
          <Input disabled bordered label="Name:" placeholder="Name" />
        </div>
        <div>
          <Input disabled bordered label="Username:" placeholder="Username" />
        </div>
        <div>
          <Input disabled bordered label="Bio:" placeholder="Bio" />
        </div>
        <div>
          <Input disabled bordered label="Email:" placeholder="Email" />
        </div>
        <div>
          <Input disabled bordered label="Phone:" placeholder="Phone Number" />
        </div>
        <div>
          <Input disabled bordered label="Full Name:" placeholder="Website" />
        </div>
        <div>
          <Input disabled bordered label="Gender:" placeholder="Gender" />
        </div>
        <div>
          <Input
            disabled
            bordered
            label="Profile Photo:"
            placeholder="Profile Photo"
          />
        </div>
      </form>
    </div>
  );
}

export default AccountInformation;
