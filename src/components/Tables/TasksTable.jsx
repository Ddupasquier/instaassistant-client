import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import TasksRow from './TasksRow';
import ErrorFallback from 'components/ErrorFallback';
import useSWR from 'swr';
import { GetTasks } from 'api';

function TasksTable({ tasks }) {
  const { account_id } = useParams();
  // console.log(account_id);
  // TODO: handle error, "no accounts found" message
  // const { data, err } = useSWR('/api/tasks', GetTasks(account_id));
  // console.log(data);
  return (
    <table role="table" aria-label="tasks-table">
      <thead>
        <tr>
          <th className="task-name-column" scope="col">
            Task
          </th>
          <th scope="col">Scheduled at</th>
          <th scope="col">Created at</th>
          <th scope="col">Likes sent</th>
          <th scope="col">Follows sent</th>
          <th scope="col">Comments sent</th>
        </tr>
      </thead>
      <tbody>
        {tasks &&
          tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.task_type}</td>
            </tr>
          ))}

        {/* <ErrorBoundary FallbackComponent={ErrorFallback}>
          {err
            ? 'Error'
            : data.map((task, i) => <TasksRow key={i} task={task} />)}
        </ErrorBoundary> */}
      </tbody>
    </table>
  );
}

export default TasksTable;
