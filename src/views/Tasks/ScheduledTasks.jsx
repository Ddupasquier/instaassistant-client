import React, { Suspense, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// import { useParams, Link } from 'react-router-dom';
import { Card, Loading, Collapse } from '@nextui-org/react';
// import { GetTasks } from 'api';
import { convertToUserTime } from 'utils';
import TasksTable from 'components/Tables/TasksTable';
import Loader from 'components/Loader';
import { GetTasks } from 'api';

function ScheduledTasks() {
  // const [isUpdating, startUpdating] = useTransition();
  const { account_id } = useParams();

  const [tasks, setTasks] = useState([]);
  const [tasksLoaded, setTasksLoaded] = useState(false);

  useEffect(() => {
    GetTasks(account_id)
      .then((data) => setTasks(data))
      .then(() => setTasksLoaded(true));
  }, [account_id]);

  return (
    <div className="accounts-container">
      {/* <Suspense fallback={<Loader />}> */}
      {/* <TasksTable tasks={tasks} /> */}
      {/* </Suspense> */}
      {/* <Card
        style={{ zIndex: 1 }}
        css={{
          background: '$myColor',
          width: '90%',
          backdropFilter: 'blur(15px)',
          margin: '3rem',
          overflow: 'auto',
        }}
      >
        {tasksLoaded ? (
          <Collapse.Group>
            {tasks.map((task) => (
              <Collapse
                key={task.id}
                title={task.task_type}
                subtitle={convertToUserTime(task.date_created)}
              >
                <p>{task.follows_sent}</p>
                <p>{task.likes_sent}</p>
                <p>{task.comments_sent}</p>
                <p>{task.messages_sent}</p>
                <Link to={`/accounts/instagram/${account_id}/tasks/${task.id}`}>
                  View
                </Link>
              </Collapse>
            ))}
          </Collapse.Group>
        ) : (
          <Loading />
        )}
      </Card> */}
      <TasksTable tasks={tasks} />
    </div>
  );
}

export default ScheduledTasks;
