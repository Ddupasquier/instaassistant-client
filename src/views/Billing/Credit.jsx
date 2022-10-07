import React from 'react';
import { Input, Button } from '@nextui-org/react';

function Credit() {
  return (
    <form className="card-form">
      <select name="plan" id="plans">
        <option>Choose a plan</option>
        <option value="monthly">Monthly : $99.99 USD</option>
        <option value="yearly">Yearly : $1,000.00 USD</option>
      </select>
      <Input type="text" placeholder="Card Number" />

      <Input type="text" placeholder="Name on Card" />

      <Input type="text" placeholder="Expiration Date" />

      <Input type="text" placeholder="CVV" />

      <Button color="success" className="billing-button" size="sm">
        Save
      </Button>
    </form>
  );
}

export default Credit;
