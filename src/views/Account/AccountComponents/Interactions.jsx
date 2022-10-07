import React from 'react';
import { Card, Grid, Text } from '@nextui-org/react';
import { IconsQuestionMark } from 'components/icons/icons';
import { AiOutlineInteraction } from 'react-icons/ai';

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
          <label htmlFor="interactions-today">Interactions Sent</label>&nbsp;
          <IconsQuestionMark
            content="Total number of follows, likes, comments and Messages sent on your behalf."
            local="top"
          />
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <div className="display-grid">
            <div>
              <AiOutlineInteraction size="45" />
            </div>
            <div>
              <Text h2 name="interactions-today">
                {num}
              </Text>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Grid>
  );
}

export default Interactions;
