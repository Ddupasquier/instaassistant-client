import React, { useEffect, useState } from 'react';
import { GetFAQs } from '../../api';
import './scss/faq-styles.css';

import { Loading, Collapse, Text } from '@nextui-org/react';

const FAQ = () => {
  const [faqs, setFaqs] = useState();
  const [faqsLoaded, setFaqsLoaded] = useState(false);

  useEffect(() => {
    GetFAQs()
      .then((data) => setFaqs(data))
      .then(() => setFaqsLoaded(true));
  }, []);

  return (
    <div className="faq-container">
      <div className="faq">
        <Text h1>FAQ</Text>
        <Collapse.Group>
          {/* {faqsLoaded ? (
            faqs.map((faq) => (
              <Collapse title={faq.q}>
                <Text>{faq.a}</Text>
              </Collapse>
            ))
          ) : ( */}
          <div>
            <Loading />
          </div>
          {/* )} */}
        </Collapse.Group>
      </div>
    </div>
  );
};

export default FAQ;
