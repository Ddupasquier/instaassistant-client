import React from 'react';
import { Card, Grid, Text } from '@nextui-org/react';

function Interactions({ num }) {
  return (
    <Grid sm={4} xs={12}>
      <Card
        css={{
          backdropFilter: 'blur(15px)',
          background: '$myColor',
        }}
      >
        <Card.Header>Interactions Sent - 30 Days</Card.Header>
        <Card.Divider />
        <Card.Body>
          <Text h2>{num}</Text>
        </Card.Body>
      </Card>
    </Grid>
  );
}

export default Interactions;
