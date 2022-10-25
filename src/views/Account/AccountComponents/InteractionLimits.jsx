import React, { useState, useEffect } from 'react';
import { Grid, Card, Button } from '@nextui-org/react';
import LimitsChart from 'components/Charts/LimitsBars';

const InteractionLimits = ({ follows, likes, comments, messages }) => {
  const [chartToggle, setChartToggle] = useState(false);

  const [data, setData] = useState({
    follows,
    likes,
    comments,
    messages,
  });

  useEffect(() => {
    setData({
      follows: follows || 0,
      likes: likes || 0,
      comments: comments || 0,
      messages: messages || 0,
    });
  }, [follows, likes, comments, messages]);

  return (
    <Grid sm={4} xs={12}>
      <Card
        css={{
          background: '$myColor',
        }}
      >
        <Card.Header css={{ justifyContent: 'space-between' }}>
          <span>Daily Interaction Limits</span>
          <Button
            color="secondary"
            size="sm"
            rounded
            onPress={() => setChartToggle(!chartToggle)}
          >
            Dougnut/Bar
          </Button>
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ justifyContent: 'center' }}>
          <LimitsChart data={data} toggle={chartToggle} />
        </Card.Body>
      </Card>
    </Grid>
  );
};

export default InteractionLimits;
