import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Grid, Text, Button } from '@nextui-org/react';
import ElipsesAnimation from 'components/Elipses/ElipsesAnimation';

function TasksRunning({ tasksActive }) {
  const { account_id } = useParams();
  // if (tasksActive.length > 0) {
  return (
    <>
      <Grid sm={3} xs={12}></Grid>
      <Grid sm={6} xs={12}>
        <Card
          variant="flat"
          css={{
            backdropFilter: 'blur(15px)',
            background: '$myColor',
          }}
        >
          <Card.Header>
            Task Currently Running
            <ElipsesAnimation font="1rem" />
          </Card.Header>
          <Card.Divider />
          <Card.Body>
            <Text h3>Activate: @Username</Text>
          </Card.Body>
          <Card.Footer>
            <div className="task-buttons">
              <Link to={`/accounts/instagram/${account_id}/tasks`}>
                <Button rounded>Progress</Button>
              </Link>
              <Button rounded flat color="error">
                Abort
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </Grid>
      <Grid sm={3} xs={12}></Grid>
    </>
  );
}
// }

export default TasksRunning;
