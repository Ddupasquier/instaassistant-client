import React from 'react';
import {Grid, Card, Text} from '@nextui-org/react';
import { IconsQuestionMark } from 'Components/icons/icons';

function FollowerGain({num}) {
      return ( <Grid sm={4} xs={12}>
            <Card
              css={{
                backdropFilter: 'blur(10px)',
                background: '$myColor',
              }}
            >
              <Card.Header>Follower Gain&nbsp;<IconsQuestionMark
                    content="Followers gained over the specified time"
                    local="top"
                  /></Card.Header>
              <Card.Divider />
              <Card.Body>
                <Text h2>{num}</Text>
              </Card.Body>
            </Card>
          </Grid> );
}

export default FollowerGain;  