import React from 'react';
import TasksRow from './TasksRow';

function TasksTable({ tasks }) {
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
