import React from 'react';
import { Input, Textarea, Button, Card } from '@nextui-org/react';
import { SendFeedback } from 'api';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const payload = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    SendFeedback(payload);
  };

  return (
    <Card
      css={{
        display: 'flex',

        flexDirection: 'column',
        gap: '1rem',
        width: '60%',
        minWidth: '300px',
        padding: '1rem',
        position: 'relative',
      }}
    >
      Got Some Feedback For Us?
      <form
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        onSubmit={handleSubmit}
      >
        <Input placeholder="Name" type="text" name="name" />
        <Input placeholder="Email" type="email" name="email" />
        <Textarea
          placeholder="Message"
          type="text"
          name="message"
          style={{ height: '100%' }}
        />
        <Button type="submit" css={{ float: 'bottom' }} color="secondary">
          Send
        </Button>
      </form>
    </Card>
  );
};

export default Contact;
