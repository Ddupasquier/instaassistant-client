import React from 'react';
import { Card, Grid } from '@nextui-org/react';
import { FollowersChart } from 'components/Charts';
import UtilizationChart from 'components/Charts/UtilizationChart';
import { IconsQuestionMark } from 'components/icons/icons';

function MetricChart({ snapshots }) {
  return (
    <Grid sm={8} xs={12}>
      <Card
        css={{
          background: '$myColor',
        }}
      >
        <Card.Header>
          Follower / Following - 30 days &nbsp;
          <IconsQuestionMark
            content="Total number of follows, likes, comments and Messages sent on your behalf."
            local="top"
          />
        </Card.Header>

        <Card.Divider />
        <Card.Body>
          <FollowersChart snapshots={snapshots} />
          <UtilizationChart />
        </Card.Body>
      </Card>
    </Grid>
  );
}

export default MetricChart;
