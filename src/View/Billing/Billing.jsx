/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Button, Input } from '@nextui-org/react';
import { Slider } from '../../Components/Slider';
import './scss/billing-styles.css';

function Billing() {
  return (
    <div className="billing-container">
      <div className="head">
        <h3>PAYMENT SETTINGS</h3>
      </div>

      <div className="billing-main">
        <div className="payment-options">
          Card&nbsp;
          <Slider />
          &nbsp;PayPal{' '}
        </div>
        <form>
          <Input type="text" placeholder="Card Number" />
          <br />
          <Input type="text" placeholder="Name on Card" />
          <br />
          <Input type="text" placeholder="Expiration Date" />
          <br />
          <Input type="text" placeholder="CVV" />
          <br />
          <Button
            color="success"
            className="billing-button"
          >
            Save
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Billing;
