import React from 'react';
import { Card, Grid, Text } from '@nextui-org/react';
import { IconsQuestionMark } from 'Components/icons/icons';

function Interactions({ num }) {
  return (
    <Grid sm={4} xs={12}>
      <Card
        css={{
          backdropFilter: 'blur(15px)',
          background: '$myColor',
        }}
      >
        <Card.Header>
          Interactions Sent&nbsp;
          <IconsQuestionMark
            content="Total number of follows, likes, comments and Messages sent on your behalf."
            local="top"
          />
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <Text h2>{num}</Text>
        </Card.Body>
      </Card>
    </Grid>
  );
}

export default Interactions;
