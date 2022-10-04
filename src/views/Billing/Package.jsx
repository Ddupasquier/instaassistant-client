import React from 'react';
import { Text, Button, Spacer } from '@nextui-org/react';

// * Wording for these packages can be changed in the Billing.jsx file

function Package({
  handleSubmit,
  name,
  monthly,
  yearly,
  features,
  description,
}) {
  return (
    <div
      className="pkg-item"
      style={{
        background: '$myColor',
        display: 'flex',
        flexDirection: 'column',
        flex: 4,
        minWidth: '20rem',
      }}
    >
      <Text size={20} h5>
        {name}
        <br />
        {monthly} monthly
        <br />
        {yearly} annually
      </Text>
      <Text size={18} h5>
        {features.users} Users
        <br />
        {features.accounts} Social Accounts
      </Text>
      <Text size={15} h5>
        {description}
      </Text>
      <Spacer />
      <form onSubmit={handleSubmit} className="package-form">
        <input type="hidden" name="priceId" value="price_G0FvDp6vZvdwRZ" />
        <Button
          css={{ zIndex: 1, float: 'right' }}
          type="submit"
          color="secondary"
          size="sm"
        >
          Checkout
        </Button>
        <br />
        <br />
        <Text size={12} h5 color="red" css={{ float: 'right' }}>
          Cancel Anytime.
        </Text>
      </form>
    </div>
  );
}

export default Package;
