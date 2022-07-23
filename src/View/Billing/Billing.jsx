/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Button } from '@nextui-org/react';
import { Slider } from '../../Components/Slider';
import './scss/billing-styles.css';

function Billing() {
  return (
    <div className="billing-container">
      <div className="head">
        <h3>PAYMENT SETTINGS</h3>
      </div>

      <div className="billing-main outset">
        <div className="payment-options">
          Card&nbsp;
          <Slider />
          &nbsp;PayPal{' '}
        </div>
        <form>
          <input type="text" placeholder="Card Number" />
          <br />
          <input type="text" placeholder="Name on Card" />
          <br />
          <input type="text" placeholder="Expiration Date" />
          <br />
          <input type="text" placeholder="CVV" />
          <br />
          <Button
            type="submit"
            size="sm"
            color="success"
            className="billing-button"
            rounded
          >
            Save
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Billing;
