import React, { useState } from 'react';
import { Card, Text, Spacer } from '@nextui-org/react';
import './billing-styles.scss';
import { CreateCheckoutSession } from 'api';
import Package from './Package';
import { Select } from 'components/styled';

function Billing() {
  const [billing, setBilling] = useState('monthly');

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      priceId: 'price_1Lctr7E2i8pEhEDNqTwt0rfu',
      success_url: '',
      cancel_url: '',
    };

    CreateCheckoutSession(body).then((data) => {
      window.location.replace(data.sessionUrl);
    });
  };

  const packages = [
    {
      name: 'Social Starter',
      monthly: '$99.88',
      yearly: '$1088',
      features: {
        accounts: 5,
        tasksPerMonth: '1,000',
        triggers: '5',
      },
      description:
        "Get access to the Antisocial Suite and take control of your social media presence. Collaborate with your team and schedule up to 1,000 automation tasks per month to save time and effort. Our advanced triggers allow you to manage your social media presence without lifting a finger. Don't miss out on this opportunity to optimize your conversion rates and drive success for your business.",
    },
    {
      name: 'Silver Surge',
      monthly: '$179.88',
      yearly: '$1,944',
      features: {
        accounts: 20,
        tasksPerMonth: 'UNLIMITED',
        triggers: '20',
      },
      description:
        "Upgrade to our Silver Surge package, our most popular offering. This package includes everything from our Starter subscription, but with even more features to help you succeed. Connect multiple accounts, access more advanced triggers, and schedule more monthly tasks to streamline your social media management. Whether you're a boutique agency or just starting out in parent-child marketing, the Silver Surge package is the perfect choice for optimizing your conversion rates.",
    },
    {
      name: 'Elite Engagement',
      monthly: '$299.88',
      yearly: '$3,240',
      features: {
        accounts: 50,
        tasksPerMonth: 'UNLIMITED',
        triggers: '100',
      },
      description:
        "Maximize your social media presence with our Elite Engagement package. This top-tier offering includes all of the features of our Starter and Silver Surge packages, plus additional support to help you drive high levels of engagement with your audience. Collaborate with our team of experts to develop a customized social media strategy and leverage influencer partnerships to reach a wider audience. With the Elite Engagement package, you'll have everything you need to take your business to the next level and optimize your conversion rates.",
    },
  ];

  return (
    <div className="view-container">
      <Card
        style={{ zIndex: 1 }}
        css={{
          background: '$myColor',
          width: '80%',
          margin: '3rem',
        }}
      >
        <div className="head">
          <Text
            h1
            size={50}
            weight="bold"
            css={{
              textGradient: '45deg, $blue600 -20%, $pink600 50%',
              height: 'fit-content',
            }}
          >
            OUR PACKAGES
          </Text>
          <Select
            name="billing"
            id="billing"
            style={{ width: '40%' }}
            onChange={(e) => setBilling(e.target.value)}
          >
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </Select>
          <Spacer />
          <Text h4>
            AntiSocialSuite does not save any credit card information. <br />
            We bill through Stripe.
          </Text>
        </div>
        <Card.Body
          css={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          {packages.map((pkg, i) => (
            <Package
              key={i}
              {...pkg}
              handleSubmit={handleSubmit}
              billing={billing}
            />
          ))}
        </Card.Body>
        <Card.Footer css={{ flexDirection: 'column' }}>
          {billing === 'monthly' &&
            'Save 10% by switching to our annual price point'}
          <Text size={12} h5 color="red" css={{ float: 'right' }}>
            Cancel Anytime.
          </Text>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Billing;
