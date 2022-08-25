import React from 'react';
import { Card, Grid, Text } from '@nextui-org/react';

function ActivityLog() {
  return (
    <Grid xs={12}>
      <Card css={{ minHeight: '400px' }}>
        <Card.Header>
          <Text>Activity Log</Text>
        </Card.Header>
        <Card.Body>
          <Text>Post activities here ~~~</Text>
        </Card.Body>
      </Card>
    </Grid>
  );
}

export default ActivityLog;
