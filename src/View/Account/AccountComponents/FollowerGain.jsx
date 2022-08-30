import React from 'react';
import {Grid, Card, Text} from '@nextui-org/react';

function FollowerGain({num}) {
      return ( <Grid sm={4} xs={12}>
            <Card
              css={{
                backdropFilter: 'blur(10px)',
                background: '$myColor',
              }}
            >
              <Card.Header>Follower Gain - 30 Days</Card.Header>
              <Card.Divider />
              <Card.Body>
                <Text h2>{num}</Text>
              </Card.Body>
            </Card>
          </Grid> );
}

export default FollowerGain;