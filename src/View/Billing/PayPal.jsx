import React from 'react';
import { useState } from 'react';

function PayPal({num}) {
  const [price, setPrice] = useState()
  return (
    <form className="paypal-form">

      <h2>{num}</h2>

      <select name="plan" id="plans">
        <option>Choose a plan</option>
        <option value="monthly">Monthly : $99.99 USD</option>
        <option value="yearly">Yearly : $1,000.00 USD</option>
      </select>
      <br />
      <input
        type="image"
        src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif"
        border="0"
        name="submit"
        alt="PayPal - The safer, easier way to pay online!"
      />
    </form>
  );
}

export default PayPal;
