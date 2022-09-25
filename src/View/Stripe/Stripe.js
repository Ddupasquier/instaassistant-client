/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Button, Card, Text } from '@nextui-org/react';
import { CreateCheckoutSession } from 'api';

function Stripe() {
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

  return (
    <>
      <div className="view-container">
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="priceId" value="price_G0FvDp6vZvdwRZ" />
          <Button style={{ zIndex: 10 }} type="submit">
            Checkout
          </Button>
        </form>
      </div>
    </>
  );
}

export default Stripe;
