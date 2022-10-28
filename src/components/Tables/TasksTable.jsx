import React, { useLayoutEffect, useRef, useState } from 'react';
import TasksRow from './TasksRow';

function TasksTable({ tasks, height }) {
  const [rowHeight, setRowHeight] = useState(0);
  const [start, setStart] = useState(0);
  const rowRef = useRef(null);

  useLayoutEffect(() => {
    if (rowRef.current) {
      setRowHeight(rowRef.current.offsetHeight);
    }
  }, [rowRef]);

  const rowsPerPage = () => {
    const tableHeight = height - 220;
    return Math.floor(tableHeight / rowHeight);
  };
  console.log('rows', rowsPerPage());

  return (
    <>
      <table id="tasks-table" role="table" aria-label="tasks-table">
        <thead>
          <tr>
            <th className="task-name-column" scope="col">
              Task
            </th>
            <th scope="col">List</th>
            <th scope="col">Target</th>
            <th scope="col">Scheduled</th>
            <th scope="col">Created</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* {tasks &&
            tasks.map((task, i) => {
              return (
                <TasksRow
                  key={task.id}
                  i={i}
                  task={task}
                  rowRef={rowRef}
                  setStart={setStart}
                />
              );
            })} */}
          {tasks &&
            tasks
              .slice(start, start + rowsPerPage())
              .map((task, i) => (
                <TasksRow key={i} task={task} rowRef={rowRef} />
              ))}
        </tbody>
      </table>
      {start > 0 && (
        <button onClick={() => setStart(start - rowsPerPage())}>Back</button>
      )}
      {start + rowsPerPage() < tasks.length && (
        <button onClick={() => setStart(start + rowsPerPage())}>Next</button>
      )}
    </>
  );
}

export default TasksTable;
