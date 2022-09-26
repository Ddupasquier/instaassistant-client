import React, { useEffect, useState } from 'react';
import { GetFAQs } from 'api';
import './scss/faq-styles.css';

import { Loading, Collapse, Text, Card } from '@nextui-org/react';

const FAQ = () => {
  const [faqs, setFaqs] = useState();
  const [faqsLoaded, setFaqsLoaded] = useState(false);

  useEffect(() => {
    GetFAQs()
      .then((data) => setFaqs(data))
      .then(() => setFaqsLoaded(true));
  }, []);

  return (
    <div className="view-container">
      <Card css={{ background: '$myColor' }} className="faq">
        <Text
          h1
          size={60}
          css={{
            textGradient: '45deg, $blue600 -20%, $pink600 50%',
          }}
          weight="bold"
        >
          FAQ
        </Text>
        <Collapse.Group>
          {faqsLoaded ? (
            faqs.map((faq, index) => (
              <Collapse title={faq.q} key={index}>
                <Text>{faq.a}</Text>
              </Collapse>
            ))
          ) : (
            <div className="loading">
              <Loading />
            </div>
          )}
        </Collapse.Group>
      </Card>
    </div>
  );
};

export default FAQ;
