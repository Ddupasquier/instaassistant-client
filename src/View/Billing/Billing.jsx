import React from 'react';
import { Card, Text, Spacer } from '@nextui-org/react';
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
              <br />
              $49 /mo*
            </Text>
            <Text size={18} h5>
              1 User
              <br />
              10 Social Accounts
            </Text>
            <Text size={15} h5>
              $500 ad spend for social boosts Discover the best time to publish
              Access messages in one inbox Schedule in bulk Access to free
              integrations Live in-dash chat support
            </Text>
            <Spacer />
            <Text size={12} h5>
              Cancel Anytime.
            </Text>
          </div>
          <div className="pkg-item" style={{ background: '$myColor' }}>
            <Text size={20} h5>
              Team Plan
              <br />
              $179 /mo*
            </Text>
            <Text size={18} h5>
              3 User
              <br />
              20 Social Accounts
            </Text>
            <Text size={15} h5>
              $2000 ad spend for social boosts Analytics & reports Access
              messages in one inbox Schedule in bulk Access to free integrations
              Live in-dash chat support
            </Text>
            <Spacer />
            <Text size={12} h5>
              Cancel Anytime.
            </Text>
          </div>
          <div className="pkg-item" style={{ background: '$myColor' }}>
            <Text size={20} h5>
              Enterprise Plan
              <br />
              Contact for pricing
            </Text>
            <Text size={18} h5>
              5+ User
              <br />
              50 Social Accounts
            </Text>
            <Text size={15} h5>
              Publishing approvals Employee advocacy Social advertising Social
              customer care App directory with 150+ tools Priority support and
              training
            </Text>
            <Spacer />
            <Text size={12} h5>
              Cancel Anytime.
            </Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Billing;
