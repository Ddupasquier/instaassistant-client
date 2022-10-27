import React, { useRef } from 'react';
import TasksRow from './TasksRow';

function TasksTable({ tasks }) {
  const tableRef = useRef(null);

  // const rowsPerPage = () => {
  //   const table = tableRef.current;
  //   const tableHeight = table.offsetHeight;
  //   const rowHeight = table.rows[0].offsetHeight;
  //   return Math.floor(tableHeight / rowHeight);
  // };

  return (
    <table
      id="tasks-table"
      role="table"
      aria-label="tasks-table"
      ref={tableRef}
    >
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
        {/* {tasks &&
          tasks
            .slice(0, rowsPerPage())
            .map((task) => <TasksRow key={task.id} {...task} />)} */}
        {tasks && tasks.map((task) => <TasksRow key={task.id} task={task} />)}
      </tbody>
    </table>
  );
}

export default TasksTable;
