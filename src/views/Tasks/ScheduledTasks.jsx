import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TasksTable from 'components/Tables/TasksTable';
import Loader from 'components/Loader';
import { GetTasks } from 'api';

function ScheduledTasks() {
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
      {tasksLoaded ? <TasksTable tasks={tasks} /> : <Loader />}
    </div>
  );
}

export default ScheduledTasks;
