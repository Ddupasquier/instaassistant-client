/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { Button, Input, Switch, Text } from '@nextui-org/react';
import './scss/billing-styles.css';

function Billing() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="billing-container">
      <div className="head">
        <h3>PAYMENT SETTINGS</h3>
        <Text h4>
          Marcus Bot does not save any credit card information. <br />
          We bill through paypal or through the secure third party Stripe.
        </Text>
      </div>
      <br />
      <div className="billing-main">
        <div className="payment-options">
          Card&nbsp;
          <Switch
            size="lg"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          &nbsp;PayPal{' '}
        </div>
        <br />
        {!isChecked ? (
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
        ) : (
          <form className="paypal-form">
            <select name="plan" id="plans">
              <option>Choose a plan</option>
              <option value="monthly">Monthly : $99.99 USD</option>
              <option value="yearly">Yearly : $1,000.00 USD</option>
            </select>
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif"
              border="0"
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
            />
          </form>
        )}
      </div>
    </div>
  );
}

export default Billing;
