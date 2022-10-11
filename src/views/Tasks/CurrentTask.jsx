import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetTask } from 'api';
import { Card } from '@nextui-org/react';

function CurrentTask() {
  const { task_id } = useParams();
  const [task, setTask] = useState();
  const [taskLoaded, setTaskLoaded] = useState(false);

  useEffect(() => {
    GetTask(task_id)
      .then((data) => setTask(data))
      .then(() => setTaskLoaded(true));
  }, [task_id]);

  console.log(task);

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
        {taskLoaded ? (
          <div>
            <h1>{task.task_type}</h1>
            <p>{task.follows_sent}</p>
            <p>{task.likes_sent}</p>
            <p>{task.comments_sent}</p>
            <p>{task.messages_sent}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </Card>
    </div>
  );
}

export default CurrentTask;
