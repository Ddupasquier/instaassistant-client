import React from 'react';
import { Card, Grid } from '@nextui-org/react';
import { FollowersChart } from 'Components/MetricsCharts';
import UtilizationChart from 'Components/MetricsCharts/UtilizationChart';
import { IconsQuestionMark } from 'Components/icons/icons';

function MetricChart({ data }) {
  return (
    <Grid sm={6} xs={12} css={{ minHeight: '30rem' }}>
      <Card
        css={{
          minHeight: '200px',
          backdropFilter: 'blur(15px)',
          background: '$myColor',
        }}
      >
        <Card.Header>
          Follower / Following - Week | Month&nbsp;
          <IconsQuestionMark
            content="Total number of follows, likes, comments and Messages sent on your behalf."
            local="top"
          />
        </Card.Header>

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
