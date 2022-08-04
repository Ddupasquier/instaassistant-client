import React, { useEffect, useState } from 'react';
import './scss/profile-styles.css';
import { UserIcon } from '../../Components/UserIcon';
import { Button, Text } from '@nextui-org/react';

function Profile() {
  const [companyName, setCompanyName] = useState('Your Mom');
  const [companyEmail, setCompanyEmail] = useState('companyname@email.com');
  const [companyPhone, setCompanyPhone] = useState('555-555-5555');
  const [companyAddress, setCompanyAddress] = useState(
    'P Sherman 42 Wallaby Way, Sydney'
  );
  const [companyWebsite, setCompanyWebsite] = useState('link to company site');
  const [accountsManaged, setAccountsManaged] = useState(
    '(25) include link to accounts page'
  );
  const [billingInformation, setBillingInformation] =
    useState('Maybe use this?');
  const [paymentStatus, setPaymentStatus] = useState('Paid');
  const [companyLogo, setCompanyLogo] = useState('Logo');

  useEffect(() => {
    // fetch company data from the server
    // fetch('/api/company')
    //   .then(response => response.json())
    //   .then(data => {
    //     setCompanyName(data.name);
    //     setCompanyEmail(data.email);
    //     setCompanyPhone(data.phone);
    //     setCompanyAddress(data.address);
    //     setCompanyWebsite(data.website);
    //     setAccountsManaged(data.accountsManaged);
    //     setBillingInformation(data.billingInformation);
    //     setPaymentInformation(data.paymentInformation);
    //     setCompanyLogo(data.logo);
    //   }
  }, []);

  return (
    <div className="profile-main">
      <div className="profile">
        <div className="profile-header">
          <UserIcon
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            name="@Username"
            size="xl"
          />

          <Button variant="primary">Edit</Button>
        </div>
        <div className="profile-content">
          <Text>
            Thank you for becoming a Marcus Bot user. make sure your billing
            information is up to date or change your email/pass word form this
            page.
          </Text>
          <Text
            css={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
              gap: '1rem',
            }}
          >
            <span>Company Name: {companyName}</span>
            <span>Company Email: {companyEmail}</span>
            <span>Company Phone: {companyPhone}</span>
            <span>Company Address: {companyAddress}</span>
            <span>Company Website: {companyWebsite}</span>
            <span>Accounts Managed: {accountsManaged}</span>
            <span>Billing Information: {billingInformation}</span>
            <span>Payment Status: {paymentStatus}</span>
            <span>Company Logo: {companyLogo}</span>
          </Text>
        </div>
      </div>
    </div>
  );
}

export default Profile;
