import React from 'react';
import { Card, Grid, Text, Progress } from '@nextui-org/react';

function Utilization() {
  const progress = 92;

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
            <Grid sm={12} xs={12} css={{ alignItems: 'center', position: 'relative', gap: '1rem' }}>
              <Text h2>{progress}%</Text>
              <Progress shadow color="primary" size="xl" value={progress} />
            </Grid>
          </Grid.Container>
        </Card.Body>
      </Card>
    </Grid>
  );
}

export default Utilization;
