import React from 'react';
import { Card, Grid } from '@nextui-org/react';
import { ChartPlaceHold}  from "Components/ChartPlaceHold"

function MetricChart({obj}) {
  return (
    <Grid sm={8} xs={12} css={{minHeight: '30rem'}}>
      <Card
        css={{
          minHeight: '200px',
          backdropFilter: 'blur(15px)',
          background: '$myColor',
        }}
      >
        <Card.Header>Follower / Following - Week | Month</Card.Header>
        <Card.Divider />
        <Card.Body>
          <ChartPlaceHold obj={obj}/>
        </Card.Body>
      </Card>
    </Grid>
  );
}

export default MetricChart;
