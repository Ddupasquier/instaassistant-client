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
    <div className="pkg-item" style={{ background: '$myColor' }}>
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
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="priceId" value="price_G0FvDp6vZvdwRZ" />
        <Button css={{ zIndex: 1, float: 'right' }} type="submit">
          Checkout
        </Button>
      </form>
      <br />
      <br />
      <Text size={12} h5 color="red" css={{ float: 'right' }}>
        Cancel Anytime.
      </Text>
    </div>
  );
}

export default Package;
