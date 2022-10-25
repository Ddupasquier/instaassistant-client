import React from 'react';
import { Grid, Card, Text } from '@nextui-org/react';
import { IconsQuestionMark } from 'components/icons/icons';
import { AiOutlineUserAdd, AiOutlineUserDelete } from 'react-icons/ai';

function FollowerGain({ num }) {
  return (
    <Grid sm={4} xs={12}>
      <Card
        css={{
          background: '$myColor',
        }}
      >
        <Card.Header>
          Follower Gain&nbsp;
          <IconsQuestionMark
            content="Followers gained over the specified time"
            local="topEnd"
          />
        </Card.Header>
        <Card.Divider />
        <Card.Body>
          <div className="display-grid">
            <div>
              {num > 0 ? (
                <AiOutlineUserAdd size="45" />
              ) : (
                <AiOutlineUserDelete size="45" />
              )}
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

export default FollowerGain;
