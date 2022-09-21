import React, { useState, useEffect } from 'react';
import { Grid, Card } from '@nextui-org/react';
import LimitsRadial from 'Components/MetricsCharts/LimitsBars';

const InteractionLimits = ({ follows, likes, comments, messages }) => {
  const [data, setData] = useState({
    follows: follows,
    likes: likes,
    comments: comments,
    messages: messages,
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
          backdropFilter: 'blur(15px)',
          background: '$myColor',
        }}
      >
        <Card.Header>Interaction Limits</Card.Header>
        <Card.Divider />
        <Card.Body>
          <LimitsRadial data={data} />
        </Card.Body>
      </Card>
    </Grid>
  );
};

export default InteractionLimits;
