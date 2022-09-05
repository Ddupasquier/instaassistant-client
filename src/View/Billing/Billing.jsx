import React from 'react';
import { Card, Text } from '@nextui-org/react';
import './scss/billing-styles.css';
import PayPal from './PayPal';

function Billing() {
  return (
    <div className="view-container">
      <Card
        style={{ zIndex: 1 }}
        css={{
          background: '$myColor',
          width: '80%',
          backdropFilter: 'blur(15px)',
        }}
      >
        <div className="head">
          <Text h1 size={50} css={{ color: 'white' }} weight="bold">
            OUR PACKAGES
          </Text>
          <Text h4>
            Marcus Bot does not save any credit card information. <br />
            We bill through paypal or through the secure third party Stripe.
          </Text>
        </div>
        <Card.Body
          css={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <div className="pkg-item" style={{ background: '$myColor' }}>
            <Text size={20} h5>
              Professional Plan
              <br /> $49 /mo*
            </Text>
          </div>
          <div className="pkg-item" style={{ background: '$myColor' }}>
            <Text size={20} h5>
              Team Plan
              <br /> $179 /mo*
            </Text>
          </div>
          <div className="pkg-item" style={{ background: '$myColor' }}>
            <Text size={20} h5>
              Enterprise Plan
              <br /> Contact for pricing
            </Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Billing;
