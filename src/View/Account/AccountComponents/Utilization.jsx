import React from 'react';
import { Card, Grid, Text, Progress } from '@nextui-org/react';

function Utilization({num}) {
  return (
    <Grid sm={4} xs={12}>
      <Card
        css={{
          backdropFilter: 'saturate(200%) blur(15px)',
          background: 'rgba(255, 255, 255, 0.2)',
        }}
      >
        <Card.Header>Utilization - 30 Days</Card.Header>
        <Card.Divider />
        <Card.Body>
          <Grid.Container>
            <Grid sm={2}>
              <Text h2>{num}%</Text>
            </Grid>
            <Grid sm={12} xs={12}>
              <Progress color="primary" value={num} />
            </Grid>
          </Grid.Container>
        </Card.Body>
      </Card>
    </Grid>
  );
}

export default Utilization;
