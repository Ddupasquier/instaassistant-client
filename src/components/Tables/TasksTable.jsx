import React, { useLayoutEffect, useRef, useState } from 'react';
import TasksRow from './TasksRow';
import { sortData } from 'utils';
import { ColButton } from '../styled';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

function TasksTable({ tasks, height }) {
  const [rowHeight, setRowHeight] = useState(0);
  const [start, setStart] = useState(0);
  const rowRef = useRef(null);
  const [sortBy, setSortBy] = useState('date');
  const [sortDirection, setSortDirection] = useState('desc');

  const renderAscDesc = (field) => {
    if (field === sortBy) {
      return sortDirection === 'asc' ? <IoIosArrowUp /> : <IoIosArrowDown />;
    }
  };

  useLayoutEffect(() => {
    if (rowRef.current) {
      setRowHeight(rowRef.current.offsetHeight);
    }
  }, [rowRef]);

  const rowsPerPage = () => {
    const tableHeight = height - 220;
    return Math.floor(tableHeight / rowHeight);
  };

  const checkActive = (field) => {
    const activeColStyle = {
      color: '#fff',
      backgroundColor: '#838383',
      borderColor: '#838383',
    };
    return field === sortBy ? activeColStyle : {};
  };

  return (
    <>
      <table id="tasks-table" role="table" aria-label="tasks-table">
        <thead>
          <tr>
            <th
              className="task-name-column"
              scope="col"
              style={checkActive('task_type')}
            >
              <ColButton
                onClick={() => {
                  setSortBy('task_type');
                  setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                }}
              >
                Task {renderAscDesc('task_type')}
              </ColButton>
            </th>
            <th scope="col" style={checkActive('list_type')}>
              <ColButton
                value={tasks.list_type}
                onClick={() => {
                  setSortBy('list_type');
                  setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                }}
              >
                List Type {renderAscDesc('list_type')}
              </ColButton>
            </th>
            <th scope="col" style={checkActive('target_url')}>
              <ColButton
                value={tasks.target_url}
                onClick={() => {
                  setSortBy('target_url');
                  setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                }}
              >
                Target URL {renderAscDesc('target_url')}
              </ColButton>
            </th>
            <th scope="col" style={checkActive('date')}>
              <ColButton
                value={tasks.date}
                onClick={() => {
                  setSortBy('date');
                  setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                }}
              >
                Scheduled {renderAscDesc('date')}
              </ColButton>
            </th>
            <th scope="col" style={checkActive('date_created')}>
              <ColButton
                value={tasks.date_created}
                onClick={() => {
                  setSortBy('date_created');
                  setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                }}
              >
                Created {renderAscDesc('date_created')}
              </ColButton>
            </th>

            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks &&
            sortData(tasks, sortBy, sortDirection)
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
