import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Grid, Button } from '@nextui-org/react';
import ElipsesAnimation from 'components/Elipses/ElipsesAnimation';

function TasksRunning({ tasksActive, task }) {
  // let currentTask;
  // if (tasks) {
  //   currentTask = tasks[0];
  // }
  // console.log(currentTask);
  const { account_id } = useParams();
  // if (tasksActive.length > 0) {
  return (
    <>
      <Grid md={4} sm={12} xs={12}>
        <Card
          variant="flat"
          css={{
            color: '$solid',
            background: '$myColorInvert',
          }}
        >
          <Card.Header>
            Task Currently Running
            <ElipsesAnimation font="1rem" />
          </Card.Header>
          <Card.Divider />
          <Card.Body
            css={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
          >
            <div className="task-buttons">
              <Link
                to={`/accounts/instagram/${account_id}/tasks/${task}`}
                className="task-button"
              >
                <Button rounded css={{ width: '100%' }} size="sm">
                  Progress
                </Button>
              </Link>
              <Button
                rounded
                flat
                color="error"
                className="task-button"
                size="sm"
              >
                Abort
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Grid>
    </>
  );
}
// }

export default TasksRunning;
