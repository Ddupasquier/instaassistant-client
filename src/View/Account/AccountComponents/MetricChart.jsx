import React from 'react';
import { Card, Grid } from '@nextui-org/react';
import { FollowersChart } from 'Components/MetricsCharts';
import UtilizationChart from 'Components/MetricsCharts/UtilizationChart';


function MetricChart({data}) {
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
          <FollowersChart />
          <UtilizationChart />
        </Card.Body>
      </Card>
    </Grid>
  );
}

export default MetricChart;
