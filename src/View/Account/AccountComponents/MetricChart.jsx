import React from 'react';
import { Card, Grid } from '@nextui-org/react';
import { ChartPlaceHold}  from "Components/ChartPlaceHold"

function MetricChart() {
  return (
    <Grid sm={8} xs={12} css={{minHeight: '30rem'}}>
      <Card
        css={{
          minHeight: '200px',
          backdropFilter: 'saturate(0) blur(15px)',
          background: 'rgba(255, 255, 255, 0.2)',
        }}
      >
        <Card.Header>Follower / Following - Week | Month</Card.Header>
        <Card.Divider />
        <Card.Body>
          <ChartPlaceHold />
        </Card.Body>
      </Card>
    </Grid>
  );
}

export default MetricChart;
