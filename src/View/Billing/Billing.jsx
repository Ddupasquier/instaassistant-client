/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Text } from '@nextui-org/react';
import './scss/billing-styles.css';
import PayPal from './PayPal';

function Billing() {
  // const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="view-container">
      <div className="head">
        <div
          style={{
            backgroundColor: 'rgb(128, 128, 128, .5)',
            width: '100vw',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Text
            h1
            size={60}
            css={{
              // textGradient: '45deg, $blue600 -20%, $pink600 50%',
              color: 'white',
            }}
            weight="bold"
          >
            PAYMENT SETTINGS
          </Text>
        </div>
        <Text h4>
          Marcus Bot does not save any credit card information. <br />
          We bill through paypal or through the secure third party Stripe.
        </Text>
      </div>
      <br />
      <div className="billing-main">
        {/* <div className="payment-options">
          Card&nbsp;
          <Switch
            size="lg"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          &nbsp;PayPal{' '}
        </div>
        <br /> */}
        {/* {!isChecked ? ( */}
        {/* <Credit /> */}
        {/* ) : (  */}
        <PayPal />
        {/* )} */}
      </div>
    </div>
  );
}

export default Billing;
