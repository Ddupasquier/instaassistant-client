import React from 'react';
import { Card, Text, Spacer, Button } from '@nextui-org/react';
import './scss/billing-styles.css';
import { CreateCheckoutSession } from 'api';

function Billing() {
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
      name: 'Pro Plan',
      monthly: '$99.99',
      yearly: '$800.00',
      features: {
        users: 1,
        accounts: 10,
      },
      description:
        'THIS NEEDS WORDING - $500 ad spend for social boosts Discover the best time to publish Access messages in one inbox Schedule in bulk Access to free integrations Live in-dash chat support',
    },
    {
      name: 'Team Plan',
      monthly: '$179.99',
      yearly: '$1,600.00',
      features: {
        users: 3,
        accounts: 20,
      },
      description:
        'THIS NEEDS WORDING - $2000 ad spend for social boosts Analytics & reports Access messages in one inbox Schedule in bulk Access to free integrations Live in-dash chat support',
    },
    {
      name: 'Enterprise Plan',
      monthly: '$299.99',
      yearly: '$2,400.00',
      features: {
        users: 5 + '+',
        accounts: 50,
      },
      description:
        'THIS NEEDS WORDING - Publishing approvals Employee advocacy Social advertising Social customer care App directory with 150+ tools Priority support and training',
    },
  ];

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
          <Text h1 size={50} weight="bold" css={{
            textGradient: '45deg, $blue600 -20%, $pink600 50%',
            height: 'fit-content',
          }}>
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
          <div className="pkg-item">
            <Text size={20} h5>
              Professional Plan
              <br />
              $99 /mo*
            </Text>
            <Text size={18} h5>
              1 User
              <br />
              1 Social Account(s)
            </Text>
            <Text size={15} h5>
              manage your daily social media outreach with the 
              click of a button. spend 3 minutes a day and send up to 30,000 interactions a 
              month with AntiSocial Suite.
            </Text>
            <Spacer />
            <form onSubmit={handleSubmit}>
              <input
                type="hidden"
                name="priceId"
                value="price_G0FvDp6vZvdwRZ"
              />
              <Button style={{ zIndex: 1, float: 'right' }} type="submit">
                Checkout
              </Button>
            </form>
            <Text size={12} h5 color="red">
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
              1 User
              <br />
              5 Social Accounts
            </Text>
            <Text size={15} h5>
              Perfect for starting MS marketing. manage your main
               account and 4 slave accounts to do your bidding. Taking your outreach 
               potential from 30K to 150K monthly. program your 
              slave accounts to interact with your content to give your comments and likes a boost
            </Text>
            <Spacer />
            <form onSubmit={handleSubmit}>
              <input
                type="hidden"
                name="priceId"
                value="price_G0FvDp6vZvdwRZ"
              />
              <Button style={{ zIndex: 1, float: 'right' }} type="submit">
                Checkout
              </Button>
            </form>
            <Text size={12} h5 color="red">
              Cancel Anytime.
            </Text>
          </div>
          <div className="pkg-item" style={{ background: '$myColor' }}>
            <Text size={20} h5>
              Enterprise Plan
              <br />
              299 /mo*
            </Text>
            <Text size={18} h5>
              1 User
              <br />
              10 Social Accounts
            </Text>
            <Text size={15} h5>
              Packed full of power and potential. send up to 300K interactions monthly.
              getting the word out has never been so easy!
            </Text>
            <Spacer />
            <form onSubmit={handleSubmit}>
              <input
                type="hidden"
                name="priceId"
                value="price_G0FvDp6vZvdwRZ"
              />
              <Button style={{ zIndex: 1, float: 'right' }} type="submit">
                Checkout
              </Button>
            </form>
            <Text size={12} h5 color="red">
              Cancel Anytime.
            </Text>
          </div>
            <h4>Don't see a package that works for you? contact us about business and enterprise level packages</h4>
          
        </Card.Body>
      </Card>
    </div>
  );
}

export default Billing;
