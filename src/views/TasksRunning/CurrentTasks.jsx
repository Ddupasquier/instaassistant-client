import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Loading, Collapse } from '@nextui-org/react';
import { GetTasks } from 'api';
import { convertToUserTime } from 'utils';

function CurrentTasks() {
  const { account_id } = useParams();

  const [tasks, setTasks] = useState();
  const [tasksLoaded, setTasksLoaded] = useState(false);
  // console.log(tasks);

  useEffect(() => {
    GetTasks(account_id)
      .then((data) => setTasks(data))
      .then(() => setTasksLoaded(true));
  }, [account_id]);

  return (
    <div className="view-container">
      <Card
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
                subtitle={convertToUserTime(task.date)}
              >
                <p>{task.follows_sent}</p>
                <p>{task.likes_sent}</p>
                <p>{task.comments_sent}</p>
                <p>{task.messages_sent}</p>
              </Collapse>
            ))}
          </Collapse.Group>
        ) : (
          <Loading />
        )}
      </Card>
    </div>
  );
}

export default CurrentTasks;
