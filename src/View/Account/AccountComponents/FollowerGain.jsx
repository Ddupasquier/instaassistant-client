import React from 'react';
import {Grid, Card, Text} from '@nextui-org/react';

function FollowerGain() {
      return ( <Grid sm={4} xs={12}>
            <Card
              css={{
                backdropFilter: 'saturate(200%) blur(10px)',
                background: 'rgba(255, 255, 255, 0.2)',
              }}
            >
              <Card.Header>Follower Gain - 30 Days</Card.Header>
              <Card.Divider />
              <Card.Body>
                <Text h2>247</Text>
              </Card.Body>
            </Card>
          </Grid> );
}

export default FollowerGain;