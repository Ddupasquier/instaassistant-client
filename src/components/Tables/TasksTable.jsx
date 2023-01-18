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
  /**
   * @function renderAscDesc
   * @param {string} field
   * @returns {JSX} icon
   * @description
   * This function checks the field and returns the appropriate icon
   * based on the field.
   * @example
   * renderAscDesc('date')
   * // returns <IoIosArrowDown />
   * renderAscDesc('task')
   * // returns null
   */

  useLayoutEffect(() => {
    if (rowRef.current) {
      setRowHeight(rowRef.current.offsetHeight);
    }
  }, [rowRef]);

  const rowsPerPage = () => {
    const tableHeight = height - 260;
    return Math.floor(tableHeight / rowHeight) < 5
      ? 5
      : Math.floor(tableHeight / rowHeight);
  };
  /**
   * @function rowsPerPage
   * @returns {number} rows
   * @description
   * This function calculates the number of rows that can be rendered on screen
   * based on the height of the table.
   * @example
   * rowsPerPage()
   * // returns 10
   * // if the height of the table is 500px and each row is 50px
   * // then 10 rows can be rendered on screen
   * // 500px - 260px (header and footer) = 240px
   * // 240px / 50px = 4.8
   * // Math.floor(4.8) = 4
   * // 4 rows * 50px = 200px
   * // 200px + 260px = 460px
   * // 460px < 500px
   * // 10 rows can be rendered on screen
   */

  const numberOfPages = () => {
    const pages = Math.ceil(tasks.length / rowsPerPage());
    const pagesArr = Array.from(Array(pages).keys());
    return pagesArr;
  };
  /**
   * @function numberOfPages
   * @returns {array} of page numbers
   * @description
   * This function calculates the number of pages based on the number of rows
   * and the height of the table.
   * @example
   * numberOfPages()
   * // returns [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
   * // if there are 100 rows and there are 10 rows rendered on screen
   */

  const checkActive = (field) => {
    const activeColStyle = {
      color: '#fff',
      backgroundColor: '#838383',
      borderColor: '#838383',
    };
    return field === sortBy ? activeColStyle : {};
  };
  /**
   * @function checkActive
   * @param {string} field
   * @returns {object} style
   * @description
   * This function checks the field that is being sorted by and returns the
   * appropriate style object to be applied to the column header.
   */

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
            <th scope="col">Status</th>
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
          transition: 'all .5s',
        }}
      >
        <BackNext
          onClick={() => {
            setStart(start - rowsPerPage());
            setCurrentPage(currentPage - 1);
          }}
          css={{ visibility: start > 0 ? 'visible' : 'hidden' }}
        >
          <IoChevronBackCircle size="45" />
        </BackNext>
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
        <BackNext
          onClick={() => {
            setStart(start + rowsPerPage());
            setCurrentPage(currentPage + 1);
          }}
          css={{
            visibility:
              start + rowsPerPage() < tasks.length ? 'visible' : 'hidden',
          }}
        >
          <IoChevronForwardCircle size="45" />
        </BackNext>
      </div>
    </>
  );
}

export default TasksTable;
