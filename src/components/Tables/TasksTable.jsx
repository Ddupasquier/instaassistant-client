import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import TasksRow from './TasksRow';
import ErrorFallback from 'components/ErrorFallback';
import useSWR from 'swr';
import { GetTasks } from 'api';

function TasksTable({ tasks }) {
  console.log('tasks', tasks);
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
          <th scope="col">List</th>
          <th scope="col">Target</th>
          <th scope="col">Scheduled</th>
          <th scope="col">Created</th>
          <th scope="col">Sent</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* {tasks.map((task) => (
          <TasksRow key={task.id} {...task} />
        ))} */}
        {tasks && tasks.map((task) => <TasksRow key={task.id} task={task} />)}
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
