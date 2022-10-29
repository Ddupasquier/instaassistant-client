import React, { useLayoutEffect, useRef, useState } from 'react';
import TasksRow from './TasksRow';
import { sortData } from 'utils';
import { ColButton, BackNext, PageButton } from '../styled';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { IoChevronBackCircle, IoChevronForwardCircle } from 'react-icons/io5';

function TasksTable({ tasks, height }) {
  const [rowHeight, setRowHeight] = useState(0);
  const [start, setStart] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
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
    const tableHeight = height - 260;
    return Math.floor(tableHeight / rowHeight);
  };

  const numberOfPages = () => {
    const pages = Math.ceil(tasks.length / rowsPerPage());
    const pagesArr = Array.from(Array(pages).keys());
    return pagesArr;
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
      <div
        style={{
          display: 'flex',
          width: 'fit-content',
          alignItems: 'center',
          margin: 'auto',
          gap: '.3rem',
        }}
      >
        {start > 0 && (
          <BackNext
            onClick={() => {
              setStart(start - rowsPerPage());
              setCurrentPage(currentPage - 1);
            }}
          >
            <IoChevronBackCircle size="45" />
          </BackNext>
        )}
        {numberOfPages().map((page) => (
          <PageButton
            key={page}
            onClick={() => {
              setStart(page * rowsPerPage());
              setCurrentPage(page + 1);
            }}
            style={
              currentPage === page + 1
                ? {
                    transform: 'scale(1.1)',
                    background: 'rgba(125, 0, 255)',
                    color: 'white',
                  }
                : {}
            }
          >
            {page + 1}
          </PageButton>
        ))}
        {start + rowsPerPage() < tasks.length && (
          <BackNext
            onClick={() => {
              setStart(start + rowsPerPage());
              setCurrentPage(currentPage + 1);
            }}
          >
            <IoChevronForwardCircle size="45" />
          </BackNext>
        )}
      </div>
    </>
  );
}

export default TasksTable;
