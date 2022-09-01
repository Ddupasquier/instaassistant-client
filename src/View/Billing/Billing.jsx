/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Card, Text } from '@nextui-org/react';
import './scss/billing-styles.css';
import PayPal from './PayPal';

function Billing() {
  // const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="view-container">
      <Card style={{zIndex: 1}} css={{background: '$myColor'}}>
      <div className="head">
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
        <Text h4>
          Marcus Bot does not save any credit card information. <br />
          We bill through paypal or through the secure third party Stripe.
        </Text>
      </div>
      <br />
      <div className="billing-main">
        <PayPal num={1}/>
        <PayPal num={5}/>
        <PayPal num={10}/>
      </div>
      </Card>
    </div>
  );
}

export default Billing;
