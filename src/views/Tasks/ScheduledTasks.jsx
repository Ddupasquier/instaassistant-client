import React, { useEffect, useState } from 'react';
import { useWindowHeight } from 'hooks/windowSize';
import { useParams } from 'react-router-dom';
import TasksTable from 'components/Tables/TasksTable';
import Loader from 'components/Loader';
import { GetTasks } from 'api';

function ScheduledTasks() {
  const [height] = useWindowHeight();
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
      <h1 style={{ margin: '0 1rem' }}>Scheduled Tasks</h1>
      {tasksLoaded ? <TasksTable tasks={tasks} height={height} /> : <Loader />}
    </div>
  );
}

export default ScheduledTasks;
